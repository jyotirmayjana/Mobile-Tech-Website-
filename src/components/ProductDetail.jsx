import React from 'react'
import {  useParams } from 'react-router-dom'
import { useState } from 'react'
import DATA from '../Data'
import { useDispatch } from 'react-redux'
import {ADD,DEL} from '../redux/actions/action'







 const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const proid =useParams()
    const proDetail = DATA.filter(x=>x.id===proid.id)
    const product = proDetail[0]
    console.log(product)

   const dispatch = useDispatch()

    const handleCart = (product)=>{
        if(cartBtn==="Add to Cart"){
            dispatch(ADD(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(DEL(product))
           

            setCartBtn("Add to Cart")
        }

    }
  return (
    <div>
    <div className="container">
        <div className="row py-3 my-5">
            <div className="col-md-6 d-flex justify-content-center p">
                <img src={product.img} alt={product.title} height="400px"/>
            </div>
            <div className="col-md-6 py-3 d-flex flex-column justify-content-center ">
                <h1 className='fw-bold py-2'>{product.title}</h1>
                <hr />
                <h2 className='py-2'>Rs {product.price}</h2>
                <p className='my-3 '>{product.desc}</p>
                <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-4" >{cartBtn}</button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default ProductDetail
