import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Preferences from '../Preferences/Preferences';
import SignUp from '../user-auth/signup';
import Login from '../user-auth/login';
import Home from '../Home/Home';
import NewMeeting from '../New Meeting/NewMeeting';

function App() {
 const [token, setToken] = useState();

 if(!token) {
  return (<Login setToken={setToken} />)
 }
 
  return (
    <div className="wrapper">
      <NewMeeting />
        <Routes>
          <Route path="*" element={<Preferences />} />
          <Route path="/home" element={<Home />} />          
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