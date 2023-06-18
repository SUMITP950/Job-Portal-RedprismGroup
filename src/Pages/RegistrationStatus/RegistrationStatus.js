import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function RegistrationStatus() {
  useEffect(() => {
    document.title = "Registration";
  }, []);

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    if (event.target.value === "No") {
      document.getElementById("dis1").disabled = "true";
      document.getElementById("dis2").disabled = "true";
    }
  };
  const data = {};

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 dn ">
            <div class="pindicator">
              <div class="bullet current ">
                {" "}
                <Link to="/RegistrationBasic">
                  <span class="icon1 tns90">1</span>
                </Link>
              </div>
              <div class="bullet current">
                <Link to="/RegistrationVarify">
                  <span class="icon1 tns90">2</span>
                </Link>
              </div>
              <div class="bullet next current">
                <Link to="/RegistrationCreate">
                  <span class="icon1 tns90">3</span>
                </Link>
              </div>
              <div class="bullet current">
                <Link to="/RegistrationTechSkills">
                  <span class="icon1 tns90">4</span>
                </Link>
              </div>
              <div class="bullet current">
                <Link to="/RegistrationStatus">
                  <span class="icon1 tns90">5</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div class="col-md-12 font-weight-bold text-center h1">
              Create an Account!
            </div>

            <div class="col-md-12 text-center">( As a Job Seeker )</div>

            <div class="col-md-12 text-center">
              It only takes a couple of minutes to get started!
            </div>

            <div class="col-md-12 text-center">
              <span class="px-3 py-1 backcolor">It's free</span>
            </div>

            <div class="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
              <b className="midil backcolor px-3 py-1">
                Please Verify yourself
              </b>
            </div>

            <div class="container">
              <form>
                <div class="form-row d-flex align-items-center justify-content-center">
                  <div class="col-md-8 mb-3">
                    <label for="text">Looking For Job</label>

                    <select
                      class="form-control form-control-lg"
                      onChange={handleChange}
                      value={message}
                    >
                      <option>Yes</option>

                      <option>No</option>
                    </select>
                  </div>

                  <div class="col-md-8 mb-3 ">
                    <label for="text">Notice Period</label>

                    <select class="form-control form-control-lg" id="dis1">
                      <option>Yes</option>

                      <option>No</option>
                    </select>
                  </div>

                  <div class="col-md-8 mb-3 ">
                    <label for="text">Immediate Joiner</label>

                    <select class="form-control form-control-lg" id="dis2">
                      <option>Yes</option>

                      <option>No</option>
                    </select>
                  </div>

                  <div
                    className="col-md-8"
                    style={{ justifyContent: "space-around", display: "flex" }}
                  >
                    <i
                      className="feather-sun"
                      style={{ color: "#000", border: "2px solid pink" }}
                    ></i>
                    <i
                      className="feather-umbrella"
                      style={{ color: "#000", border: "2px solid pink" }}
                    ></i>
                    <i
                      className="feather-sunrise"
                      style={{ color: "#000", border: "2px solid pink" }}
                    ></i>
                    <i
                      className="feather-sunrise"
                      style={{ color: "#000", border: "2px solid pink" }}
                    ></i>
                  </div>
                </div>

                <div class="d-flex align-items-center justify-content-center mt-5">
                  <Link
                    to="/"
                    class="btn btn-pink mb-5 px-5"
                    style={{ fontWeight: "600", fontSize: "16px" }}
                    type="submit"
                  >
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
