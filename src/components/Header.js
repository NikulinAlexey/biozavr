import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ email, loggedIn, onSignout }) {
  const currentLocation = useLocation();
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const [buttonInfo, setButtonInfo] = useState({ path: '', textOfButton: '' });

  function handleSignOut() {
    setIsBurgerClicked(false);
    onSignout();
  }

  function handleBurgerClick() {
    setIsBurgerClicked(!isBurgerClicked);
  };

  useEffect(() => {
    if (currentLocation.pathname === '/sign-in') {
      setButtonInfo({ path: 'sign-up', textOfButton: 'Зарегистрироваться' });
    }
    else if (currentLocation.pathname === '/sign-up') {
      setButtonInfo({ path: 'sign-in', textOfButton: 'Войти' });
    }
  }, [currentLocation.pathname]);

  return (
    <header className="header" >
      <div className='header__container'>
        <nav className={`header__nav_type_mobile ${isBurgerClicked ? 'active' : ''}`}>
          <ul className='header__list_type_mobile'>
            <li className='header__user_type_mobile'>{loggedIn ? email : ''}</li>

            <li>
              <Link
                to='/'
                onClick={handleSignOut}
                className='header__button_type_mobile'
              >
                {loggedIn ? 'Выйти' : ''}
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`header__bar ${isBurgerClicked ? 'active' : ''}`}>
          <Link to='/biozavr' className="header__logo">БИОЗАВР</Link>

          <div className={`${loggedIn ? 'header__burger' : ''} ${isBurgerClicked ? 'active' : ''}`} onClick={handleBurgerClick}>
            <span></span>
          </div>

          <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__user'>{loggedIn ? email : ''}</li>

              <li>
                <Link
                  to={loggedIn === false ? buttonInfo.path : '/'}
                  className='header__button'
                  style={loggedIn ? {} : { display: 'block' }}
                  onClick={onSignout}
                >
                  {loggedIn === false ? buttonInfo.textOfButton : 'Выйти'}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header >
  )
}

export default Header;