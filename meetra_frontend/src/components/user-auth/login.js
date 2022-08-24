import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import IMG from '../../asset/user7.jpg'
import ICON from '../../asset/Not_In_Use_Image/Sign Up and Login/google_PNG19635.png'
import PropTypes from 'prop-types'
import { useState } from "react";
import axiosInstance from './axios.js';
import { useNavigate } from 'react-router-dom';

export default function Login({ setToken }) {

  const navigate = useNavigate();
  const initialFormData = Object.freeze({
        email: '',
        password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);


  // Removed white space
  const handleChange = (e) => {
    updateFormData({
      ...formData,
        [e.target.name]: e.target.value.trim(),
      });
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); //to check

    axiosInstance
    .post('token/', {
      email: formData.email,
      password: formData.password,
    })
    .then((response) => {
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      axiosInstance.defaults.headers['Authorization'] =
      'JWT ' + localStorage.getItem('access'); // 'JWT_' there should be a space _
        navigate('/');
    });

  };

  return( 
    <Container fluid>
        <Row style={{ height: '30rem'}}>
          <Col lg='4' md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '.5rem auto'}}>
            <div className="side-bar-sm 
              bg-dark border-radius">
              <div className="side-bar-sm-top block flex-1">
                <h5 className="light margin-t-2 margin-b-3">Meet<span className="logo">ra</span></h5>
                <h5 className="light">
                  Join us and stay 
                </h5>
                <h5 className='logo light'>Connected</h5>
                <p style={{ fontSize: '1rem'}}>Ensure productivity during online meeting with our cool features</p>
              </div>
              <div 
                className="side-bar-sm-bottom margin-t-auto bg-gray-2 border-radius box-shadow">
                  <div className="user-pro-con">
                    I have been able to connect with my family in Nigeria much better since I started using Meetra
                    <div className="user-pro-info">
                      <img src={IMG} alt="User Pics" />
                      <div>
                        <h6 className="log light">Nokia Adewale</h6>
                        <p>History Teacher</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="log-wrapper">
              <h4 className="logo margin-t-3 margin-b-1">Sign Up</h4>
              <h6 className='margin-b-3'>Don't have an account?<button onClick={handleSubmit}>Sign Up</button></h6>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="enail" 
                    placeholder="Email" 
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label> Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={handleChange}
                  />
                </Form.Group>
  
                <div className="log-btns">
                  <Button className=' btn-log'>Login</Button>
                  <Button className=' btn-log'>
                    <img src={ICON} alt="google icon" className='btn-icon' onClick={handleSubmit}/>
                     Sign Up with Google
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
      </Row>
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}




// import { useState } from "react";
// import axiosInstance from "./axios";
// import { useNavigate } from 'react-router-dom';

// export default function LogIn() {
//     const navigate = useNavigate();
//     const initialFormData = Object.freeze({
//         email: '',
//         password: '',
//     });

//     const [formData, updateFormData] = useState(initialFormData);


//     // Removed white space
//     const handleChange = (e) => {
//         updateFormData({
//             ...formData,
//             [e.target.name]: e.target.value.trim(),
//         });
//     };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData); //to check

//         axiosInstance
//             .post('token/', {
//                 email: formData.email,
//                 password: formData.password,
//             })
//             .then((response) => {
//                 localStorage.setItem('access', response.data.access);
//                 localStorage.setItem('refresh', response.data.refresh);
//                 axiosInstance.defaults.headers['Authorization'] =
//                     'JWT ' + localStorage.getItem('access'); // 'JWT_' there should be a space _
//                 navigate('/');
//             });

//     };

// }