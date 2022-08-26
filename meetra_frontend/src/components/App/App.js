import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import SignUp from '../user-auth/signup';
import Login from '../user-auth/login';

function App() {

 
  return (
    <div className="wrapper">
        <Routes>
          <Route path="/" element={<Preferences />} />
          <Route path="/dashboard" element={<Dashboard />} />          
          <Route path="/signUp" element={<SignUp />} />          
          <Route path="/login" element={<Login />} />          
        </Routes>
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