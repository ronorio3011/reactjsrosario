import React, { useState, useEffect } from 'react'

function ItemCount() {
 //let stock = 5
 const [contador, setContador] = useState(1)
 const [cambioCategoria, setCambioCategoria] = useState(false)
 const sumar = () =>{
    if(contador < 10){
    setContador (contador + 1);
    }
 }
  const restar = () =>{
    if(contador > 0){
    setContador (contador -1)
    }
  }

   const  AgregarAlCarrito =() =>{
    setCambioCategoria(!cambioCategoria)
   }
  useEffect(() => {
   
    return () => {
      console.log("hola")
    }
  }, [cambioCategoria])
  
  return (
    <div>
        <h3>Contador</h3>
        <p> {contador}</p>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
        <br />
        <button onClick={AgregarAlCarrito}> Agregar al Carrito</button>
        
    </div>
  )
}

export default ItemCount