import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../styles/FormularioCompra.css";
import { useCartContext } from "../context/CartContext";


const FormularioCompra = ( ) => {

    const { vaciarCarrito, carrito} = useCartContext();
    const itemsCarrito = carrito.map(i => ({nombre: i.nombre, precio: i.precio, cant: i.cant }));

    const [ user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const saveToFirestore = async (pedidos) =>{
        const db = getFirestore();
        const {id} = await addDoc(collection(db, "pedidos"), pedidos)
        console.log(id);
    }

    function onInputChange(e){
        const target = e.target;
        const value = target.value;
        const inpId = target.id
        setUser({ ...user, [inpId]: value });
    };

    function onSubmit(e) {
        // e.preventDefault();
        saveToFirestore({user, itemsCarrito});
        vaciarCarrito();
    };


    return (
        <>
            <div className="resumen-container">
            {carrito.map(prod => {
                return (
                    <div className="resumen-item item-card" key={prod.id}>
                        <div>
                            <img className="img-detail" src={prod.img} alt={prod.nombre} />
                        </div>
                        <div>
                            <h1>{prod.nombre}</h1>
                        </div>
                        <div>
                            <p>Cantidad: {prod.cant}</p>
                        </div>
                        <div>
                            <p>Total D$: {prod.cant * prod.precio}</p>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            <div id="form-container">
                <form id="form-compra" onSubmit={onSubmit}>
                    <fieldset>
                        <label id="name-label">Nombre y Apellido <input id="name" type="text" placeholder="Ingresa tu nombre completo"  onChange={event => onInputChange(event)} required/></label>
                        <label id="phone-label">Telefono <input id="phone" type="text" placeholder="Ingresa tu n° de telefono" onChange={event => onInputChange(event)} required/></label>
                        <label id="email-label">E-mail <input id="email" type="email" placeholder="Ingresa tu email" onChange={event => onInputChange(event)} required/></label>
                    </fieldset>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </>        
        //         <fieldset>
        //             <p>Agrega comentarios, consultas, saludos...</p>
        //             <textarea rows="4" cols="30" placeholder="We're having a real moment here..."></textarea>
        //         </fieldset>
    )
}
export default FormularioCompra