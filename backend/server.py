
import asyncio
import json
import websockets
import config

STATE = {"value": 0}

USERS = set()


def state_event():
    return json.dumps({"type": "state", **STATE})


def users_event():
    return json.dumps({"type": "users", "count": len(USERS)})


async def notify_state():
    if USERS:  # asyncio.wait doesn't accept an empty list
        message = state_event()
        await asyncio.wait([user.send(message) for user in USERS])

async def notify_message(message):
    if USERS:
        dic = json.dumps({ "type": "chat-message", "data" : message})
        await asyncio.wait([user.send(dic) for user in USERS])

async def notify_users():
    if USERS:
        message = users_event()
        await asyncio.wait([user.send(message) for user in USERS])


async def register(websocket):
    USERS.add(websocket)
    await notify_users()

async def unregister(websocket):
    USERS.remove(websocket)
    await notify_users()

async def tests(action, data):
    if action == "minus":
        STATE["value"] -= 1
        await notify_state()
    elif action == "plus":
        STATE["value"] += 1
        await notify_state()

async def processMessage(message):
    message_data = json.loads(message)
    if "message" not in message_data:
        message_data["message"] = ""
    return message_data["action"],message_data["message"]

async def counter(websocket, path):
    await register(websocket)
    try:
        await websocket.send(state_event())
        async for message in websocket:
            action,data = await processMessage(message)
            await tests(action,data)
            if action == "chat-message":
                await notify_message(data)
            else:
                print("unsupported event: {}", action)
    finally:
        await unregister(websocket)


start_server = websockets.serve(counter, config.SERVER_IP, config.SERVER_PORT)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()