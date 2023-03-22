from database import db
from models.QuizData import QuizData

class User(db.Model):
    
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(20), unique=True, nullable=False)
    quiz_data = db.relationship(QuizData, backref='user_data')
    
    
    def serialized(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email
        }