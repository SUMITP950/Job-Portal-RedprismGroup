import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegistrationStatusHR() {
  useEffect(() => {
    document.title = "Registration";
  }, []);

  const [message, setMessage] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [immediateJoiner, setImmediateJoiner] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    if (event.target.value === "No") {
      setNoticePeriod("");
      setImmediateJoiner("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        message,
        noticePeriod,
        immediateJoiner,
      });
      console.log(response.data); // Handle the response data
    } catch (error) {
      console.error(error); // Handle the error
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 dn">
            <div className="pindicator">
              <div className="bullet current ">
                <Link to="/RegistrationBasic">
                  <span className="icon1 tns90">1</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationVarify">
                  <span className="icon1 tns90">2</span>
                </Link>
              </div>
              <div className="bullet next current">
                <Link to="/RegistrationCreate">
                  <span className="icon1 tns90">3</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationTechSkills">
                  <span className="icon1 tns90">4</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationStatus">
                  <span className="icon1 tns90">5</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="col-md-12 font-weight-bold text-center h1">
              Create an Account!
            </div>
            <div className="col-md-12 text-center">( As a HR )</div>
            <div className="col-md-12 text-center">
              It only takes a couple of minutes to get started!
            </div>
            <div className="col-md-12 text-center">
              <span className="px-3 py-1 backcolor">It's free</span>
            </div>
            <div className="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
              <b className="midil backcolor px-3 py-1">
                Please Verify yourself
              </b>
            </div>
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div className="form-row d-flex align-items-center justify-content-center">
                  <div className="col-md-8 mb-3">
                    <label htmlFor="lookingJob">Looking For Job</label>
                    <select
                      className="form-control form-control-lg"
                      id="lookingJob"
                      onChange={handleChange}
                      value={message}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="noticePeriod">Notice Period</label>
                    <select
                      className="form-control form-control-lg"
                      id="noticePeriod"
                      value={noticePeriod}
                      onChange={(e) => setNoticePeriod(e.target.value)}
                      disabled={message === "No"}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="immediateJoiner">Immediate Joiner</label>
                    <select
                      className="form-control form-control-lg"
                      id="immediateJoiner"
                      value={immediateJoiner}
                      onChange={(e) => setImmediateJoiner(e.target.value)}
                      disabled={message === "No"}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="col-md-8 d-flex justify-content-center">
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
                <div className="d-flex align-items-center justify-content-center mt-5">
                  <button
                    className="btn btn-pink mb-5 px-5"
                    style={{ fontWeight: "600", fontSize: "16px" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
