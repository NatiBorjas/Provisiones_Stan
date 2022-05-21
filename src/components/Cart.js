import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";


export const Cart = () => {
    const { carrito, totalCarrito, eliminarDelCarrito, eliminarCarrito } = useCartContext();

    return (
        <div>
            {carrito.length === 0 ? (
                <div>
                    <p>Carrito vacio</p>
                    <Link to={'/'}><button className="btn">Volver</button></Link>
                </div>
                ) : ( 
                    <div className="itemEnCarrito">
                        <div>
                        {carrito.map(item => {
                            return (
                                <div className="itemEnCarrito" key={item.id}>
                                    <h1>{item.nombre}</h1>
                                    <p>Cantidad: {item.cant}</p>
                                    <p>Precio: $ {item.precio}</p>
                                    <p>Total: {item.precio * item.cant}</p>
                                    <button onClick={()=>eliminarDelCarrito(item.id)}>Eliminar</button>
                                </div> 
                            )
                        })}
                        </div>
                        <div>
                            <h1>Total del Carrito: $ {totalCarrito()}</h1>
                        </div>
                        <div>
                            <button onClick={() => eliminarCarrito()}>Vaciar Carrito</button>
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}