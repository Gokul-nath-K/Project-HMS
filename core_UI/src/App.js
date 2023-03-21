import React from 'react';
import './App.css';
import Login from './views/login';
import Dashboard from './views/dashboard';
import Attendance from './views/attendance';
import Profile from './views/profile';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/attendance' element={<Attendance/>}/> 
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
