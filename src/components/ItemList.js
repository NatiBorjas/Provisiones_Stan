import { useEffect, useState } from "react";
import { Item } from "./Item"
import { provisiones } from "../data/provisiones";

export const ItemList = () => {
  
  const [items, setProvisiones] = useState([]);

  useEffect(() => {
    const getProvisiones = new Promise((resolve, reject) => { 
      
      setTimeout( () => {
        resolve(provisiones)
      }, 5000);
    });
    
    getProvisiones.then( (result) => {
      console.log("se completo la promesa", result);
      setProvisiones(result);
    }).catch(err => {
      console.log("Hubo un error");
    })
  }, []);


  return (
    <div>
      {items.map(item => item.nombre)}
      {/* <Item></Item> */}
    </div>
  )
}