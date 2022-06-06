import { useState } from "react";
import { Link} from "react-router-dom"
import { useCartContext } from "../context/CartContext";
import "../styles/ItemDetail.css";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ( {item} ) => {
    
    const [finalizar, setFinalizar] = useState(false)
    const { agregarAlCarrito } = useCartContext();

    const onAdd = (cont) => {

        if (cont >= 1 ) {
        setFinalizar(true);
        agregarAlCarrito(item, cont)            
        } else {
            alert("Ingrese una cantidad")
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
