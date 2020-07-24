
import flask
from flask import request, jsonify, Flask, render_template
from flask_pymongo import PyMongo


app = flask.Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://Drumsetto:jH9ZpMq6VfnjNBOP@cluster0.qlmhv.mongodb.net/test" # URI a fuero por ModuleNotFoundError: No module named 'config'
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