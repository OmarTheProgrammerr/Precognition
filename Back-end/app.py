import os
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()  # load environment variables from .env file
openai.api_key = os.getenv("OPENAI_API_KEY")
app = Flask(__name__)
CORS(app)  # add this line to enable CORS for all routes

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        prompt = request.json['prompt']
        print("message is as follow")
        print("this is the user sent: "+prompt)
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt="I'm gonna be giving you a scenario and I want you to always start your first response (IMPORTANT: first only) with (sheeeesh, looks like we are predicting the future) or (Holy crap let's see what we got here, Hmmmm) or somthing funny like that ( you choose between 1, 2 or you creating one by yourself, so basically make your choice random please). Moreover, include some funny jokes and have a high schooler tone .IMPORTANT NOTE: if im not giving you a scenario that can be prictable (like for example saying hello), then just simply reply (ha? I'm here to pridct something, I don't have the time for a chat ( busy with some other users, HeHe (your the only one ^^))) Here is my scenario that i want you to predict what would happpen next:  "+prompt,
            temperature=0.7,
            max_tokens=3520,
            top_p=1,
            frequency_penalty=1,
            presence_penalty=1,
            api_key=openai.api_key,
            n=1,  # set the number of responses to 1
            stop=None,  # set the stopping sequence to None to generate only one response
        )
        message = response.choices[0].text.strip()
        print(message)
        return jsonify({'message': message})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)


