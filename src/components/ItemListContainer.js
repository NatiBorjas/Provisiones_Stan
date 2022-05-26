import React from 'react';
import { useEffect, useState, } from "react";
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import '../styles/ItemListContainer.css';



const ItemListContainer = () => {

    const [productos, setProvisiones] = useState([]);
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProvisiones();
    }, [categoryId]);
    
    const getProvisiones = () =>{

        const db = getFirestore();
        const provisiones = collection(db, "provisiones");
        getDocs(provisiones)
            .then(snapshot => {
                setLoading(false)
                if (snapshot.size > 0) {
                    const provisionesData = snapshot.docs.map(doc => ({ "id": doc.id, ...doc.data()}));
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
                <ItemList productos={productos} loading={loading}/>
            </div>
        </>
    )
}
export default ItemListContainer