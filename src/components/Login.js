import React, { useState } from 'react';
import AuthForm from './AuthForm';
// import { Link } from 'react-router-dom';

function Login () {
  return (
    <AuthForm title='Вход' textOfButton='Войти'/>
  )
}

export default Login;