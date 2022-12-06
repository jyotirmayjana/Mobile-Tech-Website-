import React from 'react'

 const Contact = () => {
  return (
    <div>
    <div className="container mb-2">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className='fw-bolder'>Have Some Question?</h1>
          <hr />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
      <div className="col-md-5 py-4">
        <img src="https://ghumakkads.in/wp-content/uploads/contact-us.png" alt="" />
      </div>
      <div className="col-md-6 d-flex justify-content-center py-4">

     <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Enter Your Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Full Name'/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text" placeholder='abc@gmail.com'>We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write Something Here'></textarea>
</div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-outline-primary"><span className='fa fa-message'></span> Send Message</button>
</form>

      </div>

      </div>
    </div>


    </div>
  )
}

export default Contact
