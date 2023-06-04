import { Outlet } from 'react-router-dom';

import Spinner from './Spinner';

function Main({
  isSpinnerVisible,
}) {

  return (
    <main className="content">
      <div className='content__container'>
        <Spinner isSpinnerVisible={isSpinnerVisible} />
        <Outlet />
      </div>
    </main>
  );
}

export default Main; 