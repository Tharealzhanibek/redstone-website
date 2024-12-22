import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Home } from "./components/pages/Home";
import { Team } from "./components/pages/Team";
import { Events } from "./components/pages/Events";
import { Awards } from "./components/pages/Awards";
import { Contact } from "./components/pages/Contact";

import LowBar from './components/pages/comps/LowBar';
import Menu from './components/menu';

import './App.css';

function App() {
  return (
    <div className="h-screen w-screen bg-[#0E0E0E]">
      <Menu />
      <div className="pb-16"> {/* Add padding-bottom to create space for LowBar */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/events' element={<Events />} />
          <Route path='/awards' element={<Awards />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Navigate to="/Home" />} />
          <Route path='/start' element={<Navigate to="/Home" />} />
        </Routes>
      </div>
      <LowBar />
    </div>
  );
}

export default App;
