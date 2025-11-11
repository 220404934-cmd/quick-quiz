import React from "react";

function QuestionCard({ question, onAnswerClick }) {
  return (
    <div className="card">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="optionBtn"
            onClick={() => onAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;