import { useState, useEffect } from "react";

function Quiz() {
  const questions = [
    'Сколько мембран у рибосомы?',
    'Что такое АТФ?',
    'Перечислите типы РНК',
    'Из чего состоит клеточная стенка грибов?'
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  
  function setNextQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
  function setPreviousQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex  - 1);
  }

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [questions, currentQuestionIndex])
  
  return (
    <section className="quiz">
      <div className="quiz__question-container" >
        <p className="quiz__question">
          {currentQuestion}
        </p>
      </div>
      <div className="quiz__buttons">
        <div className="quiz__button" onClick={setPreviousQuestion}> Назад </div>
        <div className="quiz__button" onClick={setNextQuestion} > Вперед </div>
      </div>
    </section>  
  )
};

export default Quiz;