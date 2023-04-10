import React, { useState } from "react";
import { getRandom } from "../utils/api";

export default function Study() {
  const [questions, setQuestions] = useState([]);
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const [selectedChoices, setSelectedChoices] = useState({});

  const handleButtonClick = async () => {
    try {
      const { data } = await getRandom(5); // Change limit value as per requirement
      const questionArray = data.map((question) => ({
        id: question.id,
        question: question.question,
        choices: shuffle([
          ...question.incorrectAnswers,
          question.correctAnswer,
        ]),
        correctAnswer: question.correctAnswer,
      }));
      setQuestions(questionArray);
      setSelectedChoices({});
    } catch (error) {
      console.error(error);
    }
  };

  const choiceClick = (event, questionId, choice) => {
    const correctAnswer = questions.find((question) => question.id === questionId).correctAnswer;
    const isCorrect = correctAnswer === choice;
    setSelectedChoices((prevState) => ({
      ...prevState,
      [questionId]: {
        choice,
        correctAnswer,
        isCorrect,
      },
    }));
  };
  
  return (
    <div>
      <h1>Study Page</h1>
      <button onClick={handleButtonClick}>Fetch Questions</button>
      {questions.length > 0 && (
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              <div>
                {question.question}
                {question.choices.map((choice) => (
                  <button
                    value={choice}
                    onClick={(event) =>
                      choiceClick(event, question.id, choice)
                    }
                    key={choice}
                    disabled={selectedChoices[question.id]}
                  >
                    {choice}
                  </button>
                ))}
                {selectedChoices[question.id] && (
                  <p>
                    {selectedChoices[question.id].isCorrect ? "Correct" : "Incorrect"}.{" "}
                    {!selectedChoices[question.id].isCorrect &&
                      `The correct answer is "${selectedChoices[question.id].correctAnswer}".`}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
                    }  