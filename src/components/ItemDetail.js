import { useState } from "react";
import { Link} from "react-router-dom"
import { useCartContext } from "../context/CartContext";
import "../styles/ItemDetail.css";
import { ItemCount } from "./ItemCount";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ItemDetail = ( {item} ) => {
    
    const [finalizar, setFinalizar] = useState(false)
    const { agregarAlCarrito } = useCartContext();

    const onAdd = (cont) => {
        const MySwal = withReactContent(Swal)
        if (cont >= 1 ) {
        setFinalizar(true);
        agregarAlCarrito(item, cont)            
        } else {
            MySwal.fire({
                icon: 'error',
                title: <strong>Oops!</strong>,
                text: "Por favor ingresa una cantidad",
                color: "#00FFFF",
                background: "#000000",
                confirmButtonColor: "#8B008B",
                width: "64em",
            })
        }
    };

    return (
        <>
        <div className="item-detail">
            <div className="detail">
                <h1><strong>{item.nombre}</strong></h1>
            </div>
            <div className="detail">
                <img className="img-detail" src={item.img} alt={item.nombre} />
            </div>

            {finalizar ? (
                <Link to={'/cart'}>
                    <button className="btn">
                        Ir al carrito
                    </button>
                </Link>
                ) : (
                <ItemCount onAdd={onAdd}></ItemCount>) 
            }

            <div className="detail">
                <div className="detail-info">
                    <p>{item.info}</p>
                </div>
                <Link to={'/'}><button className="btn">Volver</button></Link>
            </div>
        </div>
        </>
    )
}
