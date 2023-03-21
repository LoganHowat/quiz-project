from flask import Blueprint
from models.Quiz import Quiz
from database import db
from flask import request
import requests
import json

quiz_bp= Blueprint('quiz_bp', __name__)


@quiz_bp.route("/questions")
def users():
    try:
        data = request.data
        json_data = json.loads(data)
        if json_data["categories"] and json_data["difficulty"] and json_data["limit"]: 
            res = requests.get(f'https://the-trivia-api.com/api/questions?categories={json_data["categories"]}&difficulty={json_data["difficulty"]}&limit={json_data["limit"]}')
            return json.loads(res.text)
        else:
            return{
                "Message":"Please enter all fields"
            }, 404
    except:
        return{
            "Message":"Something went wrong"
        },500