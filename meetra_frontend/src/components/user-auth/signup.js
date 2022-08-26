// import React, { useState, useEffect, useRef } from 'react';
// import Col from 'react-bootstrap/esm/Col';
// import Container from 'react-bootstrap/esm/Container';
// import Row from 'react-bootstrap/esm/Row';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import IMG from '../../asset/user7.jpg'
// import axios from './axios';

// import { Link, useNavigate, } from 'react-router-dom';

// const USER_REGEX = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
// const USERNAME_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
// const EMAIL_REGEX = /.+@.+\.[A-Za-z]+$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


// export default function SignUp() {
//   const userRef = useRef();
//   const errRef = useRef();
//   let navigate = useNavigate();

//   const [username, setUsername] = useState('')
//   const [validUserame, setValidUsername] = useState(false)
//   const [usernameFocus, setUsernameFocus] = useState(false)

//   const [user, setUser] = useState('');
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [email, setEmail] = useState('')
//   const [validEmail, setValidEmail] = useState(false)
//   const [EmailFocus, setEmailFocus] = useState(false)

//   const [pwd, setPwd] = useState('');
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState('');
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState('');
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus()
//   }, [])

//   useEffect(() => {
//     setValidName(USER_REGEX.test(user));
// }, [user])

//   useEffect(() => {
//     const result = USERNAME_REGEX.test(username)
//     setValidUsername(result);
//   }, [username])

//   useEffect(() => {
//     const result = EMAIL_REGEX.test(email)
//     setValidEmail(result);
//   }, [email])

//   useEffect(() => {
//     setValidPwd(PWD_REGEX.test(pwd));
//     setValidMatch(pwd === matchPwd);
// }, [pwd, matchPwd])

//   useEffect(() => {
//     setErrMsg('')
//   }, [user, pwd, matchPwd, username, email])
   
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // if button enabled with JS hack
//     const v1 = USER_REGEX.test(user);
//     const v2 = PWD_REGEX.test(pwd);
//     const v3 = EMAIL_REGEX.test(email);
//     if (!v1 || !v2 || !v3) {
//       setErrMsg("Invalid Entry");
//       return;
//     }

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/user/register/',
//           { full_name: user, email: email, username: username, password: pwd },
//           {
//             headers: { 'Content-Type': 'application/json' },
//             withCredentials: true
//         }
//       );
//       console.log(response?.data);
//       console.log(response?.accessToken);
//       console.log(JSON.stringify(response))
//       setSuccess(true);
//       // clear state and controlled inputs
//       setUser('');
//       setEmail('');
//       setPwd('');
//       setMatchPwd('');
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg('No Server Response');
//       } else if (err.response?.status === 409) {
//           setErrMsg('Username Taken');
//       } else {
//           setErrMsg('Registration Failed')
//       }
//       errRef.current.focus();
//     }
//   }

  
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
//               <h6 className='margin-b-3'>Already have an account? <Link to="/login">Login</Link> {" "}</h6>
              
//               <p 
//                 ref={errRef}
//                 className={errMsg ? 'errmsg' : 'offscreen'}
//                 aria-live="assertive"
//               >
//                 {errMsg}
//               </p>
//               {success ? navigate('/login') 
//               : (
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-2">
//                   <Form.Label htmlFor='name'>
//                     Full Name:
//                     <span className={validName ? 'valid' : 'hide'}>
//                       <i className="fa fa-check"></i>
//                     </span>
//                     <span className={validName || !user ? 'hide' : 'invalid'}>
//                       <i className="fa fa-times"></i>
//                     </span>
//                   </Form.Label>
//                   <Form.Control 
//                     type="text"
//                     id='name'
//                     ref={userRef}
//                     autoComplete='off'
//                     onChange={(e) => setUser(e.target.value)}
//                     value={user}
//                     required
//                     aria-invalid={validName ? 'false' : 'true'}
//                     aria-describedby='uidnote'
//                     onFocus={() => setUserFocus(true)}
//                     onBlur={() => setUserFocus(true)}
//                     placeholder="Enter Full Name" />
//                     <p id="uidnote" 
//                       className={userFocus && user && !validName 
//                       ? 'instructions' : 'offscreen'}
//                     >
//                       <i className="fa fa-info-circle"></i>
//                       3 to 24 characters. <br />
//                       Must begin with a letter. <br />
//                       Letters, numbers, underscores, hyphens allowed.
//                     </p>
//                 </Form.Group>

