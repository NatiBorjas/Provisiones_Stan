import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import '../styles/Carrito.css';


export const Cart = () => {
    const { carrito, totalCarrito, eliminarDelCarrito, vaciarCarrito} = useCartContext();

    const itemsCarrito = carrito.map(i => ({nombre: i.nombre, precio: i.precio, cant: i.cant }))

    const saveCarrito = () => {
        const user = {
            name: 'Juana',
            phone: '454554545',
            email: 'juana@gmail.com',
        };
        const orden = {
            cliente: user,
            items: itemsCarrito,
            total: totalCarrito(),
        }
        console.log("Orden de compra", orden);
    }

    return (
        <div>
            {carrito.length === 0 ? (
                <div className="container-carrito-vacio">
                    <div className="carrito-vacio">
                        <p>Carrito vacio</p>
                    </div>
                    <div className="carrito-vacio">
                    <Link to={'/'}><button className="btn">Vamos a llenarlo...</button></Link>
                    </div>
                </div>
                ) : ( 
                    <div className="carrito-container">
                        <div className="carrito">
                        {carrito.map(item => {
                            return (
                                <div className="item-carrito item-card" key={item.id}>
                                    <div>
                                        <img className="img-detail" src={item.img} alt={item.nombre} />
                                    </div>
                                    <div>
                                        <h1>{item.nombre}</h1>
                                    </div>
                                    <div>
                                        <p>Cantidad: {item.cant}</p>
                                    </div>
                                    <div>
                                        <p>Precio D$: {item.precio}</p>
                                    </div>
                                    <div>
                                        <p>Total D$: {item.cant * item.precio}</p>
                                    </div>
                                    <div>
                                        <div className="eliminar-item">
                                            <button className="btn" onClick={()=>eliminarDelCarrito(item.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                </div> 
                            )
                        })}
                        <div className="contenedor-total item-card">
                            <div className="total-carrito">
                                <div>
                                    <h1>Total Carrito D$: {totalCarrito()}</h1>
                                </div>
                                <div className="btn-finalizar">
                                    <Link to={'/finalizarcompra'}>
                                        <button className="btn" onClick={saveCarrito}>Finalizar Compra</button>
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
        </div>
    )
}