import React  from 'react';
import './Video.css';
import NvImg1 from  './NvImg2.jpg'; 
import NvImg2 from  './NvImg3.jpg'; 
import NvImg4 from  './Iteam1.png'; 
import Gal1 from  './Gallery1.jpg'; 
import Gal3 from  './Gallery3.jpg'; 
import Gal2 from  './Gallery2.png';
import { Card, CardGroup, Button, Carousel} from 'react-bootstrap';

const Video = (props) => {
    return (
        <div>
         <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NvImg1} width="400" height="600"
          

          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NvImg2}  width="400" height="600"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NvImg4}  width="400" height="600"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        <div class = "Information">
        <Card className="text-center" bg="dark">
        <Card.Body>
          <Card.Title><h2>La escondida</h2></Card.Title>
          <Card.Text>
          Los mejores momentos los pasas en hacienda la Escondida. La diversión esta asegurada, contamos con el lugar adecuado para todo tipo de eventos, contando con las medidas de salud necesarias para cuidarnos
          </Card.Text>
          <Button variant="warning">Mas informacion</Button>{' '}
        </Card.Body>
      </Card>
      </div>

      <div class = "Information">
            <CardGroup>

  <Card bg="dark">
    <Card.Img variant="top" src={Gal1} width="100" height="400" />
    <Card.Body>
      <Card.Title>Paquetes</Card.Title>
      <Card.Text>
      Agenda el día de tu evento antes que te lo ganen.
Te mostramos los servicios que ofrecemos para que celebres ese día tan especial que has esperado.
      </Card.Text>
      <Button variant="light">Mas informacion</Button> {' '}
    </Card.Body>
  </Card>


  <Card bg="dark">
    <Card.Img variant="top" src={Gal2} width="100" height="400"/>
    <Card.Body>
      <Card.Title>Agenda</Card.Title>
      <Card.Text>
      Agenda tu evento con anticipación.
Pregunta por nuestros diferentes paquetes.
Celebra aquí el evento que tanto has estado esperando.{' '}
      </Card.Text>
      <Button variant="light">Mas informacion</Button> {' '}
    </Card.Body>
    
  </Card>
  <Card bg="dark">
    <Card.Img variant="top" src={Gal3} width="100" height="400"/>
    <Card.Body>
      <Card.Title>Contacto</Card.Title>
      <Card.Text>
      Los mejores momentos los pasas en hacienda la Escondida.
La diversión esta asegurada, contamos con el lugar adecuado para todo tipo de eventos, contando con las medidas de salud necesarias para cuidarnos
      </Card.Text>
      <Button variant="light">Mas informacion</Button> {' '}
    </Card.Body>
    
  </Card>
</CardGroup>
        </div>




      </div>



        );

}

export default Video;