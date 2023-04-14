import { useState, useEffect } from 'react';
import { fetchQuestions } from '../../../../server/controller/api';
import Grid from '@mui/material/Unstable_Grid2';

function MyComponent() {
  const categories = ["science", "history", "geography", "music", "arts & literature", "film & tv", "food & drink", "general knowledge", "society & culture", "sport & leisure"]
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions(5, categories).then(data => {
      setQuestions(data);
    });
  }, []);

  return (
    <div>
      <h1>Trivia Questions:</h1>
      <ul>
        {questions.map(question => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;