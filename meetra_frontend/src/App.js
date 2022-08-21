import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import NavBar from './components/Nav/NavBar'
import Feature from './components/features/Feature'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'

export default function App() {
  return (
    <>          
      <Router>
        <NavBar sticky="top" />
        <Header />
        <Feature /> 
        <Services />
        <Testimonials />
        <Routes>
          <Route exact path='/'  />
        </Routes>
      </Router>
    </>
  )
}