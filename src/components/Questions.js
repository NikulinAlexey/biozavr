import { useEffect, useState } from "react";
import Question from "./Question";

function Questions({
  questions,
  handleDeleteQuestion,
  handleGetAllQuestions,
}) {
  function onGetAllQuestions() {
    handleGetAllQuestions();
  };
  
  return (
    <section className="question-list">
      <button
        onClick={onGetAllQuestions}
        className="question-list__button"
      >
        Посмотреть загруженные вопросы
      </button>

      {questions ?
        questions.map((question, i) => (
          <Question
            key={question._id}
            question={question}
            handleDeleteQuestion={handleDeleteQuestion}
          />
        ))
        :
        <></>
      }
    </section>
  );
};

export default Questions;
