import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './views/login';
import Dashboard from './views/dashboard'
import Profile from './views/profile'
import Outpass from './views/outpass'
import Complain from './views/complain';

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/outpass' element={<Outpass />} />
          <Route path='/complain' element={<Complain />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
