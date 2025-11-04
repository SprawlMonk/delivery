import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemDetail from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import '/src/App.css'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'; 
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
 
  return (
    <div className='root'>
    <CartProvider> 
      <Router>
      <NavBar/> 
        <Routes>
          <Route path = "/" element = {<ItemListContainer />}/>
          <Route path = "/category/:categoryId" element = {<ItemListContainer />} />
          <Route path = "/item/:itemId" element = {<ItemDetail />} />
          <Route path = "/cart" element = {<Cart />}/> 
          <Route path = "/checkout" element = {<CheckoutForm />}/>         
        </Routes>
      </Router>
    </CartProvider>
    </div>
    
  );
};

export default App;
