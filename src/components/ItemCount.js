import { useState } from "react";
import { UseAppContext } from "../context/AppContext";
import { useCartContext } from "../context/CartContext";


export const ItemCount = ({onAdd, id}) => {

    const [cont, setCont]= useState(0);

    const { agregarAlCarrito } = useCartContext();
    const { productos } = UseAppContext ();


    const agregarItem = () =>{
        setCont(cont + 1)
    };

    const eliminarItem = () => {
        if (cont > 0) {
            setCont(cont - 1)
        }
    };

    const handleClick = (id, cantidad) => {
        const findItem = productos.find((producto) => producto.id === id)
        if (!findItem) {
            alert("No se encuentra")
            return
        }

        agregarAlCarrito(findItem.id, cantidad);
        onAdd(cont)
    }

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
                <button className="btn" onClick={() => handleClick(id, cont)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}