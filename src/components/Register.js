// import { Link } from 'react-router-dom';

function Register () {
  function handleSubmit(e) {
    e.preventDefault();

    console.log('Данные отправлены')
  }
  function handleChange(e) {
    console.log(e.target.value)
  }

  return (
    <div className="register">
      <p className="register__welcome">
        Пожалуйста, зарегистрируйтесь.
      </p>
      <form onSubmit={handleSubmit} className="register__form">

        <label>Логин:</label>
        <input id="username" name="username" type="text" value={1} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" value={2} onChange={handleChange} />

        <label htmlFor="password">Пароль:</label>
        <input id="password" name="password" type="password" value={3} onChange={handleChange} />

        <label htmlFor="confirmPassword">Повторите пароль:</label>
        <input id="confirmPassword" name="confirmPassword" type="password" value={4} onChange={handleChange} />
        
        <div className="register__button-container">
          <button type="submit" onSubmit={handleSubmit} className="register__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        {/* <Link to="login" className="register__login-link">Войти</Link> */}
      </div>
    </div>
  );
}

export default Register;