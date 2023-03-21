from database import db, app
from routes.user_routes import user_bp

app.register_blueprint(user_bp)


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)