//                 <Form.Group className="mb-2">
//                   <Form.Label htmlFor='username'>
//                     Username:
//                     <span className={validUserame ? 'valid' : 'hide'}>
//                       <i className="fa fa-check"></i>
//                     </span>
//                     <span className={validUserame || !username ? 'hide' : 'invalid'}>
//                       <i className="fa fa-times"></i>
//                     </span>
//                   </Form.Label>
//                   <Form.Control 
//                     type="text"
//                     id='username'
//                     autoComplete='off'
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                     value={username}
//                     aria-invalid={validUserame ? 'false' : 'true'}
//                     aria-describedby='umnote'
//                     onFocus={() => setUsernameFocus(true)}
//                     onBlur={() => setUsernameFocus(true)}
//                     placeholder="Enter Username" />
//                     <p id="umnote" 
//                       className={usernameFocus && username && !validUserame 
//                       ? 'instructions' : 'offscreen'}
//                     >
//                       <i className="fa fa-info-circle"></i>
//                       3 to 24 characters. <br />
//                       Must begin with a letter. <br />
//                       Letters, numbers, underscores, hyphens allowed.
//                     </p>
//                 </Form.Group>

//                 <Form.Group className="mb-2">
//                   <Form.Label htmlFor='email'>
//                     Email:
//                     <span className={validEmail? 'valid' : 'hide'}>
//                       <i className="fa fa-check"></i>
//                     </span>
//                     <span className={validEmail || !email ? 'hide' : 'invalid'}>
//                       <i className="fa fa-times"></i>
//                     </span>
//                   </Form.Label>
//                   <Form.Control 
//                     type="email" 
//                     id="email"
//                     placeholder="Enter Email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     value={email}
//                     aria-invalid={validEmail ? 'false' : 'true'}
//                     aria-describedby='emailnote'
//                     onFocus={() => setEmailFocus(true)}
//                     onBlur={() => setEmailFocus(false)}
//                   />
//                     <p id="emailnote" 
//                       className={EmailFocus && email && !validEmail 
//                       ? 'instructions' : 'offscreen'}
//                     >
//                       <i className="fa fa-info-circle"></i>
//                       4 to 30 characters. <br />
//                       Must begin with a letter. <br />
//                       Email must Include @ <br />
//                       Letters, numbers, underscores allowed.
//                     </p>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor='password'> 
//                     Password:
//                     <span className={validPwd? 'valid' : 'hide'}>
//                       <i className="fa fa-check"></i>
//                     </span>
//                     <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
//                       <i className="fa fa-times"></i>
//                     </span>
//                   </Form.Label>
//                   <Form.Control 
//                     type="password"
//                     id="password" 
//                     placeholder="Password"
//                     onChange={(e) => setPwd(e.target.value)}
//                     required
//                     value={pwd}
//                     aria-invalid={validPwd ? 'false' : 'true'}
//                     aria-describedby='pwdnote'
//                     onFocus={() => setPwdFocus(true)}
//                     onBlur={() => setPwdFocus(false)}
//                   />
//                   <p id="pwdnote" 
//                       className={pwdFocus && pwd && !validPwd 
//                       ? 'instructions' : 'offscreen'}
//                   >
//                     <i className="fa fa-info-circle"></i>
//                       8 to 24 characters. <br />
//                       Must include uppercase and lowercase letters, a number and a special characters. <br />
//                       Allowed special characters: 
//                       <span aria-label='exclamation mark'> !</span> <span aria-label='at symbol mark'>@</span> <span aria-label='hashtag'>#</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
//                       <br />
//                       Letters, numbers, underscores allowed.
//                     </p>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="confirm_password">
//                     Confirm Password:
//                     <span className={validMatch && matchPwd? 'valid' : 'hide'}>
//                       <i className="fa fa-check"></i>
//                     </span>
//                     <span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
//                       <i className="fa fa-times"></i>
//                     </span>
//                   </Form.Label>
//                   <Form.Control 
//                     type="password" 
//                     id="confirm_password"
//                     placeholder="Confirm Password"
//                     onChange={(e) => setMatchPwd(e.target.value)}
//                     value={matchPwd}
//                     required
//                     aria-invalid={validMatch ? "false" : "true"}
//                     aria-describedby="confirmnote"
//                     onFocus={() => setMatchFocus(true)}
//                     onBlur={() => setMatchFocus(false)}
//                   />
//                   <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                     <i className="fa fa-info-circle"></i>
//                     Must match the first password input field.
//                   </p>
//                 </Form.Group>
  
//                 <Button 
//                     className='btn btn-dark'
//                     type='submit'
//                     disabled={!validName || !validPwd || !validMatch ? true : false}
//                     onClick={handleSubmit}
//                   >
//                     Register
//                 </Button>
//               </Form>          
//             )
//           }
//         </div>
//     </Col>
//       </Row>
//     </Container>
//   )
// }




