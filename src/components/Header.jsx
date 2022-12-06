import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import Cart from './buttons/CartBtn'

 const Header = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded ">
  <div className="container-fluid py-2">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="products">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>
        
        
        
      </ul>
      <NavLink className="navbar-brand fw-bold fs-4 mx-auto ms-4" to="/">Mobile Tech</NavLink>
      <Login/>
    <Signup/>
    <Cart/>
    </div>
    
    
  </div>
</nav>
    </div>
  )
}

export default Header
