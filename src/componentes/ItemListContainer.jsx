import React from 'react'

const ItemListContainer = ({saludo, greeting}) => {
   // console.log(props)  
   //const{saludo}= props se usa cuando son pocas

  return (
    <div>
        <p>{saludo}</p>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer