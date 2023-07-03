// include
import React,{useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export default function RegistrationVarify() {

  useEffect(() => {
    document.title = "Registration";
  }, []);

  const navigate = useNavigate();

  // form validation
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: yup.object({
      otp: yup
        .string()
        .required("*Required")
        .min(6, "Minimum 6 digits")
        .matches(/^[0-9]+$/, "This field  must be a number")
        .max(6, "Maximum 6 digits"),
    }),
    onSubmit: (values) => {
      console.log(values); // In this section data send to backend
      navigate("/RegistrationCreate");
    },
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 dn ">
            <div class="pindicator">
              <div class="bullet current ">
                {" "}
                <Link to="/RegistrationVarify">
                  <span class="icon1 tns90">1</span>
                </Link>
              </div>
              <div class="bullet current">
                <Link>
                  <span class="icon1 tns90">2</span>
                </Link>
              </div>
              <div class="bullet next future">
              <Link to="/RegistrationVarify" onClick={formik.handleSubmit}>
                <span
                  class="icon1 tns90"
                >
                  3
                </span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationVarify" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">4</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationVarify" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">5</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            {" "}
            <div class="col-md-12 font-weight-bold text-center h1">
              Create an Account!
            </div>
            <div class="col-md-12 text-center">( As a HR )</div>
            <div class="col-md-12 text-center">
              It only takes a couple of minutes to get started!
            </div>
            <div class="col-md-12 text-center">
              <span
                style={{ borderRadius: "10px", backgroundColor: "#fde9f2" }}
                class="px-3 "
              >
                It's free
              </span>
            </div>
            <div class="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
              <b className="midil">Please Verify yourself</b>
            </div>
            <div class="container">
              <form onSubmit={formik.handleSubmit}>
                <div class="form-row d-flex align-items-center justify-content-center">
                  <div class="col-md-8 mb-3">
                    <p className="d-flex h4 my-5 justify-content-center">OTP</p>
                    <input
                      type="number"
                      name="otp"
                      class="form-control"
                      placeholder="Enter Your 6 Digit OTP"
                      onChange={formik.handleChange}
                      value={formik.values.otp}
                    />
                    {formik.errors.otp && (
                      <em style={{ color: "red" }}>{formik.errors.otp}</em>
                    )}
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-center mt-3">
                  {" "}
                  <button
                    class="btn btn-pink mb-5 px-5"
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
