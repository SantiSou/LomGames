
import flask
from flask import request, jsonify, Flask, render_template
from flask_pymongo import PyMongo
from app.server.loggermiddleware import LoggerMiddleware
import configs

from app.server.users.routes import users_api

app = Flask(__name__)

# Te comento esta linea porque me da error en el signup
#app.wsgi_app = LoggerMiddleware(app.wsgi_app)
app.config["MONGO_URI"] = configs.MONGO_URI
mongo = PyMongo(app)

app.register_blueprint(users_api, url_prefix="/users")

weapons = [
    {'id': 0,
     'name': 'Sword',
     'damage': '7',
     'durability': '63%',
     'value': '35 copper'},
    {'id': 1,
     'name': 'Dagger',
     'damage': '4',
     'durability': '24%',
     'value': '12 copper'},
    {'id': 2,
     'name': 'Bow',
     'damage': '11',
     'durability': '88%',
     'value': '3 silver'},
]


@app.route('/', methods=['GET'])
def home_page():
    user = request.environ['user']
    return "Hi %s" % user['name']



app.debug = True
app.run(host=configs.SERVER_IP, port=configs.SERVER_PORT)
