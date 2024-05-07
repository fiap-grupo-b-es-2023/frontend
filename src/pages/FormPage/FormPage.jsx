import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './FormPage.module.css';

export default function FormPage() {


    return (
        <Container fluid   className={`fullScreenContainer d-flex flex-column justify-content-center align-items-center`}>
            <Col sm={8}  >
                <Row>
                    <Col className="text-start  fw-bold fs-4">
                        <span className="text-white">Identifique-se e tenha acesso a </span><span
                        className={style.redText}>promoções exclusivas</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="my-4" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="E-mail" className={style.formControl}
                                              data-bs-theme="dark"/>
                            </Form.Group>
                            <Form.Group class="my-4" controlId="formBasicCPF">
                                <Form.Control type="text" placeholder="CPF" className={style.formControl}
                                              data-bs-theme="dark"/>
                            </Form.Group>
                            <Form.Group class="my-4" controlId="formBasicTelefone">
                                <Form.Control type="text" placeholder="Telefone" className={style.formControl}
                                              data-bs-theme="dark"/>
                            </Form.Group>
                            <Button className={`${style.sendButton} my-4 col-12`} type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button className="my-0 col-12" variant="link text-white">Pular essa etapa!</Button>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}