import { useRef, useState, useEffect } from "react";
import axios from './axios';
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import IMG from '../../asset/user7.jpg'


const FULLNAME_REGEX = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const EMAIL_REGEX = /.+@.+\.[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    let navigate = useNavigate();

    const [full_name, setFull_name] = useState('');
    const [validFull_name, setValidFull_name] = useState(false);
    const [full_nameFocus, setFull_nameFocus] = useState(false);

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);
    
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidFull_name(FULLNAME_REGEX.test(full_name));
    }, [full_name])

    useEffect(() => {
        setValidUsername(USERNAME_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [full_name, username, email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USERNAME_REGEX.test(username);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/user/register/',
                { full_name: full_name, username: username, email: email, password: pwd },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setFull_name('');
            setUsername('');
            setEmail('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
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
            <h4 className="logo">Sign Up</h4>
            <h6 className='margin-b-3'>Already have an account? <Link to="/login">Login</Link> {" "}</h6>
                
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive"> {errMsg} </p>
          </div>
             {success ? navigate('/login') 
             : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-1 form-group">
                    <Form.Label htmlFor="full_name">
                      Full Name: 
                      <span className={validFull_name ? "valid" : "hide"}><i className="fa fa-check"></i></span>
                      <span className={validFull_name || !full_name ? "hide" : "invalid"}><i className="fa fa-times"></i></span>
                    </Form.Label>
                    <Form.Control type="text" id="full_name" ref={userRef} autoComplete="off" onChange={(e) => setFull_name(e.target.value)} value={full_name} required aria-invalid={validFull_name ? "false" : "true"}aria-describedby="fndnote" onFocus={() => setFull_nameFocus(true)} onBlur={() => setFull_nameFocus(false)} />

                    <p id="fnnote" className={full_nameFocus && full_name && !validFull_name ? "instructions" : "offscreen"}>
                            <i className="fa fa-info-circle"></i>
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                    </p>

                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="username">
                      Username:
                      <span className={validUsername ? "valid" : "hide"}><i className="fa fa-check"></i></span>
                      <span className={validUsername || !username ? "hide" : "invalid"}><i className="fa fa-times"></i></span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="username" autoComplete="off" onChange={(e) => setUsername(e.target.value)} value={username} required aria-invalid={validUsername ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setUsernameFocus(true)} onBlur={() => setUsernameFocus(false)} />

                      <p id="uidnote" className={usernameFocus && username && !validFull_name ? "instructions" : "offscreen"}>
                            <i className="fa fa-info-circle"></i>
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="email">
                      Email:
                      <span className={validEmail ? "valid" : "hide"}><i className="fa fa-check"></i></span>
                      <span className={validEmail || !email ? "hide" : "invalid"}><i className="fa fa-times"></i></span>
                    </Form.Label>

                    <Form.Control type="text" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required aria-invalid={validEmail ? "false" : "true"} aria-describedby="emnote" onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)}
                    />

                    <p id="emnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                      <i className="fa fa-info-circle"></i>
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="password">
                      Password:
                      <span className={validPwd ? "valid" : "hide"}><i className="fa fa-check"></i></span>
                      <span className={validPwd || !pwd ? "hide" : "invalid"}><i className="fa fa-times"></i></span>
                    </Form.Label>
                    <Form.Control type="password" id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} required aria-invalid={validPwd ? "false" : "true"} aria-describedby="pwdnote" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)}
                    />
                    
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                      <i className="fa fa-info-circle"></i>
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="confirm_pwd">
                      Confirm Password:
                      <span className={validMatch && matchPwd ? "valid" : "hide"} >
                        <i className="fa fa-check"></i>
                      </span>
                      <span className={validMatch || !matchPwd ? "hide" : "invalid"} >
                        <i className="fa fa-times"></i>
                      </span>
                      </Form.Label>
                        <Form.Control type="password" id="confirm_pwd" onChange={(e) => setMatchPwd(e.target.value)} value={matchPwd} required aria-invalid={validMatch ? "false" : "true"} aria-describedby="confirmnote" onFocus={() => setMatchFocus(true)} onBlur={() => setMatchFocus(false)}
                        />

                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                          <i className="fa fa-info-circle"></i>
                            Must match the first password input field.
                        </p>
                  </Form.Group>

                  <button className='btn-login' type='submit'  onClick={handleSubmit}> Login </button>
                </Form>
              )}  
        </div>    
      </section>
            
  )
}

export default Register
