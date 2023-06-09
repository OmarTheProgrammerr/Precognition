import React, { useState, useEffect } from "react";
import "./mainpage.css";
import "./mainpage.scss";
import { GiEvilEyes } from "react-icons/gi";

function Mainpage() {
  const [inputHeight, setInputHeight] = useState("50px");
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

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

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://precognition-back-end.herokuapp.com/fetch-data"
      );
      const data = await response.json();
      console.log("Fetched data from the database:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleKeyUp = (e) => {
    if (e.key === "Backspace" && e.target.scrollTop === 0) {
      setInputHeight("50px");
      e.target.style.height = "50px";
    }
  };

  const storeData = async (userInput, generatedResponse) => {
    try {
      await fetch("https://precognition-back-end.herokuapp.com/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput,
          generatedResponse,
          timestamp: new Date(),
        }),
      });
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };
  const generateText = async (prompt) => {
    let BadOpenAi = false;
    console.log("we are in the generateText function!");
    setIsLoading(true); // Set isLoading to true
    const response = await fetch(
      "https://precognition-back-end.herokuapp.com/api/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );
    console.log(
      "This is the response that we got from the back-end in the fron-end:  " +
        response
    );
    const data = await response.json();
    if (data && data.message) {
      console.log(data.message);
    } else {
      BadOpenAi = true;
      console.error("Unexpected response:", data);
    }
    console.log(data.message);

    storeData(prompt, data.message);

    const generatedTextElement = document.createElement("p");
    const contentElement = document.querySelector(".content");
    contentElement.appendChild(generatedTextElement);

    if (BadOpenAi) {
      data.message =
        " Waiting for OpenAI to accept my request for extra Quotas, should be good to go soon!";
    }
    // Slowly add each character to the element
    for (let i = 0; i < data.message.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      generatedTextElement.textContent += data.message[i];
    }

    setIsLoading(false); // Set isLoading to false
  };

  const text = "I'ma Predict You!";
  const splitText = text.split(" ").map((word, index) => (
    <span className="predict" key={index}>
      {word}&nbsp;
    </span>
  ));
  return (
    <div className="page">
      <div className="header">{splitText}</div>
      <div className="content">
        <p className="reader">
          Write me a scenario and I will predict what would happen next!
        </p>
        <br />
        <textarea
          className="input-box"
          placeholder="Type somthing like: What would happen if ......"
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onKeyUp={handleKeyUp}
          style={{ height: inputHeight }}
        />
        <br />
        <div className="icon-wrapper">
          <div className="icon-container">
            <GiEvilEyes
              size={72}
              style={{ color: isLoading ? "red" : "aqua" }}
            />{" "}
          </div>
        </div>
      </div>
      <div className="copyright">&copy; 2023</div>
      <a class="twitter" target="_top" href="https://twitter.com/omar_fsm02">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 72 72"
        >
          <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path>
        </svg>
      </a>
    </div>
  );
}

export default Mainpage;
