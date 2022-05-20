import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getDoc, getFirestore, doc} from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemDetail = doc(db, "provisiones", `${itemId}`);

        getDoc(itemDetail).then(snapshot => {
            if(snapshot.exists) {
                setItem(snapshot.data())
            }
        })
    }, [itemId]);
    

    return (
        <div className="detail-container">
            <ItemDetail key={item.id} item={item}/>
        </div>
    )
}
export default ItemDetailContainer