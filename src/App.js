import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🐶": "Dog",
  "🐱": "cat",
  "🐭": "Mouse",
  "🐰": "Rabbit",
  "🦊": "fox",
  "🐻": "bear",
  "🐼": "Panda",
  "️🐨": "koala",
  "🐯": "tiger",
  "🦁": "Lion",
  "🐮": "cow",
  "🐷": "Pig",
  "🐵": "monkey",
  "🐅": "tiger",
  "🐆": "Leopard",
  "🦓": "Zebra"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Animal Emojis Identifier 🐶</h1>

      <input
        onChange={emojiInputHandler}
        placeholder=" enter emoji "
        onChange={emojiInputHandler}
        style={{
          padding: "1rem",
          margin: "0.5rem auto 2rem",
          width: "80%",
          border: "2px solid ",
          overflow: "hidden",
          color: "lightgray",
          borderRadius: "7px"
        }}
      ></input>
      <br />

      <h2
        style={{
          backgroundColor: "lightpink",
          display: "inline-block",
          borderRadius: "7px",
          overflow: "hidden",
          margin: "0.5 auto 2rem",
          width: "50%",
          margin: "1rem"
        }}
      >
        {" "}
        {meaning}{" "}
      </h2>

      <h3> Animal List Below</h3>
      <h3> Click on the animal to identify them</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              display: "inline-block",
              padding: "1rem",
              cursor: "pointer",
              backgroundColor: "lightgray",
              padding: "1rem",
              margin: "1rem",
              borderRadius: "5px"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
