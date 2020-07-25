from flask import Blueprint, request
import app.services.MongoServices as MongoServices
import app.utils.utils as utils

users_api = Blueprint("users_api",__name__)


@users_api.route("/", methods=["POST"])
def signup():
    data = request.get_json()
    username = data["username"]
    email = data["email"]
    password = data["password"]
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
        if user["password"] == password:
            return user["token"]
    return ""
