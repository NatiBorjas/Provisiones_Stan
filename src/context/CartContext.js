import { createContext, useContext, useState } from "react"

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ( {children} ) => {
    
    const [carrito, setCarrito] = useState([]);

    const itemEnCarrito = (id) => {
        return carrito.some((item) => item.id === id);
    }

    const agregarAlCarrito = (item, cant) => {
        const itemAlCarrito = {...item, cant: cant};
        
        if (itemEnCarrito(item.id)) {
                const nuevoCarrito = [...carrito];
                const encontrado = nuevoCarrito.findIndex((prod) => prod.id === item.id )
                nuevoCarrito[encontrado].cant += cant;
                setCarrito(nuevoCarrito);
                } else {
                setCarrito((carritoExistente) => [...carrito, itemAlCarrito]);}
    };
    console.log("Carrito", carrito);

    const eliminarDelCarrito = (id) => {
        const eliminarProducto = carrito.filter((prod) => prod.id !== id);
        setCarrito(eliminarProducto)
    }
    
    const eliminarCarrito = () => setCarrito([]);

    const totalCarrito = () => {
        let total = 0;
        carrito.forEach((element) => {
            total = total + element.precio * element.cant
        });
        return total;
    }

    const cantidadCarrito = () => {
        let total = 0;
        carrito.forEach((element) => {
            total = total + element.cant
        });
        return total;
    }


    return (
        <CartContext.Provider value={{
            carrito, 
            agregarAlCarrito, 
            eliminarDelCarrito, 
            eliminarCarrito,
            totalCarrito,
            cantidadCarrito}}>
            {children}
        </CartContext.Provider>
    )
}