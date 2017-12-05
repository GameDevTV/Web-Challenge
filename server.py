from flask import Flask, jsonify

server = Flask(__name__)

@server.route('/hello')
def hello():
    return jsonify({"hello": "world"})

if __name__ == "__main__":
    server.run(host='0.0.0.0', port=8000, debug=True)