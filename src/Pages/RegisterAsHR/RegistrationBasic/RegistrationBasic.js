import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function RegistrationBasicHR() {
  useEffect(() => {
    document.title = "Registration";
  }, []);

  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Email, SetEmail] = useState("");
  const [mobile, SetMobile] = useState("");
  const [Gender, SetGender] = useState("");
  const [City, SetCity] = useState("");
  const [State, SetState] = useState("");
  const [Zip, SetZip] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.replace("./RegistrationCreate");

    // Perform form validation
    if (FirstName.trim() === "") {
      // First name is required
      alert("Please enter your first name");
      return;
    }

    if (LastName.trim() === "") {
      // Last name is required
      alert("Please enter your last name");
      return;
    }

    if (Email.trim() === "") {
      // Email is required
      alert("Please enter your email");
      return;
    }

    if (mobile.trim() === "") {
      // Mobile number is required
      alert("Please enter your mobile number");
      return;
    }

    if (Gender === "") {
      // Gender is required
      alert("Please select your gender");
      return;
    }

    if (City.trim() === "") {
      // City is required
      alert("Please enter your city");
      return;
    }

    if (State.trim() === "") {
      // State is required
      alert("Please enter your state");
      return;
    }

    if (Zip.trim() === "") {
      // Zip code is required
      alert("Please enter your zip code");
      return;
    }

    // All validation checks passed, proceed with form submission
    const data = {
      FirstName,
      LastName,
      Email,
      mobile,
      Gender,
      City,
      State,
      Zip,
    };

    Axios.post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="col-md-12 font-weight-bold text-center h1">
        Create an Account!
      </div>
      <div className="col-md-12 text-center">( As a HR )</div>
      <div className="col-md-12 text-center">
        It only takes a couple of minutes to get started!
      </div>
      <div className="col-md-12 text-center">
        <span
          style={{ borderRadius: 10 + "px", backgroundColor: "#fde9f2" }}
          className="px-3 "
        >
          It's free
        </span>
      </div>
      <div className="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
        <span className="midil">Please fill up more details</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-row d-flex align-items-center justify-content-center">
            <div className="col-md-8 mb-3">
              <label htmlFor="validationDefault01">First name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="First name"
                onChange={(e) => SetFirstName(e.target.value)}
                value={FirstName}
                required
              />
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="validationDefault02">Last name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last name"
                onChange={(e) => SetLastName(e.target.value)}
                value={LastName}
                required
              />
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="Email">Email</label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  id="validationDefaultUsername"
                  placeholder="abc@example.com"
                  aria-describedby="inputGroupPrepend2"
                  onChange={(e) => SetEmail(e.target.value)}
                  value={Email}
                  required
                />
              </div>
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="phone">Mob No.</label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Your Mobile No."
                  aria-describedby="inputGroupPrepend2"
                  onChange={(e) => SetMobile(e.target.value)}
                  value={mobile}
                  required
                />
              </div>
            </div>
            <div className="col-md-8">
              <b>Gender:</b>
              <div className="mb-4">
                <br />
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  onChange={(e) => SetGender(e.target.value)}
                />
                <label htmlFor="male">Male</label>{" "}
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  onChange={(e) => SetGender(e.target.value)}
                />
                <label htmlFor="female">Female</label>{" "}
                <input
                  type="radio"
                  id="preferNotToSay"
                  name="gender"
                  value="Prefer Not to Say"
                  onChange={(e) => SetGender(e.target.value)}
                />
                <label htmlFor="preferNotToSay">Prefer Not to Say</label>
              </div>
            </div>
          </div>
          <div className="form-row d-flex align-items-center justify-content-center">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault03">City</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                placeholder="City"
                onChange={(e) => SetCity(e.target.value)}
                value={City}
                required
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="validationDefault04">State</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault04"
                placeholder="State"
                onChange={(e) => SetState(e.target.value)}
                value={State}
                required={true}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="validationDefault05">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                placeholder="Zip"
                onChange={(e) => SetZip(e.target.value)}
                value={Zip}
                required
              />
            </div>
          </div>
          <div className="form-group d-flex align-items-center justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
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
    </>
  );
}
