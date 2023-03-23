from flask import Blueprint
from models.user import User
from database import db
from flask import request
import json
import bcrypt

user_bp= Blueprint('user_bp', __name__)

def convertJson(user):# This function calls a method defined in the user class that serializes the Object
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

@user_bp.post("/register")
def register_user():
    data = request.data #This returns the request body data to the method
    json_data = json.loads(data)
    errors = validateNewUser(json_data)
    if errors:
        return errors
    else:
        hashed = bcrypt.hashpw(json_data["password"].encode('utf-8'), bcrypt.gensalt())
        user = User(name=json_data["name"], email=json_data["email"], password=hashed)
        db.session.add(user)
        db.session.commit()
        return user.serialized()
    
    
@user_bp.post("/login")
def login_user():
    data = request.data
    json_data = json.loads(data)
    if not json_data["email"] or not json_data["password"]:
        return {"Message":"Please enter all valid fields"},404
    else:
        user = User.query.filter_by(email=json_data["email"]).first()
        if not user:
            return {"Message":"No user found"},404
        if bcrypt.checkpw(json_data["password"].encode('utf-8'), user.password):
            return {
                "Message":"Login was successful",
                "user":user.serialized()
            },200