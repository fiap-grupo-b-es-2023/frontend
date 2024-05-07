
import {useContext} from "react";
import {CartContext} from "../../CartContext.jsx";
import { Container, Button, Col, Row } from 'react-bootstrap';
import Table from "../../components/Table/Table.jsx";
import { IoIosArrowBack } from 'react-icons/io';
import style from './CartPage.module.css';


export default function CartPage({setCurrentPage}) {
    const {totalPrice} = useContext(CartContext);

    return (
        <Container
            fluid
            className={`fullScreenContainer d-flex flex-column justify-content-center align-items-center`}
        >
            <Col sm={8}>
                <Button className={`${style.backButton} mb-3 px-0`} onClick={() => setCurrentPage("SearchPage")}>
                    <IoIosArrowBack className="me-2" /> Voltar
                </Button>
                <h1 className={style.cartTitle}>Carrinho</h1>
                <Table />
                <Row className="mt-5">
                    <Col className="fs-2">
                        <p className="mb-0">Total</p>
                        <p >R$ {totalPrice.toFixed(2)}</p>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        <Button >PAGAMENTO</Button>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}





