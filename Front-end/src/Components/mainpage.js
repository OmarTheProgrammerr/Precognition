import React, { useState } from "react";
import "./mainpage.css";

function Mainpage() {
  const [inputHeight, setInputHeight] = useState("20px");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateText(e.target.value);
      e.target.value = "";
    } else if (e.key === "Enter" && e.metaKey) {
      e.preventDefault();
      e.target.value += "\n";
    }
  };

  const handleInput = (e) => {
    setInputHeight("auto");
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const generateText = async (prompt) => {
    const response = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    console.log(data.message);
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
          style={{ height: inputHeight }}
        />
        <br />
      </div>
    </div>
  );
}

export default Mainpage;
