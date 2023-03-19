import React, { useState } from "react";
import "./mainpage.css";

function Mainpage() {
  const [inputHeight, setInputHeight] = useState("50px");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log(
        "this is the data being sent from the user: " + e.target.value
      );
      generateText(e.target.value);
      e.target.value = "";
    } else if (e.key === "Enter" && e.metaKey) {
      console.log(e.target.value);
      e.preventDefault();
      e.target.value += "\n";
    }
  };

  const handleInput = (e) => {
    setInputHeight("auto");
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeyUp = (e) => {
    if (e.key === "Backspace" && e.target.scrollTop === 0) {
      setInputHeight("50px");
      e.target.style.height = "50px";
    }
  };

  const generateText = async (prompt) => {
    console.log("we are in the generateText function! ");
    const response = await fetch("http://127.0.0.1:5000/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    console.log("here we are waiting, but not really getting a response!");
    const data = await response.json();
    console.log(data.message);
    // Update the UI with the generated text
    const generatedTextElement = document.createElement("p");
    generatedTextElement.textContent = data.message;
    const contentElement = document.querySelector(".content");
    contentElement.appendChild(generatedTextElement);
  };

  const text = "I'ma Predict You!";
  const splitText = text
    .split(" ")
    .reduce((prev, current) => [...prev, current, "\u00A0"], []);

  return (
    <div className="page">
      <div className="header">
        {splitText.map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
      <div className="content">
        <p className="reader">
          Write me a scenario and I will predict what would happen next!
        </p>
        <br />
        <textarea
          className="input-box"
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onKeyUp={handleKeyUp}
          style={{ height: inputHeight }}
        />
        <br />
      </div>
    </div>
  );
}

export default Mainpage;
