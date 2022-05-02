import { ItemCard } from "./Item"
import '../styles/ItemList.css';

export const ItemList = ({ productos }) => {

  return (
    <div className="card-container">
      {productos.map(producto => 
      <ItemCard key={producto.id} prod={producto} />)}
    </div>
  );
}