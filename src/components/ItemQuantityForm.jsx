import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ItemQuantityForm = ({ item }) => { // Use destructuring to access itemId

  const { addCartItem } = useContext(CartContext);
   
  const handleSubmit = (e) => {
      e.preventDefault();
      const quantity = Number(e.target.quantity.value); // Access the select element's value by its name attribute
      addCartItem(item, quantity);    
  } 

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Select  name="quantity"> {/* Add name attribute */}
        <option>Cantidad a ordenar</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
      <Button type='submit'>Agregar al carrito</Button>
    </Form>
  );
}

export default ItemQuantityForm;
