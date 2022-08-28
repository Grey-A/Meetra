import React from 'react';
import './App.css';
import Preferences from '../Preferences/Preferences';
import SignUp from '../user-auth/signup';
import Login from '../user-auth/login';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Dashboard from '../Dashboard/Dashboard';
// import Call from '../Call/Call';

function App() {
//  const [token, setToken] = useState();

//  if(!token) {
//   return (<Preferences  /> && <Login setToken={setToken} />)
//  }

  return (
    <div className="wrapper">
        <Routes>
            {/* Public Routes */}
            <Route path="/signUp" element={<SignUp />} />          
            <Route path="/login" element={<Login />} />    
            <Route path="/" element={<Preferences />} />
            {/* What i was creating */}

            {/* 404 Not Found */}
            <Route path='404' element={<NotFound />} /> 

            {/* Private Routes */}
              <Route path="/dashboard" element={<Dashboard />} />  
              <Route path="home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;