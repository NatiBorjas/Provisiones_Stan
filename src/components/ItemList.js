import { useEffect, useState } from "react";
import { ItemCard } from "./Item"
import { provisiones } from "../data/provisiones";
import '../styles/ItemList.css';

export const ItemList = () => {

  const [productos, setProvisiones] = useState([]);

  useEffect(() => {
    const getProvisiones = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(provisiones);
      }, 5000);
    });

    getProvisiones.then((result) => {
      setProvisiones(result);
    }).catch(err => {
      console.log("Hubo un error");
    });
  }, []);


  return (
    <div className="card-container">
      {productos.map(producto => <ItemCard key={producto.id} provisiones={producto} /> )}
    </div>
  );
}