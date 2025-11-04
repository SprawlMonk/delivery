import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cartLogo from "./../assets/cartWidget.png"
const CartWidget = () => {

    const {cartItemsQuantity} = useContext(CartContext);


    return (
        <> 
            <p><img src={cartLogo} alt="cart logo" />{cartItemsQuantity()}</p>

        </>
    )
}

export default CartWidget;