import React from 'react';
import '../styles/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackXmark } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    // const { carrito } = useCartContext();

    

        return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faSackXmark} size="2x" color="black" shake/>
            <div className="qty-display">0</div>
        </div>
    )
}
export default CartWidget