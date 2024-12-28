import React, { useState } from 'react';
import './App.css';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';

const App = () => {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <div className="App">
      <h1>Login/Signup Page</h1>
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Signup' : 'Login'}
      </button>

      {isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default App;