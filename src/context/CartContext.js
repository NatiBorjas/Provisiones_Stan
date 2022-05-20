import { createContext, useContext, useState } from "react"

const CartContext = createContext({
    carrito: [],
    agregarAlCarrito: () => {}
});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ( {children} ) => {
    
    const [carrito, setCarrito] = useState([]);
    const itemEnCarrito = (id) => {
        return carrito.some((item) => item.id === id)
    }

    const agregarAlCarrito = (item, cantidad) => {
        console.log({item, cantidad});
        setCarrito([{...item, cantidad}])
        // if (itemEnCarrito(item.id)) {
        //     return setCarrito(
        //         carrito.map((prod) => prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod)
        //     )
        // }
        // setCarrito([...carrito, {...item, cantidad}]);

    };
    console.log("Carrito", carrito);

    const eliminarDelCarrito = (item) => {
        const nuevoCarrito = [...carrito];
        const productoEnCarrito = itemEnCarrito(item.id);
        const eliminarProducto = nuevoCarrito.filter((producto) => producto.id !== item.id);

        if (!productoEnCarrito) {
            return "En carrito"
        }
        setCarrito(eliminarProducto)
    }
    
    const eliminarCarrito = () => setCarrito([]);

    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, eliminarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}