/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'

function NavBoost() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to= '/'>Ecommerce</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/categoria/Pollo'>Pollo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/categoria/Congelados'>Congelados</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/categoria/Arrollados'>Arrollados</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/categoria/Papas'>Papas</NavLink>
        </li>
      </ul>
        <CartWidget counter={10}/>
    </div>
  </div>
</nav>
  )
}

export default NavBoost