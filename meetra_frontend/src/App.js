import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import NavBar from './components/Nav/NavBar'

export default function App() {
  return (
    <>
      <NavBar sticky="top" />       
      <Router>
        <Routes>
          <Route exact path='/' element={<Header />} />
        </Routes>
      </Router>
    </>
  )
}