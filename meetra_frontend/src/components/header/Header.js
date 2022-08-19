import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Container>
      <Row>
        <Col>HEADER SECTION</Col>
        <Col>HEADER SECTION column 2</Col>
      </Row>
      <Row>
        <Col>HEADER SECTION</Col>
        <Col>HEADER SECTION column 2</Col>
      </Row>
    </Container>
  );
}

export default Header;
