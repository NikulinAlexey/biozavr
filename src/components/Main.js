import Quiz from './Quiz';
import Spinner from './Spinner';

function Main({
  isSpinnerVisible,
}) {

  return (
    <main className="content">
      <div className='content__container'>
        <Spinner isSpinnerVisible={isSpinnerVisible} />
        <Quiz />
      </div>
    </main>
  );
}

export default Main; 