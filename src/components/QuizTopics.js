import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizTopics({ quizTopics, handleSelectTopic }) {
  const navigate = useNavigate();
  const [isEmptyData, setIsEmptyData] = useState(true);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [checked, setChecked] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    
    if (selectedTopics.length === 0) {
      setIsEmptyData(true);
    }
    else {
      handleSelectTopic(selectedTopics);
      navigate('quiz')
    }
  }
  
  function handleChange(e) {
    if (checked[e.target.name]) {
      delete checked[e.target.name]
    }
    else {
      setIsEmptyData(false);
      setChecked({
        ...checked,
        [e.target.name]: e.target.checked
      });
    }
  }

  useEffect(() => {
    const result = quizTopics.filter(({ title }) => Object.keys(checked).includes(title));
    
    setSelectedTopics(result);

    
  }, [checked, quizTopics]);

  return (
    <section className="quiz-topics">
      <form className="quiz-topics__form" onSubmit={handleSubmit}>
        <ul className="quiz-topics__list">
          {quizTopics.map((topic,i) => (
            <li className="quiz-topics__item" key={i}>
              <label className="quiz-topics__label">
                <input
                  id={topic.title}
                  type="checkbox"
                  name={topic.title}
                  className="quiz-topics__input"
                  checked={checked.name}
                  onChange={handleChange}
                />
                <span className="quiz-topics__pseudo-item"></span>
                <span className="quiz-topics__label-text">
                  {topic.title}
                </span>
              </label>
            </li>
          ))}
        </ul>
        <span className={`quiz-topics__info ${isEmptyData ? 'active' : ''}`}>Необходимо выбрать тему</span>
        <button className={`quiz-topics__button ${isEmptyData ? 'quiz-topics_button_disabled' : ''}`} disabled={isEmptyData}>
          <div className="quiz-topics__symbol"></div>
        </button>
      </form>
    </section>
  )
};

export default QuizTopics;