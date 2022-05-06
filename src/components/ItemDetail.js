import { Link} from "react-router-dom"
import "../styles/ItemDetail.css";

export const ItemDetail = ( {item} ) => {
    
    return (
        <>
        <div className="item-detail">
            <div className="detail">
                <h1><strong>{item.nombre}</strong></h1>
            </div>
            <div className="detail">
                <img className="img-detail" src={item.img} alt={item.nombre} />
            </div>
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
