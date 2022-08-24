import React, { useState, useEffect, useNavigate } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import IMG from '../../asset/user7.jpg'
import ICON from '../../asset/Not_In_Use_Image/Sign Up and Login/google_PNG19635.png'
import axiosInstance from './axios';

export default function SignUp() {


  const navigate = useNavigate();

  const initialFormData = Object.freeze({
    full_name: '',
    email: '',
    username: '',
    password1: '',
    password2: '',
    showErrorMessage: false,
    cPasswordClass: 'form-control',
    isCPasswordWrong: false,
  });

    const [formData, updateFormData] = useState(initialFormData);


    // For removing white space
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
            password2: e.target.value,
            isCPasswordWrong: true,
        });
    };

    
    useEffect(() => {
      if (initialFormData.isCPasswordWrong) {
          if (initialFormData.password1 === initialFormData.password2) {
             updateFormData({
              ...formData,
              
              setShowErrorMessage: false,
              setCPasswordClass: 'form-control is-valid',
             }) 
              
          } else {
            updateFormData({
              ...formData,
              
              setShowErrorMessage: true,
              setCPasswordClass: 'form-control is-valid',
             })
          }
      }
  }, updateFormData({
    ...formData,
    
    password2: formData.password2,
   }))

 
    // Submit handler 
    const handleSubmit = (e) => {
        e.preventDefault();
        //NOTE: impement some way to check if password 1 is equal to password 2


        console.log(formData); //To check

        axiosInstance
            .post('register/', {
                full_name: formData.full_name,
                email: formData.email,
                username: formData.username,
                password: formData.password2,
            })
            .then((response) => {
                //response check
                console.log(response);
                console.log(response.data);
                
                navigate('/login');
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
              <h6 className='margin-b-3'>Already have an account? <button onClick={handleSubmit}>Login</button></h6>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label htmlFor='name'>Name</Form.Label>
                  <Form.Control 
                    id='name' 
                    type="text"
                    value={formData.full_name}
                    onChange={handleChange} 
                    placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor='email'>Email</Form.Label>
                  <Form.Control 
                    type="enail" 
                    placeholder="Email"
                    value={formData.email} 
                    id="email"
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor='password'> Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={formData.password1}
                    id="password"
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="confirm_password">Confirm Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Confirm Password"
                    value={formData.password2}
                    id="confirm_password" 
                    onChange={handleChange} />
                </Form.Group>
                {formData.showErrorMessage && formData.isCPasswordWrong ? 
                <div>Passwords did not match</div> : ""}
  
                <div className="log-btns">
                  <Button className=' btn-log'>Login</Button>
                  <Button className=' btn-log'>
                    <img src={ICON} alt="google icon" className='btn-icon' />
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



// import { useState } from 'react';
// import axiosInstance from './axios';
// import { useNavigate } from 'react-router-dom';

// export default function SignUp() {
//     const navigate = useNavigate();
//     const initialFormData = Object.freeze({
//         full_name: '',
//         email: '',
//         username: '',
//         password1: '',
//         password2: '',
//     });

//     const [formData, updateFormData] = useState(initialFormData);


//     // For removing white space
//     const handleChange = (e) => {
//         updateFormData({
//             ...formData,
//             // Trimming any whitespace
//             [e.target.name]: e.target.value.trim(),
//         });
//     };

//     // Submit handler 
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         //NOTE: impement some way to check if password 1 is equal to password 2
//         console.log(formData); //To check

//         axiosInstance
//             .post('register/', {
//                 full_name: formData.full_name,
//                 email: formData.email,
//                 username: formData.username,
//                 password: formData.password2,
//             })
//             .then((response) => {
//                 //response check
//                 console.log(response);
//                 console.log(response.data);
                
//                 navigate('/login');
//             });
//     };

//     //return()

// }