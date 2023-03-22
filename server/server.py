from database import db, app
from routes.user_routes import user_bp
from routes.quiz_routes import quiz_bp
from routes.quiz_data_routes import quiz_data_bp

app.register_blueprint(user_bp)
app.register_blueprint(quiz_bp)
app.register_blueprint(quiz_data_bp)


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)