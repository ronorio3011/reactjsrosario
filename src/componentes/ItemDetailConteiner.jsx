import React, { useState } from 'react'
import ItemDetail from './ItemDetail'
import productos from './productos'

const ItemDetailConteiner = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState(true)

   
    console.log('detalle', productDetail)
  return (
    <div>
        {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail }/>}
    </div>
  )
}

export default ItemDetailConteiner