import useFormWithValidation from "../hooks/useValidationForm";

import { useState } from 'react';
import FormCell from './FormCell';

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

      <form className="add-form__form" onSubmit={onSubmit} >
        <FormCell
          type='url'
          minLength='5'
          errors={errors}
          name='image'
          values={values}
          handleChange={handleChange}
          labelText='Ссылка на картинку'
          placeholder='Вставьте ссылку на картинку'
        />

        <FormCell
          type='text'
          minLength='5'
          errors={errors}
          name='mainText'
          values={values}
          handleChange={handleChange}
          labelText='Основной текст'
          placeholder='Напишите основной текст вопроса'
        />

        <FormCell
          type='text'
          minLength='5'
          errors={errors}
          name='subText'
          values={values}
          handleChange={handleChange}
          labelText='Сабтекст'
          placeholder='Напишите вспопогательный текст вопроса'
        />

        <FormCell
          type='text'
          minLength='3'
          errors={errors}
          name='theme'
          values={values}
          handleChange={handleChange}
          labelText='Тема'
          placeholder='Напишите тему вопроса'
        />

        <FormCell
          type='text'
          minLength='1'
          maxLength='2'
          errors={errors}
          name='line'
          values={values}
          handleChange={handleChange}
          labelText='Линия'
          placeholder='Линию вопроса'
        />

        <FormCell
          type='text'
          minLength='2'
          errors={errors}
          name='source'
          values={values}
          handleChange={handleChange}
          labelText='Источник'
          placeholder='Напишите источник вопроса'
        />

        <FormCell
          type='text'
          minLength='2'
          errors={errors}
          name='answer'
          values={values}
          handleChange={handleChange}
          labelText='Ответ'
          placeholder='Напишите ответ на вопрос'
        />

        <FormCell
          type='text'
          minLength='2'
          errors={errors}
          name='explanation'
          values={values}
          handleChange={handleChange}
          labelText='Пояснение'
          placeholder='Укажите пояснение к вопросу'
        />

        <FormCell
          type='text'
          minLength='2'
          errors={errors}
          name='instruction'
          values={values}
          handleChange={handleChange}
          labelText='Инструкция'
          placeholder='Укажите инструкцию к вопросу'
        />

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