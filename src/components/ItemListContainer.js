import React from 'react';
import { useEffect, useState, } from "react";
import { provisiones } from "../data/provisiones"; 
import { ItemList } from './ItemList';
import '../styles/ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProvisiones] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        const getProvisiones = new Promise((resolve) => {
            setTimeout(() => {
                resolve(provisiones);
            }, 1000);
        });

        getProvisiones.then((result) => {
            if (!categoryId) { 
            return setProvisiones(result);
            } else {setProvisiones(provisiones.filter(i => i.categoria == categoryId))
            ;}
        })
    }, [categoryId]);



    return (
        <>
            <div className="item-container">
                <ItemList productos={productos}/>
            </div>
        </>
    )
}
export default ItemListContainer