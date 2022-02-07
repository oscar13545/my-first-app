import React  from 'react';
import './Video.css';
import NvImg1 from  './NvImg1.jpg'; 
import NvImg2 from  './NvImg2.jpg'; 
import NvImg4 from  './NvImg4.jpg'; 
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
        <Card.Header ></Card.Header>
        <Card.Body>
          <Card.Title>La escondida</Card.Title>
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
    <Card.Img variant="top" src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t1.6435-9/197260822_3941485065964232_4498383604112594987_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=x74nNy3rUSoAX_I4JXE&_nc_ht=scontent.fcuu1-1.fna&oh=7a83b640f44f65e235dfaa933b45b55c&oe=615AC8E6" width="100" height="400" />
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
    <Card.Img variant="top" src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t1.6435-9/200738382_3959594164153322_2123401322163632392_n.png?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=vJBPUmadYrgAX-Hhh7H&tn=vQt8RgXfC57Yib5b&_nc_ht=scontent.fcuu1-1.fna&oh=c5a51175a587a18295d38dd033eeec8d&oe=615997EA" width="100" height="400"/>
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
    <Card.Img variant="top" src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t1.6435-9/195203156_3933317773447628_5281256754462867145_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2PNjHXJB1xMAX-Lizuj&_nc_ht=scontent.fcuu1-1.fna&oh=138a1a15162c05b9e1945f9ff2ea56f9&oe=6158F759" width="100" height="400"/>
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