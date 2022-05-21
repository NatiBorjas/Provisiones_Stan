import React from 'react';
import '../styles/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackXmark } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
    const { cantidadCarrito } = useCartContext();

    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faSackXmark} size="2x" color="black" shake/>
            <div className="qty-display">{cantidadCarrito()}</div>
        </div>
    )
}
export default CartWidget