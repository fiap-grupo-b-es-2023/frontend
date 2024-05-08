import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './FormPage.module.css';

export default function FormPage({setCurrentPage}) {
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [isEmailValid, setEmailValid] = useState(false);
    const [isCpfValid, setCpfValid] = useState(false);
    const [isPhoneValid, setPhoneValid] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [cpfTouched, setCpfTouched] = useState(false);
    const [phoneTouched, setPhoneTouched] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailValid(emailRegex.test(event.target.value));
    };

    const handleCpfChange = (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
        setCpf(value);
        setCpfValid(cpfRegex.test(value));
    };

    const handlePhoneChange = (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        setPhone(value);
        setPhoneValid(phoneRegex.test(value));
    };

    const isFormValid = isEmailValid && isCpfValid && isPhoneValid;

    return (
        <div className={"fullScreenContainer"}>
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
                                              data-bs-theme="dark" value={email} onChange={handleEmailChange} onBlur={() => setEmailTouched(true)} isInvalid={emailTouched && !isEmailValid}/>
                                <Form.Control.Feedback type="invalid">Por favor, insira um email válido.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group class="my-4" controlId="formBasicCPF">
                                <Form.Control type="text" placeholder="CPF" className={style.formControl}
                                              data-bs-theme="dark" value={cpf} onChange={handleCpfChange} onBlur={() => setCpfTouched(true)} isInvalid={cpfTouched && !isCpfValid}/>
                                <Form.Control.Feedback type="invalid">Por favor, insira um CPF válido.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group class="my-4" controlId="formBasicTelefone">
                                <Form.Control type="text" placeholder="Telefone" className={style.formControl}
                                              data-bs-theme="dark" value={phone} onChange={handlePhoneChange} onBlur={() => setPhoneTouched(true)} isInvalid={phoneTouched && !isPhoneValid}/>
                                <Form.Control.Feedback type="invalid">Por favor, insira um telefone válido.</Form.Control.Feedback>
                            </Form.Group>
                            <Button className={`${style.sendButton} my-4 col-12`} type="submit" onClick={() => setCurrentPage("SearchPage")} disabled={!isFormValid}>
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button className="my-0 col-12" variant="link text-white" onClick={() => setCurrentPage("SearchPage")}>Pular essa etapa!</Button>
                    </Col>
                </Row>
            </Col>
        </div>
    );
}