import { useState } from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';



import './App.css';
import './index.css';

function App() {

  return (
    <>
    <div className="app">
      <Routes>
         <Route path='/' element={<Navigate to='login'/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/home' element={<Home/>}/>

      </Routes>
    </div>
    </>
  )
}

export default App
