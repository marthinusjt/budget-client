import React, {useState, useEffect } from 'react';
import Sitebar from './Components/Home/Sitebar';
import Auth from './Components/Auth/Auth';
import Budget from './Components/Budget/Budget';

const App = () => {

  const [token, setToken] = useState(undefined)

  useEffect(() => {
    if (localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
    // console.log(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setToken('');
  }

  const protectedViews = () => {
    return (token === localStorage.getItem('token') ? 
    <Budget token={token}/> 
    :
    <Auth updateToken={updateToken} />
    )
  }

  window.onbeforeunload = () => {
    localStorage.clear();
    return '';
  };

  return (
    <div >
      <Sitebar clickLogout={clearToken} />
      {protectedViews()}
    </div>
  );
}

export default App;