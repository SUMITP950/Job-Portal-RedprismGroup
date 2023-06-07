import React, { useEffect, useState } from "react";




import { Link } from "react-router-dom";




export default function RegistrationCreate() {

  useEffect(() => {

    document.title = "Registration";

  }, []);




  return (

    <>
<div className="container">
                <div className="row">
                  <div className="col-md-4 dn "><div class="pindicator">
      <div class="bullet current ">  <Link to="/RegistrationBasic"> 
       <span class="icon1 tns90">1</span></Link>   

        
      </div>
      <div class="bullet current"><Link to="/RegistrationVarify">
         <span class="icon1 tns90" >2</span></Link>
        
      </div>
      <div class="bullet next current">
        <Link to="/RegistrationCreate"><span class="icon1 tns90">3</span></Link>
        
      </div>
      <div class="bullet future"><Link to="/RegistrationTechSkills">
        <span class="icon1 tns90">4</span></Link>
        
      </div>
      <div class="bullet future">
        <Link to="/RegistrationStatus"><span class="icon1 tns90">5</span></Link> 
        
      </div>
      
    </div>
                  </div>
                  <div className="col-md-8"><div class="col-md-12 font-weight-bold text-center h1">

Create an Account!

</div>

<div class="col-md-12 text-center">( As a Job Sheeker )</div>

<div class="col-md-12 text-center">

It only takes a couple of minutes to get started!

</div>

<div class="col-md-12 text-center">

<span class="px-3 py-1 backcolor">It's free</span>

</div>

<div class="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">

<b className="midil backcolor px-3 py-1">Please Verify yourself</b>

</div>

<div class="container">

<form>

  <div class="form-row d-flex align-items-center justify-content-center">

    <div class="col-md-8 mb-3">

      <label for="text">User Name</label>

      <div class="input-group">

        <input

          type="text"

          class="form-control"

          id="validationDefaultUsername"

          placeholder="Enter Your User Name"

          aria-describedby="inputGroupPrepend2"

          required

        />

      </div>

    </div>

    <div class="col-md-8 mb-3">

      <label for="Email">Password</label>

      <div class="input-group">

        <input

          type="email"

          class="form-control"

          id="validationDefaultUsername"

          placeholder="Create Your Password"

          aria-describedby="inputGroupPrepend2"

          required

        />

      </div>

    </div>

  </div>

  <div class="d-flex align-items-center justify-content-center mt-5">

   <Link to="/RegistrationTechSkills"><button class="btn btn-pink mb-5" type="submit">

      Continue

    </button></Link> 

  </div>

</form>

</div>
                 
                  </div>
                </div>
              </div>





      

    </>

  );

}