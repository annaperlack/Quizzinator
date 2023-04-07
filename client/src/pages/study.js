import React, { useState } from "react";
import { fetchQuestions } from "../../../server/controller/api";

export default function Study() {
const [questions, setQuestions] = useState([]);

const handleButtonClick = async () => {
try {
const data = await fetchQuestions(10); // Change limit value as per requirement
setQuestions(data);
} catch (error) {
console.error(error);
}
};

return (
<div>
<h1>Study Page</h1>
<button onClick={handleButtonClick}>Fetch Questions</button>
{questions.length > 0 && (
<ul>
{questions.map((question) => (
<li key={question.id}>{question.text}</li>
))}
</ul>
)}
</div>
);
}