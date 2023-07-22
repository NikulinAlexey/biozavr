function FormCell({
  name,
  type,
  errors,
  values,
  labelText,
  handleChange,
  minLength,
  maxLength,
  placeholder,
}) {
  function handleChangeMain(e) {
    handleChange(e)
  }

  return (
    <div className="add-form__cell">
      <label className="add-form__label" htmlFor="image-input">{`${labelText}:`}</label>
      <input
        required
        type={type}
        name={name}
        minLength={minLength || ''}
        maxLength={maxLength || ''}
        id={`${name}-input`}
        placeholder={placeholder}
        value={values[name] || ''}
        onChange={handleChangeMain}
        className={`add-form__input ${errors[name] === undefined || errors[name] === '' ? '' : 'add-form__input_type_error'}`}
      />
      <span id="name-input-error" className="add-form__error">
        {errors? errors[name] : ''}
      </span>
    </div>
  );
};

export default FormCell;
