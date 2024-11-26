from flask import Flask
from flask_socketio import SocketIO, send
# from flask_cors import CORS

app = Flask(__name__)
# CORS(app)
# app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():
    return "Welcome to the Flask WebSocket Example!"

@socketio.on('message')
def handle_message(msg):
    print('Message: ' + msg)
    send(msg.lower(), broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)