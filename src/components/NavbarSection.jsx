import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';
const NavbarSection = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg" variant='dark' className='pt-1 pb-1'>
      <Container>
      <Navbar.Brand href="#home" className='fs-4 fw-bold align-center'>
            <img
              alt=""
              src={logo}
              width="55"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            BelanjaIBS
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#products" className='text-white'>Products</Nav.Link>
            <Nav.Link href="#subscribe" className='text-white'>Subscribe</Nav.Link>
            <Nav.Link href="#faq" className='text-white'>FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarSection;