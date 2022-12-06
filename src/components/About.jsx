import React from 'react'
import { NavLink } from 'react-router-dom'

 const About = () => {
  return (
    <div>

        <div className="container py-2">
          <div className="row">
            <div className="col-md-6">
              <h1 className='fw-bolder text-primary'>About Us</h1>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corrupti. Possimus blanditiis placeat quasi explicabo? Aperiam consectetur eius earum vero cupiditate dolores. Vel eius ad vero optio reiciendis quas cupiditate libero impedit excepturi, similique minima dolorem. Quae omnis doloremque, autem vel, iure officia quasi, perspiciatis temporibus amet totam similique odit nisi nemo impedit corrupti minus numquam. At soluta, vel impedit commodi aspernatur exercitationem facere temporibus cumque provident cum vero rerum quis nostrum possimus quos, culpa dignissimos ea ullam suscipit! Numquam, obcaecati assumenda consequuntur nemo velit et nesciunt in? Dolorum, velit modi? Unde nemo autem modi ad sit praesentium fugiat ipsum?</p>
              <NavLink to="/contact" className="btn btn-outline-primary ">Contact Us</NavLink>
            </div>
            <div className="col-md-6 d-flex justify-content-around">
              <img src="https://www.kindpng.com/picc/m/189-1891463_social-media-management-png-transparent-png.png"  height="300px" width="400px" alt="" />
            </div>

            
          </div>
        </div>
    </div>
  )
}

export default About
