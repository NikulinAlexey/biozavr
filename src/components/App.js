import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../contexts/CurrentUserContext'

import Main from './Main';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import * as auth from '../auth';
import Register from './Register';
// import InfoTooltip from './InfoTooltip';
import PageNotFound from './PageNotFound';
import ProtectedRouteElement from './ProtectedRouteElement';

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('someemail@gmail.com');
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [infoTooltip, setIsInfoTooltip] = useState({ isSuccessRegister: false, isOpen: false });

  function closeAllPopups() {
    setIsInfoTooltip({ ...infoTooltip, isOpen: false });
  }
  function infoTooltipSetter(isOpen, isSuccessRegister) {
    setIsInfoTooltip({ isSuccessRegister, isOpen });
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
          <Route path="/" element={
            <ProtectedRouteElement
              element={Main}
              loggedIn={loggedIn}
              isSpinnerVisible={isSpinnerVisible}
            />}
          />

          <Route path='/sign-in' element={<Login handleAuthorize={handleAuthorize} />} />

          <Route path='/sign-up' element={<Register handleRegister={handleRegister} />} />

          <Route path='*' element={<PageNotFound loggedIn={loggedIn} />} />
        </Routes>

        <Footer loggedIn={loggedIn} />
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
