  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import React from 'react';
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';


  export function FormPage() {

    const titulobranco = {
          color: 'white',

    }

    const titulovermelho ={
        color: 'red'
    }

    return (
      <Container className="mx-5">
        <Container className="position-absolute top-50 start-50 translate-middle">
          <Row>
            <Col className="text-center" xs={12}>
              <span style={titulobranco}>Identifique-se e tenha acesso a </span><span style={titulovermelho}>promoções exclusivas</span>
            </Col>
          </Row>
          <Row className="px-5 mx-5">
            <Col className="px-5 mx-5"> 
              <Form className="px-5 mx-5">
                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="E-mail" data-bs-theme="dark" />

                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicCPF">
                  <Form.Control type="cpf" placeholder="CPF" data-bs-theme="dark" />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicTelefone">
                  <Form.Control type="telefone" placeholder="Telefone" data-bs-theme="dark" />
                </Form.Group>
                
                <Button className="my-4 col-12" variant="success" type="submit">
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
          <Row> 
            <Col className="text-center">
              <Button className="my-0 col-12" variant="link">Pular essa etapa!</Button> 
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }



