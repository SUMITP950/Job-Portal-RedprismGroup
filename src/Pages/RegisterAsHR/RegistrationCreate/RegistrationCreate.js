import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function RegistrationCreateHR() {
  useEffect(() => {
    document.title = "Registration";
  }, []);

  const navigate = useNavigate();

  // form validation

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required("*Required")
        .matches(/^[A-Za-z]+$/, "This field  must be a letter")
        .min(3, "Minimum 3 characters length")
        .max(10, "Maximum 10 characters length"),
      password: yup
        .string()
        .required("*Required")
        .matches(/[^\w]/, "One Special character Required")
        .matches(/[0-9]/, "One Number Required")
        .min(3, "Minimum 3 characters length")
        .max(10, "Maximum 10 characters length"),
    }),
    onSubmit: (values) => {
      // console.log(values); // In this section data send to backend
      axios
      .post("http://localhost:3030/users_registration_hr", values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
      navigate("/RegistrationTechSkillsHR");
    },
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 dn">
            <div className="pindicator">
              <div className="bullet current ">
                <Link to="/RegistrationCreate" onClick={formik.handleSubmit}>
                  <span className="icon1 tns90">1</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationCreate" onClick={formik.handleSubmit}>
                  <span className="icon1 tns90">2</span>
                </Link>
              </div>
              <div className="bullet next current">
                <Link>
                  <span className="icon1 tns90">3</span>
                </Link>
              </div>
              <div className="bullet future">
                <Link to="/RegistrationCreate" onClick={formik.handleSubmit}>
                  <span className="icon1 tns90">4</span>
                </Link>
              </div>
              <div className="bullet future">
                <Link to="/RegistrationCreate" onClick={formik.handleSubmit}>
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
              <form onSubmit={formik.handleSubmit}>
                <div className="form-row d-flex align-items-center justify-content-center">
                  <div className="col-md-8 mb-3">
                    <label htmlFor="text">User Name</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="validationDefaultUsername"
                      placeholder="Enter Your User Name"
                      aria-describedby="inputGroupPrepend2"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                    {formik.errors.username && (
                      <em style={{ color: "red" }}>{formik.errors.username}</em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="validationDefaultPassword"
                      placeholder="Create Your Password"
                      aria-describedby="inputGroupPrepend2"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.errors.password && (
                      <em style={{ color: "red" }}>{formik.errors.password}</em>
                    )}
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
