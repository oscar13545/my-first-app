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
          100 Personas,
          Basico
          </Card.Text>
          <Button variant="warning">$ 4,700. 00</Button>{' '}
        </Card.Body>

        <Card.Body>
          <Card.Title>Paquete 2</Card.Title>
          <Card.Text>
          100 Personas,
          Basico
          </Card.Text>
          <Button variant="warning">$ 6,700. 00</Button>{' '}
        </Card.Body>

        <Card.Body>
          <Card.Title>Paquete 3</Card.Title>
          <Card.Text>
          100 Personas,
          Basico
          </Card.Text>
          <Button variant="warning">$ 8,500. 00</Button>{' '}
        </Card.Body>

        <Card.Body>
          <Card.Title>Paquete 4</Card.Title>
          <Card.Text>
          100 Personas,
          Basico
          </Card.Text>
          <Button variant="warning">$ 10,900. 00</Button>{' '}
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
          <Button variant="warning">$ 11,900. 00</Button>{' '}
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
          <Button variant="warning">$ 14,900. 00</Button>{' '}
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
          <Button variant="warning">$ 16,900. 00</Button>{' '}
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