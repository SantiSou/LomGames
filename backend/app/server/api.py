
import flask
from flask import request, jsonify, Flask, render_template
from flask_pymongo import PyMongo
import configs


app = flask.Flask(__name__)
app.config["MONGO_URI"] = configs.MONGO_URI
mongo = PyMongo(app)

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
    result = []
    for weapon in weapons:
        result.append(weapon)
    return jsonify(result)


app.debug = True
app.run()
