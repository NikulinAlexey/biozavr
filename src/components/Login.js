import AuthForm from './AuthForm';
// import { Link } from 'react-router-dom';

function Login({ handleAuthorize }) {
  return (
    <AuthForm title='Вход' textOfButton='Войти' handleSubmit={handleAuthorize}/>
  )
}

export default Login;