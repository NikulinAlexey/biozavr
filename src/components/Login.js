import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

function Login () {
  const [formValue, setFormValue] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Данные отправлены')
  }

  return (
    <div className="login">
      <p className="login__welcome">
        Добро пожаловать!
      </p>
      <form onSubmit={handleSubmit} className="login__form">
        <div className="login__cell">
          <label className="login__label" >Логин:</label>
          <input
            required
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            className="login__input"
            value={formValue.username}
            placeholder='Введите логин...'
          />
        </div>

        <div className="login__cell">
          <label className="login__label">Пароль:</label>
          <input
            required
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            className="login__input"
            value={formValue.password}
            placeholder='Введите пароль...'
          />
        </div>

        <div className="login__button-container">
          <button type="submit" className="login__link">Войти</button>
        </div>
      </form>
      <div className="login__signup">
        <p>Ещё не зарегистрированы?</p>
        {/* <Link to="/register" className="signup__link">Зарегистрироваться</Link> */}
      </div>
    </div>
  )
}

export default Login;