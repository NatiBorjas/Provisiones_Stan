import { useState } from "react";
import { Link} from "react-router-dom"
import "../styles/ItemDetail.css";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ( {item} ) => {
    
    const [finalizar, setFinalizar] = useState(false)

    const onAdd = (cont) => {
        setFinalizar(true);
        console.log(cont);
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
                        Finalizar Compra
                    </button>
                </Link>
                ) : (
                <ItemCount cantidad={item.cantidad} onAdd={onAdd}></ItemCount>) 
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
