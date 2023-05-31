import { Link } from 'react-router-dom';

import AuthForm from "./AuthForm";

function Register () {
  return (
    <AuthForm title='Регистрация' textOfButton='Зарегистрироваться' >
      <p className='auth-form__paragraph'>Уже зарегистрированы? <Link className='auth-form__link' to="/sign-in">Войти</Link>
      </p>
    </AuthForm>
  );
}

export default Register;