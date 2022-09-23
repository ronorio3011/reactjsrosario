import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import productos from './productos'

const ItemDetailContainer = () => {
   const [productDetail, setProductDetail]= useState({})
   const [loading, setLoading]= useState(true)
   const{id}=useParams()

   useEffect(() => {
     productos
       .then((res)=> setProductDetail(res.find((item)=> item.id === 'id')))
       .catch((error)=> console.log(error))
       .finally(()=> setLoading(false))
   }, [id])
    
   console.log('detalle', productDetail)
 return (
   <div>
       {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail }/>}
   </div>
 )
}

export default ItemDetailContainer