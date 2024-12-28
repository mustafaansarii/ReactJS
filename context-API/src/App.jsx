import React from 'react';
import UserContextProvider from './Contex/ContextProvider';
import Login from './Component/Login';
import Profile from './Component/Profile';
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
