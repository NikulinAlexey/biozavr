import { Outlet, Link } from 'react-router-dom';

import Spinner from './Spinner';

function Main({
  isSpinnerVisible,
}) {

  return (
    <main className="content">
      <div className='content__container'>
        <Spinner isSpinnerVisible={isSpinnerVisible} />
        <Outlet />
        <Link to='quiz-topics'>Выбрать тему квиза</Link>
      </div>
    </main>
  );
}

export default Main; 