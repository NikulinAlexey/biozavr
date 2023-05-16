// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Login from './Login';
import Register from './Register';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setLoggedIn(!loggedIn);
  // }

  return (
    <div className="page">
      <Header />
      
      <Main loggedIn={loggedIn} />
      <Login loggedIn={loggedIn} />
      <Register loggedIn={loggedIn} />
    </div>
  );
}

export default App;
