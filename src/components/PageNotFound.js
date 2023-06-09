import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PageNotFound({ loggedIn }) {

  const [errors, setErrors] = useState({ buttonPath: '', errorText: '' });

  useEffect(() => {
    if (loggedIn) {
      setErrors({ buttonPath: '/biozavr', errorText: 'Вернуться на главную'})
    }
    else {
      setErrors({ buttonPath: '/sign-in', errorText: 'Войти' })
    }
  }, [loggedIn]);

  return (
    <div className="error-page">
      <h2 className="error-page__title">Страница не найдена 😟</h2>
      
      <Link
        to={errors.buttonPath}
        className='error-page__link'
      >
        {errors.errorText}
      </Link>
    </div>
  )
};

export default PageNotFound;