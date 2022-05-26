import { ItemCard } from "./ItemCard"
import '../styles/ItemList.css';
import { stan } from "./NavBar";

export const ItemList = ({ productos, loading }) => {

  return (
    <>
      { loading ? 
        <div className="loader">
          <img src={stan} alt="stan" />
          <p>Cargando...</p>
        </div>
          :
        <div className="card-container">
          {productos.map(producto => 
          <ItemCard key={producto.id} prod={producto} />)}
        </div>
      }
    </>
  );
}