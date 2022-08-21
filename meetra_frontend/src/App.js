import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import NavBar from './components/Nav/NavBar'
import Feature from './components/features/Feature'
export default function App() {
  return (
    <>          
      <Router>
        <NavBar sticky="top" />
        <Header />
        <Feature /> 
        <Routes>
          <Route exact path='/'  />
        </Routes>
      </Router>
    </>
  )
}