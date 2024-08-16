from flask import Flask, render_template, jsonify
import models

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommendations')
def get_recommendations():
    recommendations = models.get_personalized_recommendations()
    return jsonify({'recommendations': recommendations})

if __name__ == '__main__':
    app.run(debug=True)
