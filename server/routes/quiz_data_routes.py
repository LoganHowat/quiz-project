from flask import Blueprint
from models.QuizData import QuizData
from database import db
from flask import request
import requests
import json

quiz_data_bp= Blueprint('quiz_data_bp', __name__)

def convertJson(quiz_data):
    return quiz_data.serialized()

@quiz_data_bp.route("/quiz_data")
def get_all_quiz_data():
    quiz_data_list = QuizData.query.all()
    quizzes_data = map(convertJson, quiz_data_list)
    return_value = (list(quizzes_data))
    return return_value

#Need another route that creates a QuizData instance with the user and the quiz
