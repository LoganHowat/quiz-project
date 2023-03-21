from flask import Blueprint
from models.user import User
from database import db
from flask import request
import json

user_bp= Blueprint('user_bp', __name__)

def convertJson(user):
    return user.serialized()

def validateNewUser(user):
    try:
        if user["name"] and user["email"] and user["password"]:
            return False
        else:
            return {
                "message":"All fields must be filled in"
            }, 404
    except:
        return{
            "Message":"Something went wrong"
        },500

@user_bp.route("/users")
def users():
    users = User.query.all()
    users_data = map(convertJson, users)
    return_value = (list(users_data))
    return return_value

@user_bp.post("/users")
def user():
    data = request.data #This returns the request body data to the method
    json_data = json.loads(data)
    errors = validateNewUser(json_data)
    if errors:
        return errors
    else:
        user = User(name=json_data["name"], email=json_data["email"], password=json_data["password"])
        db.session.add(user)
        db.session.commit()
        return json_data