import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import Logo from  './Logo.png';   

export default function Bootstrap() {
  return(
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home"> <img
        src={Logo}
        width="120"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/galeria">Galeria</Nav.Link>
      <Nav.Link href="/paquetes">Paquetes</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
  );
}
