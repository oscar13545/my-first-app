import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gal1 from  './Galeria1.jpg'; 
import Gal2 from  './Galeria2.png'; 
import Gal3 from  './Galeria3.png';
import Gal4 from  './Galeria4.jpg';
import Gal5 from  './Galeria5.png';
import Gal6 from  './Galeria6.png';    
import { Card, CardGroup} from 'react-bootstrap';

const Galeria = (props) => {
    return (
     
        <>
        <br />
        <CardGroup >
  <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src={Gal1} height="250"/>
    <Card.Body>
      <Card.Text>
        <h2>Nuestra pista de baile</h2>
      </Card.Text>
    </Card.Body>
  </Card>
  
  
  <Card style={{ width: '30rem' }}  bg="dark">
    <Card.Body>
      <Card.Text>
      <h2>Nuestra piscina</h2>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={Gal2} height="250"/>
  </Card>
  </CardGroup>

  <br />
  <CardGroup >
  <Card style={{ width: '30rem' }} >
    <Card.Img variant="top" src={Gal3}  height="250"/>
    <Card.Body>
      <Card.Text>
      <h2>Las instalaciones</h2>
      </Card.Text>
    </Card.Body>
  </Card>
  
  
  <Card style={{ width: '30rem' }}bg="dark" > 
    <Card.Body>
      <Card.Text>
      <h2></h2>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={Gal4} height="250"/>
  </Card>
  </CardGroup>

  <br />
  <CardGroup >
  <Card style={{ width: '30rem' }}  >
    <Card.Img variant="top" src={Gal5}  height="250"/>
    <Card.Body>
      <Card.Text>
      <h2>Nuestro comedor</h2>  
      </Card.Text>
    </Card.Body>
  </Card>
  
  
  <Card style={{ width: '30rem' }} bg="dark">
    <Card.Body>
      <Card.Text>
      <h2>El mejor lugar</h2>
        </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={Gal6} height="250"/>
  </Card>
  </CardGroup>
  <br/>
</>
        );
}

export default Galeria;