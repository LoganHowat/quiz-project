from database import db

class QuizData(db.Model):
    __tablename__ = "quiz_data"
    
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    score = db.Column(db.Integer, nullable=False)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def serialized(self):
        return {
            "id": self.id
        }