import openai
from flask import Flask, request, jsonify
from flask_cors import CORS

openai.api_key = "SOQXm0U1ajxq3E0ONzSiT3BlbkFJM2FGmbRX749VvDIn1Jvm"
app = Flask(__name__)
CORS(app)  # add this line to enable CORS for all routes

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        prompt = request.json['prompt']
        message = generate_text(prompt)
        return jsonify({'message': message})
    except Exception as e:
        return jsonify({'error': str(e)})


@app.route('/')
def index():
    return "<h1>Welcome to the GPT API</h1>"

def generate_text(prompt):
    completions = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    message = completions.choices[0].text.strip()
    return message

if __name__ == "__main__":
    app.run(debug=True)