function Question({
  question,
  handleDeleteQuestion,
}) {

  function onDeleteQuestion() {
    handleDeleteQuestion(question._id);
  }

  return (
    <article className="add-form__question">
      <ul className="add-form__list">
        <li className="add-form__list-item">
          Линия: {question.line}
        </li >
        <li className="add-form__list-item">
          Тема: {question.theme}
        </li >
        <li className="add-form__list-item">
          Основной текст: {question.mainText}
        </li >
        <li className="add-form__list-item">
          Сабтекст: {question.subText}
        </li >
        <li className="add-form__list-item">
          Ссылка на картинку: {question.image}
        </li>
        <li className="add-form__list-item">
          Инструкция: {question.instruction}
        </li>
        <li className="add-form__list-item">
          Ответ: {question.answer}
        </li>
        <li className="add-form__list-item">
          Пояснение: {question.explanation}
        </li>
        <li className="add-form__list-item">
          Источник: {question.source}
        </li >
        <li className="add-form__list-item">
          id вопроса: {question._id}
        </li>
        <li className="add-form__list-item">
          id создателя: {question.owner}
        </li >
        <li className="add-form__list-item">
          Время создания: {question.createdAt}
        </li >
      </ul>

      <button
        onClick={onDeleteQuestion}
        className="add-form__delete-button"
      >
        Удалить этот вопрос
      </button>
    </article>
  );
};

export default Question;
