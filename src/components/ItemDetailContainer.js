import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { provisiones } from "../data/provisiones";
import { ItemDetail } from "./ItemDetail";
import { collection, getDocs, getFirestore, doc, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemDetail = collection(db, "provisiones");

        const q = query(itemDetail, where("id", "==", `${itemId}`));

        getDocs(q).then(snapshot => {
            if(snapshot > 0) {
                const detail = snapshot.docs.map(doc => ({"id": doc.id, ... doc.data()}));
                setItem(detail)
                console.log(snapshot);
            }
        })


        // getDocs(itemDetail).then(snapshot => {
        //     if (!itemId) {
        //         console.log("No se encuentra");
        //     } 
        //     // const q = query(itemDetail, where("id", "==", `${itemId}`))
        //     const detail = snapshot.docs.map(doc => ({"id": doc.id , ...doc.data()}));
        //         console.log(detail);
        //         return setItem(detail.map(i => ({"id" : `${itemId}`})))
        //         console.log(item);
        // })
        // getItemDetail()
    }, [itemId]);
    
    console.log(item);
    // const getItemDetail = () => {
    //     const db = getFirestore();
    //     const itemDetail = doc(db, `${itemId}`);

    //     getDoc(itemDetail).then(snapshot => {
    //             if(snapshot.exists) {
    //                 setItem(shapshot.data())
    //             }
                
    //         })
    //     // const q = query(itemDetails, where("id", "==", true ))
    //     // getDocs(q).then(snapshot => {
    //     //     if (snapshot > 0) {
    //     //         setItem(snapshot.docs.map(doc => doc.id == itemId))
    //     //         console.log(snapshot.docs.map(doc => doc.id == itemId));
    //     //         const detail = snapshot.docs.filter(i => i.id == itemId)
    //     //         if (itemId) {
    //     //             return setItem(detail)
    //     //         }
    //     //     }
    //     // })
    // };


    return (
        <div className="detail-container">
            <ItemDetail key={item.id} item={item}/>
        </div>
    )
}
export default ItemDetailContainer