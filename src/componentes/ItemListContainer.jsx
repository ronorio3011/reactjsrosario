import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import productos from './productos'
const ItemListContainer = ({saludo, greeting}) => {
   console.log(productos)  
   //const{saludo}= props se usa cuando son pocas
  
  return (
    <div>
        <p>{saludo}</p>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer