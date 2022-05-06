import React from 'react';
import { useEffect, useState, } from "react";
import { provisiones } from "../data/provisiones"; 
import { ItemList } from './ItemList';
import '../styles/ItemListContainer.css';

const ItemListContainer = () => {

    const [productos, setProvisiones] = useState([]);

    useEffect(() => {
        const getProvisiones = new Promise((resolve) => {
            setTimeout(() => {
                resolve(provisiones);
            }, 1000);
        });

        getProvisiones.then((result) => {
        setProvisiones(result);
        })
    }, []);



    return (
        <>
            <div className="item-container">
                <ItemList productos={productos}/>
            </div>
        </>
    )
}
export default ItemListContainer