import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
// import axios from "axios";

export default function RegistrationStatus() {
  useEffect(() => {
    document.title = "Registration";
  }, []);
  const navigate = useNavigate();

   // form validation

   const formik = useFormik({
    initialValues: {
      lookingForJob: "",
      noticePeriod: "",
      immediateJoiner: "",
    },
    validationSchema: yup.object({
      lookingForJob: yup.string().required("*Required"),
      noticePeriod: yup.string().required("*Required"),
      immediateJoiner: yup.string().required("*Required"),
    }),
    onSubmit: (values) => {
      console.log(values); // In this section data send to backend
      navigate("/Signin");
    },
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 dn">
            <div className="pindicator">
              <div className="bullet current ">
                <Link to="/RegistrationStatus"
                  onClick={formik.handleSubmit}>
                  <span className="icon1 tns90">1</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationStatus"
                  onClick={formik.handleSubmit}>
                  <span className="icon1 tns90">2</span>
                </Link>
              </div>
              <div className="bullet next current">
                <Link to="/RegistrationStatus"
                  onClick={formik.handleSubmit}>
                  <span className="icon1 tns90">3</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationStatus"
                  onClick={formik.handleSubmit}>
                  <span className="icon1 tns90">4</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link>
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
              <form onSubmit={formik.handleSubmit}>
                <div className="form-row d-flex align-items-center justify-content-center">
                  <div className="col-md-8 mb-3">
                    <label htmlFor="lookingJob">Looking For Job</label>
                    <select
                      className="form-control form-control-lg"
                      name="lookingForJob"
                      id="lookingJob"
                      onChange={formik.handleChange}
                      value={formik.values.lookingForJob}
                    >
                      <option>--Select--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik.errors.lookingForJob && (
                      <em style={{ color: "red" }}>
                        {formik.errors.lookingForJob}
                      </em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="noticePeriod">Notice Period</label>
                    <select
                      className="form-control form-control-lg"
                      name="noticePeriod"
                      id="noticePeriod"
                      onChange={formik.handleChange}
                      value={formik.values.noticePeriod}
                      disabled={formik.values.lookingForJob === "No"}
                    >
                      <option>--Select--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik.errors.noticePeriod && formik.values.lookingForJob==="Yes" && (
                      <em style={{ color: "red" }}>
                        {formik.errors.noticePeriod}
                      </em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="immediateJoiner">Immediate Joiner</label>
                    <select
                      className="form-control form-control-lg"
                      name="immediateJoiner"
                      id="immediateJoiner"
                      onChange={formik.handleChange}
                      value={formik.values.immediateJoiner}
                      disabled={formik.values.lookingForJob === "No"}
                    >
                      <option>--Select--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik.errors.immediateJoiner && formik.values.lookingForJob==="Yes" &&(
                      <em style={{ color: "red" }}>
                        {formik.errors.immediateJoiner}
                      </em>
                    )}
                  </div>
                  <div className="col-md-8 d-flex justify-content-center">
                    <i
                      className="feather-sun"
                      style={{ color: "#000", border: "2px solid pink"}}
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
