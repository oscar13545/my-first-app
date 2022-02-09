import React  from 'react';
import {Nav, TabContent , Tab, Col, Row, Card, Button} from 'react-bootstrap';

const Precios = (props) => {



    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Piñatas, Baby Showers, Cumpleaños, ETC.</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">XV Años</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">

        <TabContent>  
          <Card.Body>
          <Card.Title>Basico</Card.Title>
          <Card.Text>
          Alberca,
          Brinca Brinca,
          Manteleria,
          Meseros (opcional precio extra),
          Fotografo (opcional precio extra 200 fotos digitales)
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>Paquete 1</Card.Title>
          <Card.Text>
          50 Personas,
          Basico
          </Card.Text>
          <Button variant="warning" href="https://wa.me/+5216142856669?text=Me%20interesa%20el%20paquete%201%20de%20Piñatas,%20Baby%20Showers,%20Cumpleaños,%20ETC.">$ 4,700. 00</Button>{' '}
        </Card.Body>

        <Card.Body>
          <Card.Title>Paquete 2</Card.Title>
          <Card.Text>
          100 Personas,
          Basico
          </Card.Text>
          <Button variant="warning" href="https://wa.me/+5216142856669?text=Me%20interesa%20el%20paquete%202%20de%20Piñatas,%20Baby%20Showers,%20Cumpleaños,%20ETC.">$ 6,700. 00</Button>{' '}
        </Card.Body>

        <Card.Body>
          <Card.Title>Paquete 3</Card.Title>
          <Card.Text>
          150 Personas,
          Basico
          </Card.Text>
          <Button variant="warning" href="https://wa.me/+5216142856669?text=Me%20interesa%20el%20paquete%203%20de%20Piñatas,%20Baby%20Showers,%20Cumpleaños,%20ETC.">$ 8,500. 00</Button>{' '}
        </Card.Body>

        <Card.Body>
          <Card.Title>Paquete 4</Card.Title>
          <Card.Text>
          200 Personas,
          Basico
          </Card.Text>
          <Button variant="warning" href="https://wa.me/+5216142856669?text=Me%20interesa%20el%20paquete%204%20de%20Piñatas,%20Baby%20Showers,%20Cumpleaños,%20ETC.">$ 10,900. 00</Button>{' '}
        </Card.Body>
          </TabContent>
          

        </Tab.Pane>
        <Tab.Pane eventKey="second">

          <TabContent>
          <Card className="text-center" >
        <Card.Body>
          <Card.Title>Paquete 1</Card.Title>
          <Card.Text>
          100 Personas,
          Manteleria,
          Cristaleria,
          2 Guardias (de Gobernacion),
          2 Meseros,
          Fotografo (200 fotos digitales)
          </Card.Text>
          <Button variant="warning" href="https://wa.me/+5216142856669?text=Me%20interesa%20el%20paquete%201%20de%20XV%20Años.">$ 11,900. 00</Button>{' '}
        </Card.Body>
        <Card.Body>
          <Card.Title>Paquete 2</Card.Title>
          <Card.Text>
          150 Personas,
          Manteleria,
          Cristaleria,
          2 Guardias (de Gobernacion),
          2 Meseros,
          Fotografo (200 fotos digitales)
          </Card.Text>
          <Button variant="warning" href="https://wa.me/+5216142856669?text=Me%20interesa%20el%20paquete%201%20con%20150%20personas%20de%20XV%20Años.">$ 14,900. 00</Button>{' '}
        </Card.Body>
        <Card.Body>
          <Card.Title>Paquete 2</Card.Title>
          <Card.Text>
          200 Personas,
          Manteleria,
          Cristaleria,
          2 Guardias (de Gobernacion),
          2 Meseros,
          Fotografo (200 fotos digitales)
          </Card.Text>
          <Button variant="warning" href="https://wa.me/+5216142856669?text=Me%20interesa%20el%20paquete%201%20con%20200%20personas%20de%20XV%20Años.">$ 16,900. 00</Button>{' '}
        </Card.Body>
      </Card>
          </TabContent>

        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        );

}

export default Precios;