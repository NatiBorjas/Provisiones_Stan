import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { provisiones } from "../data/provisiones";
import { ItemDetail } from "./ItemDetail";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        const getItemDetail = new Promise((resolve) => {
            setTimeout(() => {
                resolve(provisiones.find( i => i.id == itemId ))
            }, 1000)
        });
            
            getItemDetail.then((result) => {
                setItem(result);
            })
        }, [itemId]);
        

    return (
        <div className="detail-container">
            <ItemDetail key={item.id} item={item}/>
        </div>
    )
}
export default ItemDetailContainer