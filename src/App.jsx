import { useState } from 'react'
import Home from './routes/home.jsx';
import Admin from './routes/Admin.jsx';
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
