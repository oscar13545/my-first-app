import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';

export default function Bootstrap() {
  return(
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">La escondida</Navbar.Brand>
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
