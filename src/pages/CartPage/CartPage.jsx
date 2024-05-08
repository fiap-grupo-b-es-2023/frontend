import {useContext} from "react";
import {CartContext} from "../../CartContext.jsx";
import { Button, Col, Row} from 'react-bootstrap';
import Table from "../../components/Table/Table.jsx";
import {IoIosArrowBack} from 'react-icons/io';
import style from './CartPage.module.css';


export default function CartPage({setCurrentPage}) {
    const {cart,totalPrice} = useContext(CartContext);

    return (
        <div className={"fullScreenContainer"}>

            <Col sm={8} style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <Button className={`${style.backButton} mb-3 px-0`} onClick={() => setCurrentPage("SearchPage")}>
                    <IoIosArrowBack className="me-2"/> Voltar
                </Button>
                <h1 className={style.cartTitle}>Carrinho</h1>
                <div style={{overflow: 'auto'}}>
                    <Table/>
                </div>
                <div  className={"mt-2"}>
                    <Row className="mt-5">
                        <Col className="fs-2">
                            <p className="mb-0">Total</p>
                            <p>R$ {totalPrice.toFixed(2)}</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                            <Button className={style.paymentButton} disabled={cart.length === 0} onClick={ () => setCurrentPage("CheckoutPage")}>PAGAMENTO</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>
    );
}





