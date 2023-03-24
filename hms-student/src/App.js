import React, { useEffect, useState } from 'react';
import './App.css'
import { userContext } from './Data/userContext';
import { Routes, Route } from 'react-router-dom';
import Login from './views/login';
import Dashboard from './views/dashboard'
import Profile from './views/profile'
import Outpass from './views/outpass'
import Complain from './views/complain';
import { getStudent } from './services/studentService';

function App() {

  const rollno = localStorage.getItem('rollno');
  const [student, setStudent] = useState({});

  useEffect(() => {

    try {
      getStudent(rollno).then((res) => {
        console.log(res);
        setStudent(res.data);
      })
    }
    catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }, [rollno])

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
          </Routes>
        </div>
      </userContext.Provider>
    </>
  );
}

export default App;
