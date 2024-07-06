import React, { useState } from 'react';
import TextInput from './components/TextInput';
import TextScoreDisplay from './components/TextScoreDisplay';
import TextScoreHistory from './components/TextScoreHistory';
import './App.css';

const App = () => {
  const [scoredText, setScoredText] = useState('');
  const [scores, setScores] = useState({});

  const handleScoreText = (text, scores) => {
    setScoredText(text);
    setScores(scores);
  };

  return (
    <div id="container">
      <TextInput onScoreText={handleScoreText} />
      {scoredText && scores && (
        <TextScoreDisplay text={scoredText} scores={scores} />
      )}
       <TextScoreHistory />
    </div>
  );
};

export default App;