import React, {useEffect, useState} from 'react'
import { customFetch } from './customFetch'
import ItemList from './ItemList'
import productos from './productos'
const ItemListContainer = ({saludo, greeting}) => {

  //console.log(productos)  
  //console.log(productos[1].id)  
  //const{saludo}= props se usa cuando son pocas
  
    const [listProducts, setListProducts]= useState([])


useEffect (()=>{
   customFetch(productos)
   .then(data=> setListProducts(data))
}, []) 
 
console.log(listProducts)


  return (
    <>
    <ItemList listProducts={listProducts}/>

    <div>
        <p>{saludo}</p>
        <p>{greeting}</p>
    </div>
    </>
  )
}

export default ItemListContainer