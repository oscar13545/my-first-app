import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup} from 'react-bootstrap';

const Galeria = (props) => {
    return (
     
        <>
        <br />
        <CardGroup >
  <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t1.18169-9/10986625_772161569563280_935060681763185354_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=DjsXRm81nuoAX-mXo2L&_nc_ht=scontent.fcuu1-1.fna&oh=6302f98a4b42342288a8fe4f61523bd1&oe=6157DCFD"  height="250"/>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  
  
  <Card style={{ width: '30rem' }}>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t1.18169-9/11667545_772161579563279_6243768281790539977_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=szFt7vasiloAX_eRkn5&_nc_ht=scontent.fcuu1-1.fna&oh=b7d0ad0e59af66418792f848ed2432da&oe=6159F3E8" height="250"/>
  </Card>
  </CardGroup>

  <br />
  <CardGroup >
  <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t1.6435-9/199276053_3935908789855193_1619698744216546948_n.png?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ZaZmCXmWonoAX_e5BSq&_nc_ht=scontent.fcuu1-1.fna&oh=36eb280b0ccff6e8edd73022500e3548&oe=61589600"  height="250"/>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  
  
  <Card style={{ width: '30rem' }}>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t31.18172-8/11856359_798952393550864_9173563112460073979_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=PGVZLjdBWW4AX-TjGi8&_nc_ht=scontent.fcuu1-1.fna&oh=3a6e9592186598e6eac93e7f1cb57050&oe=61590D06" height="250"/>
  </Card>
  </CardGroup>

  <br />
  <CardGroup >
  <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t1.18169-9/11265102_772161609563276_8286120667682474153_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=ERGeeVY-leYAX_W839Y&_nc_ht=scontent.fcuu1-1.fna&oh=1253d04efdd6ea63f7417190d61381bf&oe=615AF50A"  height="250"/>
    <Card.Body>
      <Card.Text>
      Hacienda La Escondida  
      </Card.Text>
    </Card.Body>
  </Card>
  
  
  <Card style={{ width: '30rem' }}>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t1.18169-9/11665363_772161576229946_3985075635962379975_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=r2fN_3g-wkcAX-SOYDv&_nc_ht=scontent.fcuu1-1.fna&oh=a67eef0c174675201b16e1712e6bd6aa&oe=615AFC3F" height="250"/>
  </Card>
  </CardGroup>
</>
        );
}

export default Galeria;