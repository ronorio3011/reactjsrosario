import React, { useState, useEffect } from 'react'

function ItemCount() {
 //let numero = 10
 const [contador, setContador] = useState(1)
 const [cambioCategoria, setCambioCategoria] = useState(false)
 const increase = () =>{
    setContador (contador + 1)
 }
  const decrease = () =>{
    setContador (contador -1)
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
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <br />
        <button onClick={AgregarAlCarrito}> Agregar al Carrito</button>
        
    </div>
  )
}

export default ItemCount