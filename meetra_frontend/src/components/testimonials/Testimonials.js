import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMG from '../../asset/user5.jpg'
import IMG2 from '../../asset/user6.jpg'
import IMG3 from '../../asset/user7.jpg'
import IMG4 from '../../asset/user8.jpg'
import Card from 'react-bootstrap/Card'

const data = [
  {
    id: 1,
    img: IMG,
    imgClass: 'border-radius-bl',
    cardName: 'Nokia Adewale',
    cardText: 'I have been able to connect with my family in Nigeria  much better since  I started using Meetra. ',
    star: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    img: IMG2,
    imgClass: 'border-radius-bl',
    cardName: 'Fredrick Bell',
    cardText: 'My co-workers and I have become closer then we have due to remote meetings we have here.',
    star: [1, 2, 3, 4,],
  },
  {
    id: 3,
    img: IMG3,
    imgClass: 'border-radius-bl',
    cardName: 'Margerett Steve',
    cardText: 'My clients have been able to get quick feedbacks from me because of Meetra.',
    star: [1, 2, 3, 4,],
  },
  {
    id: 4,
    img: IMG4,
    imgClass: 'border-radius-bl',
    cardName: 'John Reaves',
    cardText: 'Thank you Meetra! I was able to connect with my High-School buddies here. It was awesome ',
    star: [1, 2, 3, 4, 5],
  },
]


function Feature() {
  return (
    <Container
      fluid
      id='feature' 
      style={{ padding: '1.5rem 0 4rem 0', width: '97%'}}
      className='border-bottom border-top'
    >
      <Card border="light" className="text-center">
        <div className="section-header">
          <span className="section-title">Testimonials</span>
          <span className="section-subtitle">
            See what our Customers say
          </span>
        </div>
      </Card>

      <Row 
        className="align-items-center mx-auto" 
        style={{marginTop: '2rem'}}
      >
      {data.map(({ id, img, imgClass, cardName, cardText, star }) => {
        return (
          <Col sm='11.5' md="6" lg="6" key={id}>
              <div className="card-container">
                <div className="card-image">
                  <img src={img} alt='Happy User' className={imgClass}/>
                </div>
                <div className="card-body">
                  <h4 className="card-name">
                    {cardName}
                  </h4>
                  <p className="card-text">
                    {cardText}
                  </p>

                  <div className="card-rating">
                    {star.length > 0 && (
                      star.map(( id ) => {
                        return(
                        <span key={id} className="fa fa-star checked"></span>
                     )})
                    )}
                  </div>
                </div>

              </div>   
            </Col>
              )
           })}
       </Row>

    </Container>
  );
}

export default Feature;  

