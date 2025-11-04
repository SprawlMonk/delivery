import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    

    const isInCart = (itemId) => {
        const flag = cartItems.some((item) => item.id === itemId);
        return flag;

    };

    const addCartItem = (item, quantity) => {

        const flag =isInCart(item.id);

        if (flag){
                const modifiedItemList =  cartItems.map ((cartItem) => {
                    if(cartItem.id === item.id){
                        return {...cartItem, quantity: quantity + cartItem.quantity}}})
                
                setCartItems([...modifiedItemList]);
                }
        else{
            const cartItem = {
                ...item,
                quantity: quantity
            }
            setCartItems([...cartItems, cartItem])}
    }
    
      
    const deleteCartItem = (itemId) => {
        const newCartItemArray = cartItems.filter((item) => item.id !== itemId);
        setCartItems(newCartItemArray);
    };

    const cartItemsQuantity = ( ) => {
        const cartItemsQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        return Number(cartItemsQuantity);
        
    };

    const totalAmount = ( ) => {
        let sum = 0;
        cartItems.map((item) => {
            sum += item.quantity * item.price;
        });
        return sum;
        
    }
    
        

    const deleteCart = () => {
        setCartItems([]);
    };

    
    console.log(cartItems);

          
    return (
        <CartContext.Provider value={{cartItems,  addCartItem, deleteCartItem, deleteCart, cartItemsQuantity, totalAmount}}>
            {children}
        </CartContext.Provider>
    );
}

export {CartProvider, CartContext};



