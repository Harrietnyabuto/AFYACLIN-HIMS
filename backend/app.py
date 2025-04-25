from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ

app = Flask(__name__)
CORS(app) # Enable CORS for all routes
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL', 'sqlite:///test.db')
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def json(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email
        }
# Ensure tables are created within the application context
with app.app_context():    
    db.create_all()

    # Root route
    @app.route('/')
    def home():
        return jsonify({'message': 'Welcome to the Flask API!'}), 200


    @app.route('/api/flask/users', methods=['POST'])
    def create_user():
        try:
            data = request.get_json()
            new_user = User(name=data['name'], email=data['email'])
            db.session.add(new_user)
            db.session.commit()
            return jsonify({
                'id': new_user.id,
                'name': new_user.name,
                'email': new_user.email
            }), 201
        except Exception as e:
            return make_response(
                jsonify({'message': 'Error creating user', 'error': str(e)}), 500
            )
# Ensure app.run() is only called when the script is executed directly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)


@app.route('/api/flask/users', methods=['GET'])
def get_users():
    try:
        users = User.query.all()
        user_data =[{'id': user.id, 'name': user.name, 'email': user.email} for user in users]
        return jsonify(user_data), 200        
    except Exception as e:
        return make_response(
            jsonify({'message': 'Error fetching users', 'error': str(e)}), 500
        )
    
#get user by id
@app.route('/api/flask/users/<int:id>', methods=['GET'])
def get_user(id):
    try:
        user = User.query.filter_by(id=id).first() #get the first user with the id
        if user:
            return make_response( jsonify(user.json()), 200)
        return make_response(
                jsonify({'message': 'User not found'}), 404
            )
    except Exception as e:
        return make_response(jsonify({'message': 'Error fetching user', 'error': str(e)}), 500)
    
# update a user by id
@app.route('/api/flask/users/<int:id>', methods=['PUT'])
def update_user(id):
    try:
        data = request.get_json()
        user = User.query.filter_by(id=id).first()
        if user:
            user.name = data['name']
            user.email = data['email']
            db.session.commit()
            return make_response(jsonify({'message': 'User updated successfully'}), 200)
        return make_response(jsonify({'message': 'User not found'}), 404)
    except Exception as e:
        return make_response(jsonify({'message': 'Error updating user', 'error': str(e)}), 500)
    
# delete a user by id
@app.route('/api/flask/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    try:
        user = User.query.filter_by(id=id).first()
        if user:
            db.session.delete(user)
            db.session.commit()
            return make_response(jsonify({'message': 'User deleted successfully'}), 200)
        return make_response(jsonify({'message': 'User not found'}), 404)
    except Exception as e:
        return make_response(jsonify({'message': 'Error deleting user', 'error': str(e)}), 500)