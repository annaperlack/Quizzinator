import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Select, Button, List, ListItem, ListItemText } from '@mui/material';

import { getRandom } from "../utils/api";

export default function Study() {
  const [category, setCategory] = useState(null);
  const [answered, setAnswered] = useState(0);
  const [correct, setCorrect] = useState(0);
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
      const { data } = await getRandom(10, category); // Change limit value as per requirement
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
    
    setAnswered(answered + 1)
    if(isCorrect) {
      setCorrect(correct + 1)
    }
    
    setSelectedChoices((prevState) => ({
      ...prevState,
      [questionId]: {
        choice,
        correctAnswer,
        isCorrect,
      },
    }));
  };

  const handleCategorySelect = (event) => {
    setCategory(event.target.value)
  };
  
  return (
    <div>
      <h1>Study Page</h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          id="category-select"
          label="Category"
          onChange={handleCategorySelect}
          sx={{ mb: 2 }}
        >
          <MenuItem value={'science'}>Science</MenuItem>
          <MenuItem value={'history'}>History</MenuItem>
          <MenuItem value={'geography'}>Geography</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleButtonClick} disabled={!category}>Fetch Questions</Button>
      </FormControl>
      {questions.length > 0 && (
        <ol>
          {questions.map((question) => (
            <li key={question.id}>
              <div>
                {question.question}
                {question.choices.map((choice) => (
                  <List>
                    <ListItem>
                      <button
                        value={choice}
                        onClick={(event) =>
                          choiceClick(event, question.id, choice)
                        }
                        key={choice}
                        disabled={selectedChoices[question.id]}
                      >{choice}</button>
                    </ListItem>
                  </List>
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
        </ol>
      )}
      <label><b>Total Correct: {correct}/{answered}</b></label>
    </div>
  );
                    }  