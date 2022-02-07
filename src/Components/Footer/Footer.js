import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Card} from 'react-bootstrap';

const Footer = (props) => {



    return (
        <Card bg="dark" text="light">
        <Card.Body>

    
          <Container>

<Row>
<Col xs={6}>  <h5 >La escondida</h5>
                <p>EL MEJOR LUGAR PARA REALIZAR TU EVENTO</p></Col>
<Col><h5 >Contactos</h5>
                    <li><a href="https://www.facebook.com/Hacienda-La-Escondida-754867987959305/about/?ref=page_internal">Facebook</a></li>
                    <li><a href="#!">Instagram</a></li></Col>
<Col><h5 >Informacion</h5>
        
                    <li><a href="https://www.google.com/maps/dir/?api=1&destination=28.584703%2C-106.032236&fbclid=IwAR3YNE80RfhmvY5pxLkibCBBgNYKbrCQKh1poXZNjDhvTlZ5U4rLgbUMn7Q">Ubicacion</a></li>
                    <li><a href="#!">614 239 4796</a></li>
                    <li><a href="#!">614 131 8948</a></li></Col>
</Row>
</Container>
            
</Card.Body>
          </Card>
        );

}

export default Footer;
