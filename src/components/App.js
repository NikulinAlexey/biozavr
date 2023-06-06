import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../contexts/CurrentUserContext'

import Quiz from './Quiz';
import Main from './Main';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import * as auth from '../auth';
import Register from './Register';
import QuizTopics from './QuizTopics';
// import InfoTooltip from './InfoTooltip';
import PageNotFound from './PageNotFound';
import ProtectedRouteElement from './ProtectedRouteElement';

function App() {
  const topics = [
    {
      title: 'Введение',
      questions: [
        'Введение Вопрос 1',
        'Введение Вопрос 2',
        'Введение Вопрос 3',
        'Введение Вопрос 4',
      ]
    },
    {

      title: 'Химический состав',
      questions: [
        'Химический состав Вопрос 1',
        'Химический состав Вопрос 2',
        'Химический состав Вопрос 3',
        'Химический состав Вопрос 4',
      ]
    },
    {
      title: 'Клетка',
      questions: [
        'Клетка Вопрос 1',
        'Клетка Вопрос 2',
        'Клетка Вопрос 3',
        'Клетка Вопрос 4',
      ]
    },
    {
      title: 'Обмен веществ',
      questions: [
        'Обмен веществ Вопрос 1',
        'Обмен веществ Вопрос 2',
        'Обмен веществ Вопрос 3',
        'Обмен веществ Вопрос 4',
      ]
    },
    {
      title: 'Деление клетки',
      questions: [
        'Деление клетки Вопрос 1',
        'Деление клетки Вопрос 2',
        'Деление клетки Вопрос 3',
        'Деление клетки Вопрос 4',
      ]
    },
    {
      title: 'Размножение',
      questions: [
        'Размножение Вопрос 1',
        'Размножение Вопрос 2',
        'Размножение Вопрос 3',
        'Размножение Вопрос 4',
      ]
    },
    {
      title: 'Генетика',
      questions: [
        'Генетика Вопрос 1',
        'Генетика Вопрос 2',
        'Генетика Вопрос 3',
        'Генетика Вопрос 4',
      ]
    },
    {
      title: 'Изменчивость',
      questions: [
        'Изменчивость Вопрос 1',
        'Изменчивость Вопрос 2',
        'Изменчивость Вопрос 3',
        'Изменчивость Вопрос 4',
      ]
    },
    {
      title: 'Селекция',
      questions: [
        'Вопрос 1',
        'Вопрос 2',
        'Вопрос 3',
        'Вопрос 4',
      ]
    },
    {
      title: 'Вирусы',
      questions: [
        'Вирусы Вопрос 1',
        'Вирусы Вопрос 2',
        'Вирусы Вопрос 3',
        'Вирусы Вопрос 4',
      ]
    },
    {
      title: 'Бактерии',
      questions: [
        'Бактерии Вопрос 1',
        'Бактерии Вопрос 2',
        'Бактерии Вопрос 3',
        'Бактерии Вопрос 4',
      ]
    },
    {
      title: 'Грибы',
      questions: [
        'Грибы Вопрос 1',
        'Грибы Вопрос 2',
        'Грибы Вопрос 3',
        'Грибы Вопрос 4',
      ]
    },
    {
      title: 'Ботаника',
      questions: [
        'Ботаника Вопрос 1',
        'Ботаника Вопрос 2',
        'Ботаника Вопрос 3',
        'Ботаника Вопрос 4',
      ]
    },
    {
      title: 'Беспозвоночные',
      questions: [
        'Беспозвоночные Вопрос 1',
        'Беспозвоночные Вопрос 2',
        'Беспозвоночные Вопрос 3',
        'Беспозвоночные Вопрос 4',
      ]
    },
    {
      title: 'Хордовые',
      questions: [
        'Хордовые Вопрос 1',
        'Хордовые Вопрос 2',
        'Хордовые Вопрос 3',
        'Хордовые Вопрос 4',
      ]
    },
    {
      title: 'Анатомия: системы',
      questions: [
        'Анатомия: системы Вопрос 1',
        'Анатомия: системы Вопрос 2',
        'Анатомия: системы Вопрос 3',
        'Анатомия: системы Вопрос 4',
      ]
    },
    {
      title: 'Анатомия: внутренняя среда',
      questions: [
        'Анатомия: внутренняя среда Вопрос 1',
        'Анатомия: внутренняя среда Вопрос 2',
        'Анатомия: внутренняя среда Вопрос 3',
        'Анатомия: внутренняя среда Вопрос 4',
      ]
    },
    {
      title: 'Анатомия: регуляция',
      questions: [
        'Анатомия: регуляция Вопрос 1',
        'Анатомия: регуляция Вопрос 2',
        'Анатомия: регуляция Вопрос 3',
        'Анатомия: регуляция Вопрос 4',
      ]
    },
    {
      title: 'Экология',
      questions: [
        'Экология Вопрос 1',
        'Экология Вопрос 2',
        'Экология Вопрос 3',
        'Экология Вопрос 4',
      ]
    },
    {
      title: 'Эволюция',
      questions: [
        'Эволюция Вопрос 1',
        'Эволюция Вопрос 2',
        'Эволюция Вопрос 3',
        'Эволюция Вопрос 4',
      ]
    },
  ]
  const [selectedTopics, setSelectedTopics] = useState([]);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [email, setEmail] = useState('someemail@gmail.com');
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [infoTooltip, setIsInfoTooltip] = useState({ isSuccessRegister: false, isOpen: false });

  function closeAllPopups() {
    setIsInfoTooltip({ ...infoTooltip, isOpen: false });
  }
  function infoTooltipSetter(isOpen, isSuccessRegister) {
    setIsInfoTooltip({ isSuccessRegister, isOpen });
  }
  function handleSelectTopic(chosenTopics) {
    setSelectedTopics(chosenTopics);
  }

  // Функции и API-запросы регистрации, авторизации:
  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt')
      auth.checkToken(jwt)
        .then(({ email }) => {
          if (email) {
            setEmail(email);
          }
        })
        .then(() => {
          setLoggedIn(true);
          navigate('/');
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, []);
  // useEffect(() => {
  //   setEmail(localStorage.getItem('email'))
  // }, []);

  function onSignout() {
    localStorage.clear('jwt');
    setLoggedIn(false);
  }
  function onLogin(email, data) {
    localStorage.setItem('jwt', data.token);
    localStorage.setItem('email', email);

    setLoggedIn(true);
  }
  function handleRegister(password, email) {
    auth.register(password, email)
      .then(() => {
        navigate('/sign-in');
      })
      .then(() => {
        infoTooltipSetter(true, true);
      })
      .catch((err) => {
        infoTooltipSetter(true, false);
      })
  }
  function handleAuthorize(password, email) {
    auth.authorize(password, email)
      .then(data => {
        if (data.token) {
          onLogin(email, data)
        }
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header email={email} loggedIn={loggedIn} onSignout={onSignout} />

        <Routes>
          <Route path="/biozavr" element={
            <ProtectedRouteElement
              element={Main}
              loggedIn={loggedIn}
              isSpinnerVisible={isSpinnerVisible}
            />}
          >
            <Route path='quiz' element={<Quiz selectedTopics={selectedTopics} />} />
            <Route path='quiz-topics' element={<QuizTopics topics={topics} handleSelectTopic={handleSelectTopic} />} />
          </Route>

          <Route path='/sign-in' element={<Login handleAuthorize={handleAuthorize} />} />

          <Route path='/sign-up' element={<Register handleRegister={handleRegister} />} />

          <Route path='*' element={<PageNotFound loggedIn={loggedIn} />} />
        </Routes>

        {/* <Footer loggedIn={loggedIn} /> */}
      </div>

      {/* <InfoTooltip
        onClose={closeAllPopups}
        isOpen={infoTooltip.isOpen}
        isSuccessRegister={infoTooltip.isSuccessRegister}
      /> */}
    </CurrentUserContext.Provider>

  );
}

export default App;
