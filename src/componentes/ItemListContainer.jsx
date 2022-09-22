import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
//import { customFetch } from './customFetch'
import ItemList from './ItemList'
//import productos from './productos'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'



export default function ItemListContainer(){

  const [products, setProducts] = useState([])
  const {categoriaId} =useParams(); 

  useEffect(()=>{
    const db = getFirestore()
  // si estoy en home o ruta sin parametro definido
  if (categoriaId == undefined){
    const miCollection = collection(db, "products");
    getDocs(miCollection).then((data) =>{
        const auxProducts = data.docs.map((product) => ({  ...product.data(), id: product.id,
     }));
     setProducts(auxProducts);
  }); 
  }
  else{
    const miCollection = query (collection(db, "products"), where("categoriaId", "==", categoriaId));
    getDocs(miCollection).then((data) =>{
        const auxProducts = data.docs.map((product) => ({  ...product.data(), id: product.id,
     }));
     setProducts(auxProducts);
  }); 
  }
  }, []);

  return <div> <ItemList products={products}/> </div>;
}