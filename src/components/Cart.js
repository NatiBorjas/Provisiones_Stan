import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import '../styles/Cart.css';


export const Cart = () => {

    const { carrito, totalCarrito, eliminarDelCarrito, vaciarCarrito } = useCartContext();

    return (
        <>
            {carrito.length === 0 ? 
                (
                <div className="carrito-vacio">
                <div className="carrito-vacio">
                    <p>Carrito vacio</p>
                </div>
                <div className="carrito-vacio">
                    <Link to={'/'}><button className="btn">Vamos a llenarlo...</button></Link>
                </div>
                </div>                
                ) : 
                (
                <div className="carrito-container">
                    <div className="carrito">
                        {carrito.map(item => {
                            return (
                                <div className="item-EnCarrito item-card" key={item.id}>
                                    <div className="prod-carrito">
                                        <img className="img-detail" src={item.img} alt={item.nombre} />
                                    </div>
                                    <div className="divisor"></div>
                                    <div className="prod-carrito">
                                        <h1>{item.nombre}</h1>
                                    </div>
                                    <div className="divisor"></div>
                                    <div className="prod-carrito">
                                        <p>Cantidad: {item.cant}</p>
                                    </div>
                                    <div className="divisor"></div>
                                    <div className="prod-carrito">
                                        <p>Precio D$: {item.precio}</p>
                                    </div>
                                    <div className="divisor"></div>
                                    <div className="prod-carrito">
                                        <p>Total D$: {item.cant * item.precio}</p>
                                    </div>
                                    <div className="divisor"></div>
                                    <div className="">
                                        <div className="eliminar-item">
                                            <button className="btn"onClick={()=>eliminarDelCarrito(item.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                </div> 
                                )
                            })
                        }
                        <div className="contenedor-total item-card">
                            <div className="total-carrito">
                                <div>
                                    <h1>Total Carrito D$: {totalCarrito()}</h1>
                                </div>
                                <div className="btn-finalizar">
                                    <Link to={'/checkout'}>
                                        <button className="btn">Finalizar Compra</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="vaciar-carrito">
                                <div >
                                    <button className="btn" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )                
            }
        </>
    )
}