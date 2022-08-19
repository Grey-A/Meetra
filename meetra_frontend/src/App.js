import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import NavBar from './components/Nav/NavBar'


export default function App() {
  return (
    <>
      <div className="wrapper">
       <Router>
        <NavBar sticky="top" />
        <Header />

        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </Router>
      </div>
    </>
  )
}