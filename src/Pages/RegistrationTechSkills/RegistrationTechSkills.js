import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";


export default function RegistrationTechSkills() {
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
      <div class="bullet current future">
        <Link to="/RegistrationCreate"><span class="icon1 tns90">3</span></Link>
        
      </div>
      <div class="bullet future current"><Link to="/RegistrationTechSkills">
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

<b className="midil backcolor px-3 py-1">Please Enter Your Technical Skills</b>

</div>

<div class="container">

<form>

  <div class="form-row d-flex align-items-center justify-content-center">

    <div class="col-md-8 mb-3">

      <label for="text">Current Company</label>

      <select class="form-control form-control-lg">

        <option>--Select--</option>
        <option>Cognizant</option>
        <option>CTS</option>
        <option>Wipro</option>
        <option>Tech Mahindra</option>

      </select>

    </div>

    <div class="col-md-8 mb-3">

      <label for="text">Technical Skills</label>

      <select class="form-control form-control-lg">
      <option>--Select--</option>
        <option>JAVA</option>
        <option>Python</option>
        <option>JavaScript</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>React JS</option>
        <option>React Netive</option>

      </select>

    </div>

    <div class="col-md-8 mb-3">

      <label for="text">Experience In Year</label>

      <select class="form-control form-control-lg">
      <option>--Select--</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>

      </select>

    </div>

    <div className="col-md-8">

      

    </div>

  </div>

  <div class="d-flex align-items-center justify-content-center mt-5">

  <Link to="/RegistrationStatus"> <button class="btn btn-pink mb-5" type="submit">

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