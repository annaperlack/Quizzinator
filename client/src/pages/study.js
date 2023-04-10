import React, { useState } from "react";
// import { fetchQuestions } from "../../../server/controller/api";
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

  const handleButtonClick = async () => {
    try {
      const { data } = await getRandom(5); // Change limit value as per requirement
      //const data = response.json()
      console.log(data);
      const questionArray = data.map((question) => ({
        id: question.id,
        question: question.question,
        choices: shuffle([
          ...question.incorrectAnswers,
          question.correctAnswer,
        ]),
        correctAnswer: question.correctAnswer,
      }));
      console.log(questionArray);
      setQuestions(questionArray);
    } catch (error) {
      console.error(error);
    }
  };
  const choiceClick = (event)=>{
    console.log(event.target)
    if (event.target.value === 'true') {console.log('correct answers selected')}
    else {console.log('wrong answer')}
  }

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
                {question.choices.map(choice=>(
               choice=== question.correctAnswer ? <button value= 'true' onClick={choiceClick} key={choice}> {choice}</button>: <button value = 'false' onClick={choiceClick}key={choice}> {choice}</button>   

                ))}

                </div>
                </li>
          ))}
        </ul>
      )}
    </div>
  );
}
