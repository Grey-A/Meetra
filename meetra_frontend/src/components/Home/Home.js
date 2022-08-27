
import React, { useState } from 'react'
import {  Routes, Route } from 'react-router-dom'
import Header from '../header/HeaderHome'
import NavBar from '../Nav/NavBarHome'
import Feature from '../features/Feature'
import Services from '../services/Services'
import Testimonials from '../testimonials/Testimonials'
import Footer from '../footer/FooterHome'
import SignUp from '../user-auth/signup'

export default function Home() {
  const [ open, setOpen ] = useState(false)

  return (
    <>          
      <NavBar sticky="top" />
      <Header />
      <Feature /> 
      <Services />
      <Testimonials />
      <Footer />
      <Routes>
        <Route 
          path='/signUp' 
          element={ <SignUp /> }
         />
      </Routes>
    </>
  )
}