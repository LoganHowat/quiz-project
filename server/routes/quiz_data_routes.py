from flask import Blueprint
from models.QuizData import QuizData
from database import db
from flask import request
import requests
import json

quiz_data_bp= Blueprint('quiz_data_bp', __name__)

def convertJson(quiz_data):
    return quiz_data.serialized()

def returnScores(quiz_data):
    user = requests.get(f'http://localhost:5000/user/{quiz_data.user_id}')
    json_user = (json.loads(user.text))
    name = json_user["name"]
    return {
        "user":name,
        "score":quiz_data.score,
        "game_id":quiz_data.id
    }

#Map through the list and return the score and name in a dictionary in an array
@quiz_data_bp.route("/quiz_data")
def get_all_quiz_data():
    quiz_data_list = QuizData.query.order_by(QuizData.score).all()
    quizzes_data = map(returnScores, quiz_data_list)
    return_value = (list(quizzes_data))
    return return_value

#Adds a new instance of quiz data with the user and quiz id, this will be done every time a new game is started/hosted
@quiz_data_bp.post("/quiz_data/<user_id>/<quiz_id>")
def create_quiz_data_instance(user_id, quiz_id):
    quiz_data = QuizData(user_id=user_id, quiz_id=quiz_id, score=0)
    db.session.add(quiz_data)
    db.session.commit()
    return quiz_data.serialized()

#Look for all quiz data for a specific user (All the games theyve played and the scores they got, this way we can see the high score)
@quiz_data_bp.route("/quiz_data/<user_id>")
def get_user_quiz_data(user_id):
    quiz_data_list = QuizData.query.filter_by(user_id=user_id).order_by(QuizData.score).all()
    quizzes_data = map(convertJson, quiz_data_list)
    return(list(quizzes_data))

#Updates the score of the user
@quiz_data_bp.route("/quiz_data/<quiz_data_id>", methods=["PUT"])
def add_score(quiz_data_id):
    data = request.data
    json_data = json.loads(data)
    current_quiz_data = QuizData.query.get_or_404(quiz_data_id)
    current_quiz_data.score = int(json_data["score"])
    db.session.commit()
    return current_quiz_data.serialized()


@quiz_data_bp.route("/quiz_data/quiz_data_id/<id>")
def getquiz_data(id):
    quiz_data = QuizData.query.filter_by(id=id).first()
    return quiz_data.serialized()