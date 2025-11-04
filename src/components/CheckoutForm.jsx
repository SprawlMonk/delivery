import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import db from '../db/db';
import { collection, addDoc } from "firebase/firestore";
import CartItems from "./CartItems";
import {Container, Row, Col} from "react-bootstrap";


const CheckoutForm = () => {
  const { cartItems, totalAmount, deleteCart } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    emailPrimary: "",
    emailSecondary: "",
  });

  const saveOrder = (e) => {
    e.preventDefault();
    
    const data = {
      buyer: { ...formData },
      items: [...cartItems],
      total: totalAmount(),
    };

    const uploadOrder = (data) => {
      const orderRef = collection(db, "orders");
      addDoc(orderRef, data)
        .then((ans) => {
        setIdOrder(ans.id);
        })
        .finally(()=>{
          deleteCart()
        })
    };

    uploadOrder(data);
  };

  const saveInputData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="checkout">
      { idOrder ? 
      
      (
        
        
          <div className="IdOrder">
            <p>Orden correcta!</p>
            <p>{`Order ID: ${idOrder}`}</p>
          </div>
    
    ) : ( 
      <>
      <CartItems />
      <Container>
               
                  <form className="form-checkout" onSubmit={saveOrder}>
          <Row>
            <Col>
              <label>Nombre</label>
              <input type="text" name="name" value={formData.name} onChange={saveInputData} />
            </Col>
            <Col>
              <label>Apellido</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={saveInputData} />
            </Col>
            <Col>
              <label>Teléfono</label>
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={saveInputData} />
          </Col>
          </Row>
          <Row>
            <Col>
              <label>Email</label>
              <input type="text" name="emailPrimary" value={formData.emailPrimary} onChange={saveInputData} />
            </Col>
            <Col>
              <label>Confirm Email</label>
              <input type="text" name="emailSecondary" value={formData.emailSecondary} onChange={saveInputData} />
            </Col>
            <Col>
              <button className="sendOrder" type="submit">Enviar orden</button>
            </Col>
          </Row>
        </form>
      </Container>
      </>
      )
    }
    </div>
  );
};

export default CheckoutForm;
