import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {DEL} from '../redux/actions/action'

 const Cart = () => {

    const state = useSelector((state)=>state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item)=>{
        dispatch(DEL(item))
    }

    const cartItems=(cartItem)=>{
        return(

        <div className="px-4 my-5 bg-light rounded-3" key={cartItems.id}>
        <div className="container py-4">
            <button onClick={()=>handleClose(cartItem)} className='btn-close float-end' aria-label='close'></button>
            <div className="row justify-content-center">
            <div className="col-md-4">
            <img src={cartItem.img} alt={cartItem.title} height="200px" width="250px"/>

            </div>
                <div className="col md-4">
                    <h3>{cartItem.title}</h3>
                    <p className='lead fw-bold'> Rs {cartItem.price}</p>
                </div>
            </div>
            </div>

            </div>
        )
    }

    const emptyCart=()=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3" >
                <div className=" container py-4">
                <div className="row">
                <h3 className='py-3 text-center'>Your cart is Empty</h3>

                </div>

                </div>
            </div>
        )
    }
    const button=()=>{
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary w-25 mb-5 mx-auto">Proceed to Checkout</NavLink>
                </div>
            </div>
        )
    }
  return (
    <>
   
      {state.length===0 && emptyCart()}  
    
{state.length !==0 && state.map(cartItems)}
{state.length !==0 && button()}

    </>
  )
}

export default Cart
