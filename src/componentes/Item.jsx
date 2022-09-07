import React from 'react'
import '../App.css';


const Item = ({product, i}) => {

  return (
    <div style={{padding:'5rem', margin:'3rem'}}>
      <p>{product.id}</p>
      <div key={i}>
      <img style={{width:'300px'}}src={product.img} alt={product.name}/>
      </div>
      <p>{product.detail}</p>
      <p>{product.precio}</p>
      <> <button onClick={()=> console.log(product)}> Agregar al carrito</button></>
      </div>
    
    
  )
}

export default Item