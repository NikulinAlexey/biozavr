import { Link } from 'react-router-dom';

import AuthForm from "./AuthForm";

function Register({handleRegister}) {
  return (
    <AuthForm title='Регистрация' textOfButton='Зарегистрироваться' handleSubmit={handleRegister}>
      <p className='auth-form__paragraph'>Уже зарегистрированы? <Link className='auth-form__link' to="/sign-in">Войти</Link>
      </p>
    </AuthForm>
  );
}

export default Register;