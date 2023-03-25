import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';

// webapp imports
// import Login from './views/login';
// import Dashboard from './views/dashboard';
// import Attendance from './views/attendance';
// import Profile from './views/profile';
// mobile app imports
import Loginm from './mobileview/login';
import Homem from './mobileview/home';
import Attendancem from './mobileview/attendance';
import Sos from './mobileview/sos';
function App() {
  return (
    <div className="App">
        {/* webapp routes */}
        {/* <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/attendance' element={<Attendance/>}/> 
          <Route path='/profile' element={<Profile/>}/>
        </Routes> */}
        {/* mobile app routes */}
        
        <Routes>
          <Route exact path='/' element={<Loginm/>}/>
          <Route path='/home' element={<Homem/>}/>
          <Route path='/attendance' element={<Attendancem/>}/> 
          <Route path='/sos' element={<Sos/>}/>
        </Routes>
    </div>
  );
}

export default App;
