import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { VideoCall } from './VideoCall';

const Call = () => {
    return (
        <Container className="pt-3">
            <Navbar expand="lg" variant="dark" bg="light" className="border border-dark">
                <Container>
                    <Navbar.Brand href="#" className='navbar-brand'>
                        Meet<span style={{ fontWeight: 'bold' }}>ra</span>
                    </Navbar.Brand>
                    <Nav className='my-auto'>
                        <Nav.Link href='#'>
                            <button className='btn btn--outline ms-3' >Invite</button>
                        </Nav.Link>
                        <Nav.Link href="/dashboard">
                            <button className='btn btn--primary ms-3'>  Close Call </button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <VideoCall />
        </Container>
    )
}

export default Call