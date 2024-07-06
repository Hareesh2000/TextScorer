import React, { useState, useEffect } from "react";
import axios from "axios";

const TextScoreHistory = () => {
  const [textScoreHistory, setTextScoreHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const fetchTextScoreHistory = async () => {
      const apiUrl = "http://localhost:8000/api/text-scores/";
      try {
        const response = await axios.get(apiUrl);
        setTextScoreHistory(response.data);
      } catch (error) {
        console.error("Error fetching text score history:", error);
      }
    };

    if (showHistory) {
      fetchTextScoreHistory();
    }
  }, [showHistory]);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div id="container">
      <button onClick={toggleHistory}>
        {showHistory ? "Hide History" : "Show History"}
      </button>
      {showHistory && (
        <table>
          <thead>
            <tr>
              <th>Text</th>
              <th>Vectara Score</th>
              <th>Education Score</th>
            </tr>
          </thead>
          <tbody>
            {textScoreHistory.map((textScore) => (
              <tr key={textScore.id}>
                <td>{textScore.text}</td>
                <td>{textScore.vectara_score}</td>
                <td>{textScore.education_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TextScoreHistory;
