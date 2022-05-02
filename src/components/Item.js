import '../styles/Item.css';
export const ItemCard = ( { prod } ) => {
  
  return (
      <div className="item-card">
        {/* <img src={prod.img}/> */}
        <p>{prod.nombre}</p>
        <p>$ {prod.precio}d</p>
        <button className='btn'>Comprar</button>
      </div>
  )
}