import { createContext, useContext, useState } from "react"

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const enCarrito = (id) => carrito.find((prod) => prod.id == id);

    const agregarAlCarrito = (prod, cantidad) => {
        const nuevoCarrito = [...carrito];
        const productoEnCarrito = enCarrito(prod.id);

        if (productoEnCarrito) {
            setCarrito(nuevoCarrito.find((producto) => producto.id == productoEnCarrito.id));
            return
        }
        cantidad = prod.cantidad + 1;
        setCarrito([...nuevoCarrito, cantidad])
        console.log(carrito);
    };

    const eliminarDelCarrito = (prod) => {
        const nuevoCarrito = [...carrito];
        const productoEnCarrito = enCarrito(prod.id);

        if (!productoEnCarrito) {
            return
        }
        const eliminarProducto = nuevoCarrito.filter((producto) => producto.id !== prod.id);
        setCarrito(eliminarProducto)

    }
    
    const eliminarCarrito = () => setCarrito([]);

    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, eliminarCarrito, setCarrito}}>
            {children}
        </CartContext.Provider>
    )
}