import React from 'react';
import { Container, Row, Col, Button, Accordion, Card } from 'react-bootstrap';

import { Navbar } from '../components/navbar';

export const Orders = (props) => {
  
  // TODO - get the orders here

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <h1>Pedidos</h1>
          </Col>
          <Col lg={6} md={6} className='align-right'> 
            <Button variant='primary' size='lg' href='/new_order'>Nuevo pedido</Button>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col lg={8}>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <Row>
                    <Col>
                      <h4>Pedido # 182</h4>
                      <p>Sr. Roberto Perezyera</p>
                      <p>
                        C. Dr. Mora 9 <br/>
                        Centro, Cuauhtemoc <br/>
                        06000, Ciuda de México, CDMX <br/>
                      </p>
                    </Col>
                    <Col className='align-right'>
                      <h4>Oct 11, 7:00 PM</h4>
                    </Col>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                   <Row>               
                      <Col lg={6}>
                        <p>
                          Producto 1, 5 kg <br/>
                          Producto 2, 2 L, <br/>
                          Producto 3, 2 órdenes
                        </p>
                        <h4>Total:</h4>
                      </Col>
                      <Col lg={6} className='align-right'>
                        <p>
                          $ 700.00 <br/>
                          $ 600.00 <br/>
                          $ 100.00 <br/>
                        </p>
                        <h4>$ 1,400.00</h4>
                      </Col>
                      <Col lg={12} className='align-right'>
                        <Button variant='primary' size='sm'>Editar pedido</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};
