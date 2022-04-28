import '../styles/Item.css';
export const ItemCard = ( {provisiones} ) => {
  
  return (
      <div className="item-card">
        <img src={provisiones.img}/>
        <p>{provisiones.nombre}</p>
        <p>$ {provisiones.precio}d</p>
        <button className='btn'>Comprar</button>
      </div>
  )
}