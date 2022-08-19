import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../../index.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='border-bottom border-bottom-dark' >
      <Container>
        <Navbar.Brand href="/" className='navbar-brand'>
          MEET<span style={{fontWeight: 'bold'}}>RA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-items nav-dark align-middle">
            <Nav.Link href="/feature" className='nav-links text-sm-center'>Features</Nav.Link>
            <Nav.Link href="/solution" className='nav-links '>Solutions</Nav.Link>
            <Nav.Link href="/support" className='nav-links '>Support</Nav.Link>
          </Nav>
          <Nav className='my-auto'>
            <Nav.Link href='/login'>
              <Button className='btn btn--outline ms-3' >Login</Button>
            </Nav.Link>
            <Nav.Link href="/sign-up">
              <Button variant="dark" eventKey={2} className='btn btn--primary ms-3'>  Sign Up </Button>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;