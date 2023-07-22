import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Spinner from './Spinner';

function Main({
  isSpinnerVisible,
}) {



  const currentPath = useLocation().pathname;
  return (
    <main className="content">
      <div className='content__container'>
        <Spinner isSpinnerVisible={isSpinnerVisible} />
        <Outlet />
        {currentPath === '/biozavr' ?
          <ul className='content__link-list'>
            <Link to='quiz-topics'>Выбрать тему квиза</Link>
            <Link to='add-form'>Добавить вопрос для теста</Link>
          </ul>
          :
          <></>
        }
      </div>
    </main>
  );
}

export default Main; 