import {useContext, useEffect, useState} from 'react';
import {Modal, Button, Row, Col, Image} from 'react-bootstrap';
import {CartContext} from "../../CartContext.jsx";
import style from './ProductDetailsPage.module.css';

export default function ProductDetailsPage({product, closeModal}) {
    const [quantity, setQuantity] = useState(1); // Supondo que você queira gerenciar a quantidade
    const {cart, addToCart, updateQuantity } = useContext(CartContext);    // Funções para incrementar e decrementar a quantidade
    const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decrementQuantity = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));


    const handleAddToCart = () => {
        const productInCart = cart.find(item => item.code === product.code);
        if (productInCart) {
            // Se o produto já está no carrinho, atualizamos a quantidade
            updateQuantity(product.code, quantity);
        } else {
            // Se o produto não está no carrinho, adicionamos ao carrinho
            addToCart(product, quantity);
        }
        closeModal();
    };

    useEffect(() => {
        const productInCart = cart.find(item => item.code === product.code);
        if (productInCart) {
            setQuantity(productInCart.quantity);
        }
    }, [cart, product]);
    
    return (
        <Modal
            show={true}
            onHide={closeModal}
            centered
            contentClassName={style.modalContent}
            size="lg"
        >
            <Modal.Body>
                <Row className="justify-content-end">
                    <Col md={4}>
                        <Image src="https://via.placeholder.com/200" thumbnail fluid/>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={6}>
                                <p className="fw-bold mb-2 ">Nome do Produto</p>
                                <p>{product.name}</p>
                            </Col>
                            <Col md={6}>
                                <p className="fw-bold mb-2">Marca</p>
                                <p>{product.brand}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p className="fw-bold mb-2">Linha</p>
                                <p>{product.line}</p>
                            </Col>
                            <Col md={6}>
                                <p className="fw-bold mb-2">Família</p>
                                <p>{product.family}</p>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <p className="fw-bold mb-2">Código</p>
                                <p>{product.code}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col md={4} className="text-center">
                        <p>R$ {(product.price * quantity).toFixed(2)}</p>
                        <Row className="justify-content-center align-items-center">
                            <Col xs="auto">
                                <Button variant="outline-secondary" onClick={decrementQuantity}>-</Button>
                            </Col>
                            <Col xs="auto" className="d-flex justify-content-center align-items-center">
                                <span className={style.quantity}>{quantity}</span>
                            </Col>
                            <Col xs="auto">
                                <Button className={style.addButton} onClick={incrementQuantity}>+</Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className={`${style.modalFooter} d-flex justify-content-around gap-2`}>
                <Button variant="link text-white" onClick={() => closeModal()}>
                    Cancelar
                </Button>
                <Button className={style.addButton} onClick={handleAddToCart} >
              
                    Adicionar
                </Button>
            </Modal.Footer>
        </Modal>

    );
}
