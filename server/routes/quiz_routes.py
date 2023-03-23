from flask import Blueprint
from models.Quiz import Quiz
from database import db
from flask import request
import requests
import json

quiz_bp= Blueprint('quiz_bp', __name__)

def convertJson(quiz):
    return quiz.serialized()

def listCategories(category):
    print()

@quiz_bp.route("/quizzes")
def get_quizzes():
    quizzes = Quiz.query.all()
    quizzes_data = map(convertJson, quizzes)
    return_value = (list(quizzes_data))
    return return_value


@quiz_bp.post("/questions")
def make_quiz():
    try:
        data = request.data
        json_data = json.loads(data)
        if json_data["categories"] and json_data["difficulty"] and json_data["limit"]: 
            res = requests.get(f'https://the-trivia-api.com/api/questions?categories={json_data["categories"]}&difficulty={json_data["difficulty"]}&limit={json_data["limit"]}')
            questions = str(json.loads(res.text))
            quiz = Quiz(categories=json_data["categories"], difficulty=json_data["difficulty"], limit=json_data["limit"], questions=questions)
            db.session.add(quiz)
            db.session.commit()
            return json.loads(res.text)
        else:
            return{
                "Message":"Please enter all fields"
            }, 404
    except Exception as e:
        return{
            "Message":str(e)
        },500
        
@quiz_bp.route("/categories")
def get_categories():
    try:
        res = requests.get('https://the-trivia-api.com/api/categories')
        json_response = json.loads(res.text)
        array = []
        for category in json_response:
            array.append(category)
        return array
    except Exception as e:
        return{
            "Message":str(e)
        },500