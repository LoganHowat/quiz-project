from database import db
from models.QuizData import QuizData

class Quiz(db.Model):
    
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    categories = db.Column(db.String(20), nullable=False)
    difficulty = db.Column(db.String(20), nullable=False)
    questions = db.Column(db.String())#Questions are being passed as a string because sqlite does not support array data type(We can recieve the json request as a string then convert it in a route)
    limit = db.Column(db.Integer(), nullable=False)
    quiz_data = db.relationship(QuizData, backref='quiz_data')
    
    def serialized(self):
        return {
            "id": self.id,
            "categories": self.categories,
            "limit":self.limit,
            "difficulty":self.difficulty,
            "questions": self.questions
        }