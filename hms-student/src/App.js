import React, { useState } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './views/login';
import Dashboard from './views/dashboard'
import Profile from './views/profile'
import Outpass from './views/outpass'
import { userContext } from './Data/userContext'
import Complain from './views/complain';

function App() {

  const [user, setUser] = useState({});

  return (
    <>
      <div className="App">
        <userContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/outpass' element={<Outpass />} />
            <Route path='/complain' element={<Complain />} />
          </Routes>
        </userContext.Provider>

      </div>
    </>
  );
}

export default App;
