import { Outlet, Link, useLocation } from 'react-router-dom';

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
        {currentPath === '/biozavr' ? <Link to='quiz-topics'>Выбрать тему квиза</Link> : <></>}
        
      </div>
    </main>
  );
}

export default Main; 