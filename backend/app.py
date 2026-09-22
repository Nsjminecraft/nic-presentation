from flask import Flask, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Path to React build
CLIENT_DIR = os.path.join(os.path.dirname(__file__), '..', 'frontend', 'dist')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    # Try to serve the requested file from the React build
    file_path = os.path.join(CLIENT_DIR, path)
    if path and os.path.exists(file_path):
        return send_from_directory(CLIENT_DIR, path)
    # Fall back to index.html for client-side routing
    return send_from_directory(CLIENT_DIR, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
