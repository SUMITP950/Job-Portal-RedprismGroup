import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";


export default function RegistrationBasic() {
  useEffect(() => {
    document.title = "Registration";
  }, []);
 

  return (
    <>
      
      <div class="col-md-12 font-weight-bold text-center h1">
            Create an Account!
          </div>
          <div class="col-md-12 text-center">( As a Job Sheeker )</div>
          <div class="col-md-12 text-center">
            It only takes a couple of minutes to get started!
          </div>
          <div class="col-md-12 text-center">
            <span
              style={{ borderRadius: 10 + "px", backgroundColor: "#fde9f2" }}
              class="px-3 "
            >
              It's free
            </span>
          </div>
          <div class="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
            <span className="midil">Please fill up more details</span>
          </div>
          <div class="container">
            <form>
              <div class="form-row d-flex align-items-center justify-content-center">
                <div class="col-md-8 mb-3">
                  <label for="validationDefault01">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault01"
                    placeholder="First name"
                   
                    required
                  />
                </div>
                <div class="col-md-8 mb-3">
                  <label for="validationDefault02">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    placeholder="Last name"
                   
                    required
                  />
                </div>
                <div class="col-md-8 mb-3">
                  <label for="Email">Email</label>
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control"
                      id="validationDefaultUsername"
                      placeholder="abc@example.com"
                      aria-describedby="inputGroupPrepend2"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-8 mb-3">
                  <label for="phone">Mob No.</label>
                  <div class="input-group">
                    <input
                      type="number"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Your Mobile No."
                      aria-describedby="inputGroupPrepend2"
                      required
                     
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <label>Gender:</label>
                  <br />
                   {" "}
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">Male</label>
                   {" "}
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                    <label for="css">Female</label>
                   {" "}
                  <input
                    type="radio"
                    id="javascript"
                    name="fav_language"
                    value="JavaScript"
                  />
                  <label for="javascript">Prefer Not to Say</label>
                </div>
              </div>
              <div class="form-row d-flex align-items-center justify-content-center">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault03">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault03"
                    placeholder="City"
                    required
                  />
                </div>
                <div class="col-md-2 mb-3">
                  <label for="validationDefault04">State</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault04"
                    placeholder="State"
                    required
                  />
                </div>
                <div class="col-md-2 mb-3">
                  <label for="validationDefault05">Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault05"
                    placeholder="Zip"
                    required
                  />
                </div>
              </div>
              <div class="form-group d-flex align-items-center justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center">
              <Link
              to="/RegistrationVarify"
              class="btn btn-pink mb-5"
              type="submit"
            >
              Submit form
            </Link>
              </div>
            </form>
          </div>    
       
    </>
  );
}