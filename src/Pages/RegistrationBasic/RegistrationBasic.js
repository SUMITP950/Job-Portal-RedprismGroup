import React,{useEffect} from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export default function RegistrationBasic() {
  useEffect(() => {
    document.title = "Registration";
  }, []);
  
  const navigate = useNavigate();

  // form validation

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      city: "",
      state: "",
      zip: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .matches(/^[A-Za-z]+$/, "This field  must be a letter")
        .required("*Required")
        .min(3, "Minimum 3 characters length")
        .max(15, "Maximum 15 characters length"),
      lastName: yup
        .string()
        .matches(/^[A-Za-z]+$/, "This field  must be a letter")
        .required("*Required")
        .min(3, "Minimum 3 characters length")
        .max(15, "Maximum 15 characters length"),

      email: yup.string().required("*Required").email("Invalid Email"),
      mobile: yup
        .string()
        .required("*Required")
        .matches(/^[0-9]+$/, "This field  must be a number")
        .min(10, "Minimum 10 digits")
        .max(10, "Maximum 10 digits"),
      city: yup
        .string()
        .required("*Required")
        .matches(/^[A-Za-z]+$/, "This field  must be a letter"),
      state: yup
        .string()
        .required("*Required")
        .matches(/^[A-Za-z]+$/, "This field  must be a letter"),
      zip: yup
        .string()
        .required("*Required")
        .matches(/^[0-9]+$/, "This field  must be a number")
        .min(5, "Minimum 5 digits")
        .max(10, "Maximum 10 digits"),
    }),
    onSubmit: (values) => {
      console.log(values); // In this section data send to backend
      navigate("/RegistrationVarify");
    },
  });

  //   axios
  //     .post("https://jsonplaceholder.typicode.com/posts", values)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 dn">
            <div class="pindicator">
              <div class="bullet current ">
                {" "}
                <Link>
                  <span class="icon1 tns90">1</span>
                </Link>
              </div>
              <div class="bullet ">
                <Link to="/RegistrationBasic" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">2</span>
                </Link>
              </div>
              <div class="bullet next future">
                <Link to="/RegistrationBasic" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">3</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationBasic" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">4</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationBasic" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">5</span>
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
              <form onSubmit={formik.handleSubmit}>
                <div className="form-row d-flex align-items-center justify-content-center">
                  <div className="col-md-8 mb-3">
                    <label htmlFor="validationDefault01">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="validationDefault01"
                      placeholder="First name"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />

                    {formik.errors.firstName && (
                      <em style={{ color: "red" }}>
                        {formik.errors.firstName}
                      </em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="validationDefault02">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      id="validationDefault02"
                      placeholder="Last name"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />

                    {formik.errors.lastName && (
                      <em style={{ color: "red" }}>{formik.errors.lastName}</em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="validationDefaultUsername"
                      placeholder="abc@example.com"
                      aria-describedby="inputGroupPrepend2"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && (
                      <em style={{ color: "red" }}>{formik.errors.email}</em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="phone">Mob No.</label>
                    <input
                      type="number"
                      name="mobile"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Your Mobile No."
                      aria-describedby="inputGroupPrepend2"
                      onChange={formik.handleChange}
                      value={formik.values.mobile}
                    />
                    {formik.errors.mobile && (
                      <em style={{ color: "red" }}>{formik.errors.mobile}</em>
                    )}
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
                        onChange={formik.handleChange}
                        required
                      />
                      <label htmlFor="male">Male</label>{" "}
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        onChange={formik.handleChange}
                      />
                      <label htmlFor="female">Female</label>{" "}
                      <input
                        type="radio"
                        id="preferNotToSay"
                        name="gender"
                        value="Prefer Not to Say"
                        onChange={formik.handleChange}
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
                      name="city"
                      className="form-control"
                      id="validationDefault03"
                      placeholder="City"
                      onChange={formik.handleChange}
                      value={formik.values.city}
                    />

                    {formik.errors.city && (
                      <em style={{ color: "red" }}>{formik.errors.city}</em>
                    )}
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="validationDefault04">State</label>
                    <input
                      type="text"
                      name="state"
                      className="form-control"
                      id="validationDefault04"
                      placeholder="State"
                      onChange={formik.handleChange}
                      value={formik.values.state}
                    />

                    {formik.errors.state && (
                      <em style={{ color: "red" }}>{formik.errors.state}</em>
                    )}
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="validationDefault05">Zip</label>
                    <input
                      type="number"
                      name="zip"
                      className="form-control"
                      id="validationDefault05"
                      placeholder="Zip"
                      onChange={formik.handleChange}
                      value={formik.values.zip}
                    />

                    {formik.errors.zip && (
                      <em style={{ color: "red" }}>{formik.errors.zip}</em>
                    )}
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
          </div>
        </div>
      </div>
    </>
  );
}
