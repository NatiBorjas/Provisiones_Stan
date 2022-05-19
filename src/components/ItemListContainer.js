import React from 'react';
import { useEffect, useState, } from "react";
import { ItemList } from './ItemList';
import '../styles/ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {

    const [productos, setProvisiones] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        getProvisiones()
    }, [categoryId]);
    
    const getProvisiones = () =>{
        const db = getFirestore();
        const provisiones = collection(db, "provisiones");
        getDocs(provisiones)
            .then(snapshot => {
                if (snapshot.size > 0) {
                    const provisionesData = snapshot.docs.map(doc => ({ "doc-id": doc.id, ...doc.data()}));
                    if (!categoryId) { 
                        return setProvisiones(provisionesData);
                        } else {
                            setProvisiones(provisionesData.filter(i => i.categoria === categoryId))
                        }
                }
            })
    };


    return (
        <>
            <div className="item-container">
                <ItemList productos={productos}/>
            </div>
        </>
    )
}
export default ItemListContainer