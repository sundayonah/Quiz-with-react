import React, { useState } from "react";
import db from "./components/Firebase";
import "./index.css";

function QuizForm() {
  const [quizName, setQuizName] = useState("");
  const [quizDesc, setQuizDesc] = useState("");
  const [quizPoints, setQuizPoints] = useState("");
  const [quizTimeLimit, setQuizTimeLimit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add quiz data to Firestore
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quiz Name:
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
      </label>
      <label>
        Quiz Description:
        <textarea
          value={quizDesc}
          onChange={(e) => setQuizDesc(e.target.value)}
        />
      </label>
      <label>
        Points/Grading System:
        <input
          type="text"
          value={quizPoints}
          onChange={(e) => setQuizPoints(e.target.value)}
        />
      </label>
      <label>
        Time Limit:
        <input
          type="text"
          value={quizTimeLimit}
          onChange={(e) => setQuizTimeLimit(e.target.value)}
        />
      </label>
      <button type="submit">Create Quiz</button>
    </form>
  );
}

export default QuizForm;
