import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../styles/Input.css";
import { useCartContext } from "../context/CartContext";


const FormularioCompra = ( { orden } ) => {
    const { vaciarCarrito } = useCartContext();
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
        e.preventDefault();
        saveToFirestore({user, orden});
        vaciarCarrito();
    };


    return (
        <div id="form-container">
            <form id="form-compra" onSubmit={onSubmit}>
                <fieldset>
                    <label id="name-label">Nombre y Apellido <input id="name" type="text" placeholder="Ingresa tu nombre completo"  onChange={event => onInputChange(event)}/></label>
                    <label id="phone-label">Telefono <input id="phone" type="text" placeholder="Ingresa tu n° de telefono" onChange={event => onInputChange(event)}/></label>
                    <label id="email-label">E-mail <input id="email" type="email" placeholder="Ingresa tu email" onChange={event => onInputChange(event)}/></label>
                </fieldset>
                <input type="submit" value="Enviar"/>
            </form>
        </div>        
        // <div id="form-container">
        //     <form id="form-compra">
        //         <fieldset>
        //             <label id="name-label">Nombre y Apellido <input id="name" type="text" placeholder="Ingresa tu nombre completo" /></label>
        //             <label id="phone-label">Telefono <input id="phone" type="text" placeholder="Ingresa tu n° de telefono" /></label>
        //             <label id="email-label">E-mail <input id="email" type="email" placeholder="Ingresa tu email" /></label>
        //         </fieldset>
        //         <fieldset>
        //             <p>Agrega comentarios, consultas, saludos...</p>
        //             <textarea rows="4" cols="30" placeholder="We're having a real moment here..."></textarea>
        //         </fieldset>
        //         <input type="submit" value="Enviar" />
        //     </form>
        // </div>
    )
}
export default FormularioCompra