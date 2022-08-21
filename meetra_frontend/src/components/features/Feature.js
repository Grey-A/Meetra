import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMG from '../../asset/user5.jpg'

function Feature() {
  return (
    <Container 
      fluid 
      id='feature' 
      style={{ padding: '1.5rem 0 4rem 0' }}
      className='border-bottom border-top' 
    >
      <Row 
        className="align-items-center mx-auto" 
        style={{marginTop: '2rem'}}
      >
        <Col mb-6 sm='11.5' md="6" lg="6">
          <div className="section-container">
            <div className="section-header">
              <span className="section-title">Features</span>
              <span className="section-subtitle">
                Grow better, together
              </span>
              <h3>Grow together while enjoying our cool features.</h3>
            </div>
            <div className="section-body">
              <span className="section-id">1</span>
              <h2>Meeting Milestones - allocate times for section of your meetings.</h2>
            </div>
            <div className="section-body">
              <span className="section-id">2</span>
              <h2>Premium Security - enjoy security while in a meeting.</h2>
            </div>
            <div className="section-body">
              <span className="section-id">3</span>
              <h2>Meeting Reminder - be reminded of your meeting at least an hour before.</h2>
            </div>
          </div>
        </Col>
        
        {/* Image Column */}
        <Col sm='11.5' md="6" lg="6" style={{}}>
          <div className="single-image-con ">
            <img src={IMG} alt='Happy User' className='border-radius-l' />
          </div>   
        </Col>
        
      </Row>
    </Container>
  );
}

export default Feature;  
