import React, { useState } from "react";
import axios from "axios";

const TextInput = ({ onScoreText }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:8000/api/score-text/";
    // process.env.NODE_ENV === "development"
    //   ?
    //   : "http://app:8000/api/score-text/";

    try {
      const response = await axios.post(apiUrl, { text: inputText });
      console.log("Received text:", response.data);
      onScoreText(response.data.text, response.data);
    } catch (error) {
      console.error("Error sending text:", error);
    }
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to score"
      />
      <button type="submit">Score Text</button>
    </form>
  );
};

export default TextInput;
