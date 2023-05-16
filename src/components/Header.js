import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <a href="/" className="header__header">Biozavr</a>
        <nav className='header__nav'>
          <ul className='header__list'>
            <li className='header__list-item'>Профиль</li>
            <li className='header__list-item'>Рейтинг</li>
            <li className='header__list-item'>Настройки</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;