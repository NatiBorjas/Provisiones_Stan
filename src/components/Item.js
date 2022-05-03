import '../styles/Item.css';

export const ItemCard = ( { prod } ) => {
  
  return (
      <div className="item-card">
        <div className='img-card'>
          <img src={prod.img} alt={prod.nombre}/>
        </div>
        <div className='Item-info'>
          <p>{prod.nombre}</p>
          <p>$ {prod.precio}d</p>
          <button className='btn'>Comprar</button>
        </div>
      </div>
  )
}