import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Twitter from '../../asset/twitter.svg'
import Linkedin from '../../asset/linkedin (1).svg'
import Instagram from '../../asset/instagram.svg'

   
const Form = () => {

    const [message, setMessage] = useState('');
    const isAnonymous = true;
    
  
    const handleClick = event => {
      event.currentTarget.disabled = true;
      console.log('button clicked');
    };

    const handleSubmit = (e) => {
      
      handleClick();
      setMessage('');
      e.preventDefault()
    }
  
    return (

        <label htmlFor="message">Sign up to our newletter
        <form action="#" className="form">
          <input
            type="email"
            id="message"
            name="message"
            value={message}
            placeholder='youremail@abcd.com'
            onChange={event => setMessage(event.target.value)}
          />
          <button disabled={!message} 
          onClick={handleSubmit}
          className='btn-dark btn-space'>Submit</button>
        </form>
        </label>



    );

  }


  


const FooterTop = () => {
  return (
    <div className="footerTop-con text-center">
      <div className="card-name margin-tb padding-tb">
        <span className="section-subtitle">
          Working better, together
        </span>
      </div>
      <span className="footer-top-body center margin-auto font-capitalize">
        confrencing meeting, planning and more has never been this easier and properly organised. Thanks to Meetra for making this simple and easy
      </span>
      <div className="margin-tb">
        <Button variant="white" className='btn btn--primary'>Get started</Button>
      </div>
    </div>
  )
}

const FooterBottom = () => {
  return (
    <Container fluid style={{background: 'rgb(30, 30, 30)', color: '#f2f2f2'}} >
      <Row sm='6'>
        <Col lg='6' md='6' sm='12'>
          <div className='footer-container'>
            <div className="footer-logo">
              Meet<span>ra</span>
            </div>
            <div className="footer-text">
              Join us and Stay connected with friends close or far.
            </div>
            <Form />

          </div>
        </Col>
        <Col lg='6' md='6' sm='6'>
              <div className="footer-container-rg">
                <div className="footer-links text-center-sm">
                  <span className="footer-title">
                    Quick links
                  </span>
                  <ul>
                    <li><a href="#feature" className=''>Features</a></li>
                    <li><a href="#services" className=''>Solutions</a></li>
                    <li><a href="#footer" className=''>Support</a></li> 
                  </ul>
                </div>
                <div className="footer-links">
                  <span className="footer-title">
                    Support
                  </span>
                  <ul>
                    <li><a href="#feature" className=''>Features</a></li>
                    <li><a href="#services" className=''>Solutions</a></li>
                    <li><a href="#footer" className=''>Support</a></li> 
                  </ul>
                </div>
              </div>
        </Col>
      </Row>
    </Container>
  )
}
const FooterContact = () => {
  const [ year, setYear ] = useState()
  const Year = () => setYear( new Date().getFullYear())
  useEffect(() => {
    Year()
  }, [])
  return (
    <Container fluid style={{background: 'rgb(30, 30, 30)', color: '#f2f2f2', }}>
      <div style={{borderTop: '.1px solid rgb(165, 148, 148)', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', margin: '0 1.8rem', }}>
        <div>
          <div className="footer-icons">
            <a href='http://www.twitter.com/' target='_blank' rel='noreferral noopener'><img src={Twitter} alt="Twitter Icon" /></a>
            <a href='http://www.instagram.com/' target='_blank' rel='noreferral noopener'><img src={Instagram} alt="Instagram Icon" /></a>
            <a href='http://www.linkedin.com/' target='_blank' rel='noreferral noopener'><img src={Linkedin} alt="Linkedin Icon" /></a>
          </div>
        </div>
        <div>
          <div className='date'>
            <span>
              &copy; {year}
            </span>
            <a href='http://www.meetra.com'
              target='_blank' rel='noreferral noopener'
              className="footer-logo">
              Meet<span>ra</span>.com
            </a>
          </div>
        </div>
      </div>

    </Container>
  )
}


const Footer = () => {
  return (
    <Container fluid id='footer' style={{background: 'rgb(30, 30, 30)', padding: '0 0rem 0rem 0', width: '100%'}} >
      <FooterTop />
      <FooterBottom />
      <FooterContact />
    </Container>
  )
}

export default Footer
