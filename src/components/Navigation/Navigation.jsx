import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//styles
import './navigation.css';
import logo from '../../assets/images/logo_blue.png';

function Navigation({Link}) {
  return (
    <Navbar expand="lg" className="primary-bg-color">
      <Container>
      <Navbar.Brand href="/">
            <img
              alt="Taniti Island Logo blue background"
              src={logo}
              width="250"
              height="100"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant='underline' defaultActiveKey={1} className="me-auto">
            <Nav.Link as={Link} to='/' className='text-light me-5' eventKey={1}>Home</Nav.Link>
            <Nav.Link as={Link} to='/experiences' className='text-light me-5'eventKey={2}>Experiences</Nav.Link>
            <Nav.Link as={Link} to='/planning' className='text-light me-5'eventKey={3}>Planning</Nav.Link>
            <Nav.Link as={Link} to='/faq' className='text-light ' eventKey={4}>FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation