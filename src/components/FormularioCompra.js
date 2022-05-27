import { useCartContext } from "../context/CartContext";
import { Input } from "./Input";


const FormularioCompra = () => {
    const { carrito, totalCarrito} = useCartContext();

    // const itemsCarrito = carrito.map()

    const saveCarrito = () => {
        const user = {
            name: 'Juana',
            phone: '454554545',
            email: 'juana@gmail.com',
        };

        const orden = {
            cliente: user,
            items: [{
                id: '',
                nombre: '',
                precio: '',
            }],
            total: totalCarrito(),
        }
        console.log("Orden de compra", orden);
        
    }

    return (
        <>
            <div>
                <Input/>
            </div>
            <div>
                <button className="btn" onClick={saveCarrito}>
                    Realizar pago
                </button>
            </div>
        </>
    )
}
export default FormularioCompra