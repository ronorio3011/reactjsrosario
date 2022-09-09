import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { customFetch } from './customFetch'
import ItemList from './ItemList'
import productos from './productos'




const ItemListContainer = ({saludo, greeting}) => {

  //console.log(productos)  
  //console.log(productos[1].id)  
  //const{saludo}= props se usa cuando son pocas
  
    const [listProducts, setListProducts]= useState([])
    const  [loading, setLoading]= useState(false)
    const{categoriaId}= useParams()


    console.log('categorias:', categoriaId)
    


useEffect (()=>{
   setLoading(true)
   productos
   .then((res)=> {
    if(categoriaId){
      setListProducts(res.filter((item)=> item.category === categoriaId))

    }else{
      setListProducts(res)
    }
   })
   .catch((error)=> console.log(error))
   .finally(()=> setLoading(false))

}, [categoriaId]) 
 
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