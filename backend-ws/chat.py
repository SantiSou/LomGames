#!/bin/env python
from app import create_app, socketio
import configs

app = create_app(debug=True)

if __name__ == '__main__':
    socketio.run(app, host=configs.SERVER_IP, port=configs.SERVER_PORT )
