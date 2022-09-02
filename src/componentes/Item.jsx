import React from 'react'

const Item = ({product, i}) => {
  return (
    <div>
      <p>{product.id}</p>
      <div key={i}>
      <img src={product.img} alt={product.name}/>
      </div>
      <p>{product.detail}</p>
      <p>{product.precio}</p>
      </div>
    
  )
}

export default Item