
import React, { useState } from 'react'
import {  Routes, Route } from 'react-router-dom'
import Header from '../header/Header'
import NavBar from '../Nav/NavBar'
import Feature from '../features/Feature'
import Services from '../services/Services'
import Testimonials from '../testimonials/Testimonials'
import Footer from '../footer/Footer'
import SignUp from '../user-auth/signup'

export default function Preferences() {
  const [token, setToken] = useState()

  return (
    <>          
      <NavBar sticky="top" />
      <Header />
      <Feature /> 
      <Services />
      <Testimonials />
      <Footer />
    </>
  )
}