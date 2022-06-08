import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../styles/FormularioCompra.css";
import { useCartContext } from "../context/CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const FormularioCompra = () => {

    const { vaciarCarrito, carrito} = useCartContext();
    
    const [ user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const saveToFirestore = async (pedidos) =>{
        const db = getFirestore();
        const {id} = await addDoc(collection(db, "pedidos"), pedidos)
        const MySwal = withReactContent(Swal)
        console.log(id);
        MySwal.fire({
            title: <strong>Compra exitosa!</strong>,
            html:   `Tu pedido fue generado con la orden:` +
                    `<br><strong><em>${id}</em></strong>`,
            color: "#00FFFF",
            background: "#000000",
            confirmButtonColor: "#8B008B",
            width: "70em",
            }).then(() => {
            return MySwal.fire({
                title: <strong>Gracias por tu compra</strong>,
                text: "De regalo con tu pedido te envio un pañuelo de cortesía. Stan",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/provisiones-stan.appspot.com/o/pa%C3%B1uelo.png?alt=media&token=d80408f3-a74f-4428-be71-9cc1bd9bcbec",
                imageAlt: "Pañueko cortesia Stan",
                color: "#00FFFF",
                background: "#000000",
                confirmButtonColor: "#8B008B",
                confirmButtonText: <a href="/">Vuelve pronto!</a>,
                width: "70em",
                allowOutsideClick: false,                 
            })
        })
    }

    function onInputChange(e){
        const target = e.target;
        const value = target.value;
        const inpId = target.id
        setUser({ ...user, [inpId]: value });
    };

    function onSubmit(e) {
        e.preventDefault();
        if (carrito.length === 0 ) {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: <strong>Nada por aquí...</strong>,
                text: "El carrito se encuentra vacío. Llenalo primero para poder crear el pedido",
                color: "#00FFFF",
                background: "#000000",
                confirmButtonColor: "#8B008B",
                width: "64em",
            })
        } else {
            const itemsCarrito = carrito.map(i => ({nombre: i.nombre, precio: i.precio, cant: i.cant }));
            saveToFirestore({user, itemsCarrito});
            vaciarCarrito();
        }
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
                        <label id="phone-label">Telefono <input id="phone" type="text" maxLength={11} pattern="[0-9]+" placeholder="Ingresa tu n° de telefono" onChange={event => onInputChange(event)} required/></label>
                        <label id="email-label">E-mail <input id="email" type="email" placeholder="Ingresa tu email" onChange={event => onInputChange(event)} required/></label>
                    </fieldset>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </>        
    )
}
export default FormularioCompra