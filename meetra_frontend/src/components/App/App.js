// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Dashboard from '../Dashboard/Dashboard';
// import Preferences from '../Preferences/Preferences';

// function App() {
//   return (
//     <div className="wrapper">
//       <h1>Application</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/preferences" element={<Preferences />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;






import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import NavBar from '../Nav/NavBar'
import Feature from '../Features/Feature'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'

export default function App() {
  return (
    <>          
      <Router>
        <NavBar sticky="top" />
        <Header />
        <Feature /> 
        <Services />
        <Testimonials />
        <Footer />
        <Routes>
          <Route exact path='/'  />
        </Routes>
      </Router>
    </>
  )
}