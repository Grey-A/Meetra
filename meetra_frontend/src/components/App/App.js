import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../user-auth/login';

function App() {
  const [token, setToken] = useState()

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;






// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from '../header/Header'
// import NavBar from '../Nav/NavBar'
// import Feature from '../features/Feature'
// import Services from '../services/Services'
// import Testimonials from '../testimonials/Testimonials'
// import Footer from '../footer/Footer'

// export default function App() {
//   return (
//     <>          
//       <Router>
//         <NavBar sticky="top" />
//         <Header />
//         <Feature /> 
//         <Services />
//         <Testimonials />
//         <Footer />
//         <Routes>
//           <Route exact path='/'  />
//         </Routes>
//       </Router>
//     </>
//   )
// }