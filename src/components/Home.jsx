import React from 'react'
import Product from './Product'
import About from './About'
import Contact from './Contact'

 const Home = () => {
  return (
    <div>

<div id="carouselExampleControls" className="carousel slide container-fluid" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="\assests\images\banner1.png" className="d-block w-100 " alt="samsung" height="500px" />
    </div>
    
   
    <div className="carousel-item">
      <img src="https://i0.wp.com/sparrowsnews.com/wp-content/uploads/2020/09/j3s-3%E5%90%881%E7%BB%84%E5%90%882-108-1024x683_23181789221851291875..jpg" className="d-block w-100 border-5" alt="realme" height="400px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
</div>
<div className="container py-5">
<Product/>
</div>
<About/>
<Contact/>

    </div>
  )
}

export default Home
