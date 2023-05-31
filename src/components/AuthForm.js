import useFormWithValidation from "../hooks/useValidationForm";

function AuthForm({
  title,
  children,
  handleSubmit,
  textOfButton
}) {
  const { values, handleChange, resetForm, isValid, errors } = useFormWithValidation();

  function onSubmit(e) {
    const { email, password } = values;
    handleSubmit(e, password, email)
    resetForm();
  }

  return (
    <div className="auth-form" >

      <h2 className="auth-form__title"> {title} </h2>

      <form className="auth-form__form" onSubmit={onSubmit}>
        <input
          required
          type="email"
          name="email"
          minLength='5'
          id="email-input"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          className={`auth-form__input ${errors.email === undefined || errors.email === '' ? '' : 'auth-form__input_type_error'}`}
        />
        <span id="name-input-error" className="auth-form__error">
          {errors?.email}
        </span>
        <input
          required
          minLength='5'
          type="password"
          name="password"
          id="password-input"
          placeholder="Пароль"
          onChange={handleChange}
          value={values.password}
          className={`auth-form__input ${errors.password === undefined || errors.password === '' ? '' : 'auth-form__input_type_error'}`}
        />
        <span id="name-input-error" className="auth-form__error">
          {errors?.password}
        </span>
        <button
          className={`auth-form__submit ${!isValid ? 'auth-form__submit_type_inactive' : ''}`}
          type="submit"
          disabled={!isValid}
        >
          {textOfButton}
        </button>
      </form>
      {children}

    </div>
  );
};

export default AuthForm;
