//bismillahir rahmani rahim
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'

import { Home } from "./components/pages/Home"
import { Team } from "./components/pages/Team"
import { Events } from "./components/pages/Events"
import { Awards } from "./components/pages/Awards"
import { Contact } from "./components/pages/Contact"

import Menu from './components/menu'

import './App.css'

function App() {

  return (
    <div className='h-screen w-screen bg-[#1C1C1C]'>
      <Menu />
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Team' element={<Team />}/>
        <Route path='/Events' element={<Events />}/>
        <Route path='/Awards' element={<Awards />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App
