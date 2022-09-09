import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
  const {id,img,name,description,price,stock}=product
  const navegar= useNavigate()

  return (
    <div style={{padding:'5rem', margin:'3rem'}}>
      <img style={{width:'300px'}}src={img} alt={name}/>
      <div className="card" style={{witdh:'20rem', margin:'.5rem'}}>
         <p className="cardtext">{name}</p>
         <p className="cardtext">{description}</p>
         <p className="cardtext">${price}</p>
         <p className="cardtext">stock{stock}</p>
      
      <> <button onClick={()=> console.log(product)}> Agregar al carrito</button></>
      </div>
      <> <button className='btn btn-primary' onClick={()=>navegar(`/detalle/${id}`)}>Ver más</button></>
      </div>

  )
}

export default Item