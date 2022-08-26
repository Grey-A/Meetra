import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Hero from '../Hero/Hero';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Container id='#' fluid style={{padding: '0 2rem 3rem 0', width: '95%'}}>
      <Row className="align-items-center  " style={{marginTop: '2rem'}}>
        <Col sm='11.5' md="6" lg="6" >
          <h1 className='text-center-sm h1-sm' style={{ fontSize: '3rem'}}>Fast, reliable and <span style={{color: "rgb(255, 165, 82"}}>secure</span> Conferencing</h1>
          <p className='text-center-sm p-s'>Stay connected and access shared content anytime to learn, meet, plan and innovate together</p>
          <div className="center bottom">
            <button className='btn btn--primary '><Link to='/login'>Get Started</Link></button>{' '}
            <button className='btn btn--outline'><Link to='features'>Learn More</Link></button>{' '}
          </div>
          
        </Col>
        {/* Image Column */}
        <Col sm='11.5' md="6" lg="6" style={{}}>
          <Hero />
        </Col>
        
      </Row>
    </Container>
  );
}

export default Header;  