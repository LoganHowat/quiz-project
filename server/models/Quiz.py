from database import db

class Quiz(db.Model):
    
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    category = db.Column(db.String(20), unique=True, nullable=False)
    questions = db.Column(db.String())#Questions are being passed as a string because sqlite does not support array data type(We can recieve the json request as a string then convert it in a route)
    
    def serialized(self):
        return {
            "id": self.id,
            "category": self.category,
            "questions": self.questions
        }