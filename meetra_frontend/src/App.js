import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Nav/NavBar'


export default function App() {
  return (
    <>
      <div className="wrapper">
       <Router>
       <NavBar />
        <Routes>

        </Routes>
       </Router>
      </div>
    </>
  )
}