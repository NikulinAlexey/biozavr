import useFormWithValidation from "../hooks/useValidationForm";

import { useState } from 'react';

function AddForm({
  title = 'Загрузить новый вопрос',
  handleSubmit,
  textOfButton = 'Загрузить вопрос'
}) {
  const { values, handleChange, resetForm, isValid, errors } = useFormWithValidation();

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(values)
    resetForm();
  }

  return (
    <div className="add-form" >

      <h2 className="add-form__title"> {title} </h2>

      <form className="add-form__form" onSubmit={onSubmit}>
        <label className="add-form__label" htmlFor="image-input">Ссылка на картинку:</label>
        <input
          required
          type="url"
          name="image"
          minLength='5'
          id="image-input"
          placeholder="Вставьте ссылку на картинку"
          value={values.image || ''}
          onChange={handleChange}
          className={`add-form__input ${errors.image === undefined || errors.image === '' ? '' : 'add-form__input_type_error'}`}
        />
        <span id="name-input-error" className="add-form__error">
          {errors?.image}
        </span>

        <label className="add-form__label" htmlFor="mainText-input">Основной текст:</label>
        <input
          required
          type="text"
          name="mainText"
          minLength='5'
          id="mainText-input"
          placeholder="Напишите основной текст вопроса"
          value={values.mainText || ''}
          onChange={handleChange}
          className={`add-form__input ${errors.mainText === undefined || errors.mainText === '' ? '' : 'add-form__input_type_error'}`}
        />
        <span id="name-input-error" className="add-form__error">
          {errors?.mainText}
        </span>

        <label className="add-form__label" htmlFor="subText-input">Сабтекст:</label>
        <input
          required
          type="text"
          name="subText"
          minLength='5'
          id="subText-input"
          placeholder="Напишите вспомогательный текст вопроса"
          value={values.subText || ''}
          onChange={handleChange}
          className={`add-form__input ${errors.subText === undefined || errors.subText === '' ? '' : 'add-form__input_type_error'}`}
        />
        <span id="name-input-error" className="add-form__error">
          {errors?.subText}
        </span>

        <label className="add-form__label" htmlFor="theme-input">Тема:</label>
        <input
          required
          type="text"
          name="theme"
          minLength='3'
          id="theme-input"
          placeholder="Напишите тему вопроса"
          value={values.theme || ''}
          onChange={handleChange}
          className={`add-form__input ${errors.theme === undefined || errors.theme === '' ? '' : 'add-form__input_type_error'}`}
        />
        <span id="name-input-error" className="add-form__error">
          {errors?.theme}
        </span>

        <label className="add-form__label" htmlFor="line-input">Линия:</label>
        <input
          required
          type="text"
          name="line"
          minLength='1'
          maxLength = '2'
          id="line-input"
          placeholder="Укажите линию вопроса"
          value={values.line || ''}
          onChange={handleChange}
          className={`add-form__input ${errors.line === undefined || errors.line === '' ? '' : 'add-form__input_type_error'}`}
        />
        <span id="name-input-error" className="add-form__error">
          {errors?.line}
        </span>

        <label className="add-form__label" htmlFor="source-input">Источник:</label>
        <input
          required
          type="text"
          name="source"
          minLength='2'
          id="source-input"
          placeholder="Укажите источник вопроса"
          value={values.source || ''}
          onChange={handleChange}
          className={`add-form__input ${errors.source === undefined || errors.source === '' ? '' : 'add-form__input_type_error'}`}
        />
        <span id="name-input-error" className="add-form__error">
          {errors?.source}
        </span>

        <label className="add-form__label" htmlFor="answer-input">Ответ:</label>
        <input
          required
          type="text"
          name="answer"
          minLength='2'
          id="answer-input"
          placeholder="Укажите ответ на вопрос"
          value={values.answer || ''}
          onChange={handleChange}
          className={`add-form__input ${errors.answer === undefined || errors.answer === '' ? '' : 'add-form__input_type_error'}`}
        />
        <span id="name-input-error" className="add-form__error">
          {errors?.answer}
        </span>

        <label className="add-form__label" htmlFor="explanation-input">Пояснение:</label>
        <input
          required
          type="text"
          name="explanation"
          minLength='2'
          id="explanation-input"
          placeholder="Укажите пояснение к ответу"
          value={values.explanation || ''}
          onChange={handleChange}
          className={`add-form__input ${errors.explanation === undefined || errors.explanation === '' ? '' : 'add-form__input_type_error'}`}
        />
        <span id="name-input-error" className="add-form__error">
          {errors?.explanation}
        </span>

        <label className="add-form__label" htmlFor="instruction-input">Инструкция:</label>
        <input
          required
          type="text"
          name="instruction"
          minLength='2'
          id="instruction-input"
          placeholder="Укажите инструкцию к таблице"
          value={values.instruction || ''}
          onChange={handleChange}
          className={`add-form__input ${errors.instruction === undefined || errors.instruction === '' ? '' : 'add-form__input_type_error'}`}
        />
        <span id="name-input-error" className="add-form__error">
          {errors?.instruction}
        </span>

        <button
          className={`add-form__submit ${!isValid ? 'add-form__submit_type_inactive' : ''}`}
          type="submit"
          disabled={!isValid}
        >
          {textOfButton}
        </button>
      </form>
    </div>
  );
};

export default AddForm;
