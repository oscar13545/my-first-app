import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Card} from 'react-bootstrap';
import Logo from  './Logo.png'; 
import './Footer.css';

const Footer = (props) => {



    return (
        <Card bg="dark" text="light">
        <Card.Body>
          <br/>

    
          <Container>

<Row>
<Col xs={6}>  <img
        src={Logo}
        width="120"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      
      <br/>
      <br/>
                <p class="p1">EL MEJOR LUGAR PARA REALIZAR TU EVENTO</p></Col>
<Col><h5 >Contactos</h5>
                    
                    <li><a href="https://wa.me/+5216142856669">614 285 6669</a></li>
                    <li><a href="https://wa.me/+5216141318948">614 131 8948</a></li>
                    </Col>
<Col>

<h5 >Informacion</h5>
        
                    <li><a href="https://www.google.com/maps/dir/?api=1&destination=28.584703%2C-106.032236&fbclid=IwAR3YNE80RfhmvY5pxLkibCBBgNYKbrCQKh1poXZNjDhvTlZ5U4rLgbUMn7Q">Ubicacion</a></li>
                    <li><a href="https://www.facebook.com/Hacienda-La-Escondida-754867987959305/about/?ref=page_internal">Facebook</a></li></Col>
</Row>
</Container>
            
</Card.Body>
          </Card>
        );

}

export default Footer;
