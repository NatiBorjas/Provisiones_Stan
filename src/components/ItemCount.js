import { useState } from "react";

export const ItemCount = ({onAdd}) => {

    const [cont, setCont]= useState(0);


    const agregarItem = () =>{
        setCont(cont + 1)
    };

    const eliminarItem = () => {
        if (cont > 0) {
            setCont(cont - 1)
        }
    };

    return (
        <div className="contador">
            <div>
                <button className="btn btn-remove" onClick={eliminarItem}>
                    -
                </button>
                <span>{cont}</span>
                <button className="btn btn-add" onClick={agregarItem}>
                    +
                </button>
            </div>
            <div>
                <button className="btn btn-addToCart" onClick={() => onAdd(cont)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}