import React, { useState, useEffect, useRef } from 'react';
import useAuth from '../../Hooks/useAuth';
import Form from 'react-bootstrap/Form';
import IMG from '../../asset/user7.jpg'
import axios from './axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'


export default function Login() {
  const { setAuth } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
  const userRef = useRef();
  const errRef = useRef();
  


  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [ email, pwd ])



  const token = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/token/', 
      { email: email, password: pwd },
      {
        headers: { 'Content-Type': 'application/json' },
     });

      console.log(response?.data);
      console.log(response?.access);
      console.log(JSON.stringify(response?.data))
      
      // NOTE SAVE THE TOKENS IN LOCALSTORAGE
      
      // AccessToken
      const access = response?.data?.access;
      const refresh = response?.data?.refresh;
      setAuth({ email, pwd, refresh, access });
      // clear state and controlled inputs
      setEmail('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Connection');
      } else if (err.response?.status === 400) {
          setErrMsg('Email and Password are required');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg('Login Failed')
      }
      errRef.current.focus();
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    token()
  }


  return( 
    <section className="container-login">
      <div className='form-sidebar signup'>
        <div className="side-bar-top side-bar-sm-top block flex-1">
          <h5>Meet<span className="logo">ra</span></h5>
          <h5>Join us and stay  Connected</h5>
          <p>Ensure productivity during online meeting with our cool features</p>
        </div>
        <div className="side-bar-sm-bottom">
          <div className="user-pro-con">
            <p>I have been able to connect with my family in Nigeria much better since I started using Meetra</p>
            <div className="user-pro-info">
              <img src={IMG} alt="User Pics" />
              <div>
                <h6>Nokia Adewale</h6>
                <p>History Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-container"> 
        <div className="log-wrapper">
          <h4 className="logo">Login</h4>
          <h6 className='margin-b-3'>Don't have an account? <Link to="/signUp">Sign Up</Link> {" "}</h6>
              
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive"> {errMsg} </p>
        </div>

            {success ? navigate( from, {replace: true}) : (
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3 form-group">
              <Form.Label htmlFor='email'> Email: </Form.Label>
              <Form.Control type="email" id="email" ref={userRef}autoComplete='off' placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    
            </Form.Group>

            <Form.Group className="mb-3 form-group">
              <Form.Label htmlFor='password'> Password:</Form.Label>
              <Form.Control type="password" id="password" placeholder="Password" onChange={(e) => setPwd(e.target.value)} value={pwd} required />

            </Form.Group>
    
            <button className='btn-login' type='submit'  onClick={handleSubmit}> Login </button>
          </Form>          
        )}
    </div>
  </section>

  )
}










































// import React from 'react';
// import Col from 'react-bootstrap/esm/Col';
// import Container from 'react-bootstrap/esm/Container';
// import Row from 'react-bootstrap/esm/Row';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import IMG from '../../asset/user7.jpg'
// import ICON from '../../asset/Not_In_Use_Image/Sign Up and Login/google_PNG19635.png'
// import PropTypes from 'prop-types'
// import { useState } from "react";
// import axiosInstance from './axios.js';
// import { useNavigate } from 'react-router-dom';

// export default function Login({ setToken }) {

//   const navigate = useNavigate();

//   const navigateToSignUp = () => {
//     navigate('/home')
//   }
//   const initialFormData = Object.freeze({
//         email: '',
//         password: '',
//   });

//   const [formData, updateFormData] = useState(initialFormData);


//   // Removed white space
//   const handleChange = (e) => {
//     updateFormData({
//       ...formData,
//         [e.target.name]: e.target.value.trim(),
//       });
//   };
    
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); //to check

//     axiosInstance
//     .post('token/', {
//       email: formData.email,
//       password: formData.password,
//     })   
//     .then((response) => {
//       localStorage.setItem('access', response.data.access);
//       localStorage.setItem('refresh', response.data.refresh);
//       axiosInstance.defaults.headers['Authorization'] =
//       'JWT ' + localStorage.getItem('access'); // 'JWT_' there should be a space _
//         navigate('/');
//     });
//   };

//   return( 
//     <Container fluid>
//         <Row style={{ height: '30rem'}}>
//           <Col lg='4' md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '.5rem auto'}}>
//             <div className="side-bar-sm 
//               bg-dark border-radius">
//               <div className="side-bar-sm-top block flex-1">
//                 <h5 className="light margin-t-2 margin-b-3">Meet<span className="logo">ra</span></h5>
//                 <h5 className="light">
//                   Join us and stay 
//                 </h5>
//                 <h5 className='logo light'>Connected</h5>
//                 <p style={{ fontSize: '1rem'}}>Ensure productivity during online meeting with our cool features</p>
//               </div>
//               <div 
//                 className="side-bar-sm-bottom margin-t-auto bg-gray-2 border-radius box-shadow">
//                   <div className="user-pro-con">
//                     I have been able to connect with my family in Nigeria much better since I started using Meetra
//                     <div className="user-pro-info">
//                       <img src={IMG} alt="User Pics" />
//                       <div>
//                         <h6 className="log light">Nokia Adewale</h6>
//                         <p>History Teacher</p>
//                       </div>
//                     </div>
//                   </div>
//               </div>
//             </div>
//           </Col>

//           <Col>
//             <div className="log-wrapper">
//               <h4 className="logo margin-t-3 margin-b-1">Sign Up</h4>
//               <h6 className='margin-b-3'>Don't have an account?<button onClick={navigateToSignUp}>Sign Up</button></h6>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control 
//                     type="enail" 
//                     placeholder="Email" 
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label> Password</Form.Label>
//                   <Form.Control 
//                     type="password" 
//                     placeholder="Password" 
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
  
//                 <div className="log-btns">
//                   <Button className=' btn-log'>Login</Button>
//                   <Button className=' btn-log'>
//                     <img src={ICON} alt="google icon" className='btn-icon' onClick={handleSubmit}/>
//                      Sign Up with Google
//                   </Button>
//                 </div>
//               </Form>
//             </div>
//           </Col>
//       </Row>
//     </Container>
//   )
// }

// // Login.propTypes = {
// //   setToken: PropTypes.func.isRequired
// // }




// // import { useState } from "react";
// // import axiosInstance from "./axios";
// // import { useNavigate } from 'react-router-dom';

// // export default function LogIn() {
// //     const navigate = useNavigate();
// //     const initialFormData = Object.freeze({
// //         email: '',
// //         password: '',
// //     });

// //     const [formData, updateFormData] = useState(initialFormData);


// //     // Removed white space
// //     const handleChange = (e) => {
// //         updateFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value.trim(),
// //         });
// //     };
    
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log(formData); //to check

// //         axiosInstance
// //             .post('token/', {
// //                 email: formData.email,
// //                 password: formData.password,
// //             })
// //             .then((response) => {
// //                 localStorage.setItem('access', response.data.access);
// //                 localStorage.setItem('refresh', response.data.refresh);
// //                 axiosInstance.defaults.headers['Authorization'] =
// //                     'JWT ' + localStorage.getItem('access'); // 'JWT_' there should be a space _
// //                 navigate('/');
// //             });

// //     };

// // }