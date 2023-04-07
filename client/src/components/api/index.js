import { useState, useEffect } from 'react';
import { fetchQuestions } from '../../../../server/controller/api';

function MyComponent() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions(5).then(data => {
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