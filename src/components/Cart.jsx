import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = () => {
    const { cartItems, totalAmount } = useContext(CartContext);

    totalAmount();

    

    if (cartItems.length === 0){
        return(
            <>
                <h1>El carrito esta vacio</h1>
                <Link to={"/"}>
                    <Button variant="primary">Continuar comprando</Button>
                </Link>
                
            </>
        );
    } else {

            return (
                <Container className="cartContainer">
                <div className="cart">
                    {cartItems.map((item) => (
                        <div className="cartItem" key={item.id}>
                        <Row>
                            <Col>
                                <p>{item.title}</p>
                            </Col>
                            <Col>
                                <img src={`/src/img/${item.thumbnail}`} alt="Alkaseltzer image" />
                            </Col>
                            <Col>
                                <p>{`Unidades: ${item.quantity}`}</p>
                            </Col>
                            <Col>
                                <p>{`Precio: ${item.price} `}</p>
                            </Col>
                        </Row>    
                        </div>
                    ))}
                    <Row>
                    <   Col>
                            <p>{`Total: ${totalAmount()}`}</p>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                        <Link to={"/checkout"}>
                            <Button variant="primary">Checkout</Button>
                        </Link>
                        </Col>
                    </Row>
                </div>
                </Container>
            );
        }    
} 

export default Cart;
