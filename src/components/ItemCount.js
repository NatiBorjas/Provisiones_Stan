import { useState } from "react";

export const ItemCount = ({cantidad, onAdd}) => {

    const [cont, setCont]= useState(0);

    const agregarItem = () =>{
        setCont(cont + 1)
    };

    const eliminarItem = () => {
        setCont(cont - 1)
    };

    return (
        <div>
            <button className="btn" onClick={eliminarItem}>
                -
            </button>
            <span>{cont}</span>
            <button className="btn" onClick={agregarItem}>
                +
            </button>
            <div>
                <button className="btn" onClick={() => {onAdd(cont)}}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}