import React from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'




 const CartBtn = () => {
  const state = useSelector((state)=>state.addItem)
  // console.log(getdata)
  
  return (
    <div>
    <NavLink  to="/cart" className="btn btn-outline-primary"> <span className=' fa fa-shopping-cart '></span>Cart ({state.length})</NavLink>


    </div>
  )
}

export default CartBtn
