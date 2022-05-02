import '../styles/Item.css';
export const ItemCard = ( { productos } ) => {
  
  return (
      <div className="item-card" productos={productos}>
        {/* <img src={productos.img}/> */}
        <p>{productos.nombre}</p>
        <p>$ {productos.precio}d</p>
        <button className='btn'>Comprar</button>
      </div>
  )
}