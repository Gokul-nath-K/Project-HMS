import React, { useState } from 'react';
import './App.css'
import { userContext } from './Data/userContext';
import { Routes, Route } from 'react-router-dom';
import Login from './views/login';
import Dashboard from './views/dashboard'
import Profile from './views/profile'
import Outpass from './views/outpass'
import Complain from './views/complain';
import Historys from './views/history'

function App() {

  const [student, setStudent] = useState({});

  

  return (
    <>
      <userContext.Provider value={{ student, setStudent }}>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/outpass' element={<Outpass />} />
            <Route path='/complain' element={<Complain />} />
            <Route path='/history' element={<Historys />} />
          </Routes>
        </div>
      </userContext.Provider>
    </>
  );
}

export default App;
