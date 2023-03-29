import React, { useState } from 'react';
import './App.css';
import Login from './views/login';
import Dashboard from './views/dashboard';
import Profile from './views/profile';
import { Routes, Route } from 'react-router-dom';
import Outpass from './views/outpass';
import Complaint from './views/complaint';
import Attendance from './views/attendance';
import Attendancepop from './views/attendancepop';
import { userContext } from './Data/userContext';
import Sos from './views/sos';

function App() {

  const [admin, setAdmin] = useState({});

  return (
    <div className="App">
      <userContext.Provider value={{ admin, setAdmin }}>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/outpass' element={<Outpass />} />
          <Route path='/complaint' element={<Complaint />} />
          <Route path='/Attendancepop' element={<Attendancepop />} />
          <Route path='/sos' element={<Sos/>}/>
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
