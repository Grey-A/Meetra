import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Hero from '../Hero/Hero';

function AutoLayoutVariableExample() {
  return (
    <Container fluid style={{padding: '0 0 3rem 0'}}>
      <Row className="align-items-center  mx-auto" style={{marginTop: '2rem'}}>
        <Col mb-6 sm='11.5' md="6" lg="6" >
          <h1 style={{ fontSize: '3rem'}}>Fast, reliable and <span style={{color: "rgb(255, 165, 82"}}>secure</span> Conferencing</h1>
          <p className='text-center-sm'>Stay connected and access shared content anytime to learn, meet, plan and innovate together</p>
          <div className="center bottom">
            <Button variant="dark"  className='btn btn--primary '>Get Started</Button>{' '}
            <Button variant="light" className='btn btn--outline pt-auto'>Learn More</Button>{' '}
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

export default AutoLayoutVariableExample;  