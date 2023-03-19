import React, { useState } from "react";
import "./mainpage.css";

function Mainpage() {
  const [inputHeight, setInputHeight] = useState("auto");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.target.scrollHeight > e.target.clientHeight) {
      setInputHeight(`${e.target.clientHeight * 2}px`);
    }
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
        <input
          type="text"
          className="input-box"
          style={{ height: inputHeight }}
          onKeyDown={handleKeyDown}
        />
        <br />
      </div>
    </div>
  );
}

export default Mainpage;
