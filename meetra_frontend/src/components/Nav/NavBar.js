import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../index.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='border-bottom sticky-top' >
      <Container fluid>
        <Navbar.Brand href="#" className='navbar-brand'>
          Meet<span style={{fontWeight: 'bold'}}>ra</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-items nav-dark center" navbarScroll>
            <Nav.Link href="#feature" className='nav-links'>Features</Nav.Link>
            <Nav.Link href="#services" className='nav-links'>Solutions</Nav.Link>
            <Nav.Link href="#footer" className='nav-links'>Support</Nav.Link>
          </Nav>
          <Nav className='my-auto'>
            <Nav.Link href='/login'>
              <button className='btn btn--outline ms-3' >Login</button>
            </Nav.Link>
            <Nav.Link href="/signUp">
              <button className='btn btn--primary ms-3'>  Sign Up </button>
            </Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;