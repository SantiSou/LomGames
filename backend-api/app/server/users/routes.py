
import requests, configs, bcrypt
from flask import Blueprint, request
import app.services.MongoServices as MongoServices
import app.utils.utils as utils

users_api = Blueprint("users_api",__name__)


@users_api.route("/", methods=["POST"])
def signup():
    data = request.get_json()
    username = data["username"]
    email = data["email"]
    password = bcrypt.hashpw(data["password"].encode('utf-8'), bcrypt.gensalt())
    user = MongoServices.getDocument({ "username": username},"users")
    email_ = MongoServices.getDocument({ "email": email},"users")
    if user:
        return 'Usuario existente, seleccione otro.', 400
    elif email_:
        return 'Correo existente, seleccione otro.', 400
    else:
        MongoServices.saveDocument({"username":username, "email" : email, "password" : password, "token" : utils.getRandomString(128)},"users")
        return data

@users_api.route("/login",methods=["POST"])
def login():
    data = request.get_json()
    username = data["username"]
    password = data["password"]
    user = MongoServices.getDocument({ "username": username},"users")
    if user:
        # Validamos el password acá
        if bcrypt.checkpw(password.encode('utf-8'), user["password"]):
            return user["token"]
    return "Usuario o contraseña incorrecto.", 400
