import openai
from flask import Flask, request, jsonify

openai.api_key = "SOQXm0U1ajxq3E0ONzSiT3BlbkFJM2FGmbRX749VvDIn1Jvm"
app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    prompt = request.json['prompt']
    message = generate_text(prompt)
    return jsonify({'message': message})

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
    app.run()
