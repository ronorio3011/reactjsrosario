import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = (productDetail) => {
    const {name, description, price, stock, img}= productDetail
    const onAdd = ()=> {
        console.log('compraste')
    }
  return (
    <div style={{display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h2>Detalle de: {name} </h2>
        <img src={img} aLt={name} style={{width: '5rem'}}/>
        <p>{description}</p>
        <p>${price}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </div>
        
  )
}

export default ItemDetail