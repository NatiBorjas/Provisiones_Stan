import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { provisiones } from "../data/provisiones";
import {  } from "../styles/ItemDetail.css";

const ItemDetail = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const getItemDetail = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve( provisiones.find( i => i.id == itemId ))
                }, 1000)
            });
            
            getItemDetail.then((result) => {
                setItem(result);
            // }).catch((err)=> {
            //     console.log('Arrgghh....ese item no existe', err);
            });
        }, [itemId]);
        
        
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
export default ItemDetail