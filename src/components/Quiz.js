import { useState, useEffect } from "react";

function Quiz({ selectedTopics }) {
  const [acceptedQuestions, setAcceptedQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function setRandomIndex(min, max) {
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

    setCurrentQuestionIndex(randomIndex);
  }

  function handleButtonClick() {
    setRandomIndex(0, acceptedQuestions.length - 1);
  }

  useEffect(() => {
    let copy = Object.assign([], acceptedQuestions);

    selectedTopics.forEach((item) => {
      item.questions.forEach((question) => {
        copy.push(question)
      })
    });

    setAcceptedQuestions(copy);
  }, []);

  useEffect(() => {
    const currentQuestion = acceptedQuestions[currentQuestionIndex];

    setCurrentQuestion(currentQuestion);
  },[currentQuestionIndex, acceptedQuestions])
  
  return (
    <section className="quiz">
      <div className="quiz__question-container" >
        <p className="quiz__question">
          {currentQuestion}
        </p>
      </div>
      <div className="quiz__buttons">
        <div className="quiz__button" onClick={handleButtonClick}> Следующий </div>
      </div>
    </section>
  )
};

export default Quiz;