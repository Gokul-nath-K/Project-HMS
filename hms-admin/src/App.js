import React from 'react';
import './App.css';
import Login from './views/login';
import Dashboard from './views/dashboard';
import Profile from './views/profile';
import {Routes,Route} from 'react-router-dom';
import Outpass from './views/outpass';
import Complaint from './views/complaint';
import Attendance from './views/attendance';
import Attendancepop from './views/attendancepop';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/attendance' element={<Attendance/>}/> 
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/outpass' element={<Outpass/>}/>
          <Route path='/complaint' element={<Complaint/>}/>
          <Route path='/add' element={<Attendancepop/>}/>
        </Routes>
    </div>
  );
}

export default App;
