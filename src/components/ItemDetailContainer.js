import { useState, useEffect } from "react";
import { provisiones } from "../data/provisiones";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [items, setitems] = useState([]);

    useEffect(() => {
        const getItems = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(provisiones);
            }, 2000);
        });

        getItems.then((result)=> {
            setitems(result);
            console.log('Promesa cumplida exitosamente', result)
        })
    
    }, []);
    


    return (
        <div className="detail-container">
            <ItemDetail item={items}/>
        </div>
    )
}
export default ItemDetailContainer