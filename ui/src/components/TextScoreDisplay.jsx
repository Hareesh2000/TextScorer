import React from 'react';

const TextScoreDisplay = ({ text, scores }) => {
  return (
    <div id="display">
      <h2>Scored Text</h2>
      <p>{text}</p>
      <h2>Scores</h2>
      <p>Vectara: {scores.vectara_score}</p>
      <p>Education: {scores.education_score}</p>
    </div>
  );
};

export default TextScoreDisplay;