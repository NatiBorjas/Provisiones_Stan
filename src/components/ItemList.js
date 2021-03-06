import { ItemCard } from "./ItemCard"
import '../styles/ItemList.css';

export const ItemList = ({ productos, loading }) => {

  return (
    <div className="card-container">
      {productos.map(producto => 
      <ItemCard key={producto.id} prod={producto} />)}
    </div>
  );
}