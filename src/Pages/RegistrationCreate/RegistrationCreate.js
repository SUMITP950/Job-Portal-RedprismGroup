import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegistrationCreate() {
  useEffect(() => {
    document.title = "Registration";
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.replace("./RegistrationTechSkills");

    // Create an object with the form data
    const formData = {
      username,
      password,
    };

    // Send a POST request to the server using Axios
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        // Handle the response
        console.log(response.data);
        // Redirect to the next page
        // You can use React Router's history object for navigation
        // history.push("/next-page");
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
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
              <div className="bullet future">
                <Link to="/RegistrationTechSkills">
                  <span className="icon1 tns90">4</span>
                </Link>
              </div>
              <div className="bullet future">
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
            <div className="col-md-12 text-center">( As a Job Seeker )</div>
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
                    <label htmlFor="text">User Name</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefaultUsername"
                        placeholder="Enter Your User Name"
                        aria-describedby="inputGroupPrepend2"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="password">Password</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        id="validationDefaultPassword"
                        placeholder="Create Your Password"
                        aria-describedby="inputGroupPrepend2"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button
                    className="btn btn-pink mb-5 px-5"
                    type="submit"
                    style={{ fontWeight: "600", fontSize: "16px" }}
                  >
                    Continue
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
