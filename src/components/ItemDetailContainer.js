import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getDoc, getFirestore, doc} from "firebase/firestore";
import { stan } from "./NavBar";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemDetail = doc(db, "provisiones", `${itemId}`);

        getDoc(itemDetail).then(snapshot => {
            if(snapshot.exists) {
                setItem(snapshot.data());
                setLoading(false);
            }
        })
    }, [itemId]);
    

    return (
        <>
            {loading ?         
                <div className="loader">
                    <img src={stan} alt="stan" />
                    <p>Cargando...</p>
                </div>
                :
                <div className="detail-container">
                    <ItemDetail key={item.id} item={item}/>
                </div>
            }
        </>
    )
}
export default ItemDetailContainer