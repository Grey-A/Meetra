import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMG from '../../asset/user6.jpg'

function Services() {
  return (
    <Container 
      fluid 
      id='services' 
      style={{ padding: '1.5rem 0 4rem 0', width: '95%'}}
      className='border-bottom border-top' 
    >
      <Row 
        className="align-items-center mx-auto" 
        style={{marginTop: '2rem'}}
      >

        {/* Image Column */}
        <Col sm='11.5' md="6" lg="6" style={{}}>
          <div className="single-image-con ">
            <img src={IMG} alt='Happy User' className='border-radius-r' />
          </div>   
        </Col>


        <Col mb-6 sm='11.5' md="6" lg="6">
          <div className="section-container">
            <div className="section-header flex-end">
              <span className="section-title">Services</span>
              <span className="section-subtitle">
                Helpful and Friendly for Users
              </span>
              <h3>Stay connected with different users online.</h3>
            </div>

              <div className="section-body flex-end">
                <h2 id='text'>Hold/Schedule meetings anytime</h2>
                <span num className="section-id sec-ml">1</span>
              </div>

              <div className="section-body flex-end">               
                <h2 id='text'>Free Services - No payment</h2>
                <span id='num' className="section-id sec-ml">2</span>
              </div>

              <div className="section-body flex-end"> 
                <h2 id='text'>24/7 Customer support</h2>
                <span id='num' className="section-id sec-ml">3</span>
              </div>
            </div>

        </Col>
        
      </Row>
    </Container>
  );
}

export default Services;  
