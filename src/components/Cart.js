import { useCartContext } from "../context/CartContext";


export const Cart = () => {
    
    const { carrito, eliminarDelCarrito, eliminarCarrito } = useCartContext();

    const cart = carrito

    return (
        <div className="carrito-container">
            {cart === 0 ? (
                <p>Carrito vacio</p>
                ) : (
                <div className="itemEnCarrito" >
                    <p></p>
                    <p></p>
                    <p></p>
                </div>) 
            }
            
        </div>
    )
}