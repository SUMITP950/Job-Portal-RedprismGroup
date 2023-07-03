import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
// import axios from "axios";

const RegistrationTechSkills = () => {
  useEffect(() => {
    document.title = "Registration";
  }, []);

  const navigate = useNavigate();

  // form validation

  const formik = useFormik({
    initialValues: {
      currentCompany: "",
      technicalSkills: "",
      ExperienceInYear: "",
    },
    validationSchema: yup.object({
      currentCompany: yup.string().required("*Required"),
      technicalSkills: yup.string().required("*Required"),
      ExperienceInYear: yup.string().required("*Required"),
    }),
    onSubmit: (values) => {
      console.log(values); // In this section data send to backend
      navigate("/RegistrationStatus");
    },
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 dn">
            <div class="pindicator">
              <div class="bullet current ">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik.handleSubmit}
                >
                  <span class="icon1 tns90">1</span>
                </Link>
              </div>
              <div class="bullet current">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik.handleSubmit}
                >
                  <span class="icon1 tns90">2</span>
                </Link>
              </div>
              <div class="bullet current future">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik.handleSubmit}
                >
                  <span class="icon1 tns90">3</span>
                </Link>
              </div>
              <div class="bullet future current">
                <Link>
                  <span class="icon1 tns90">4</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik.handleSubmit}
                >
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
                Please Enter Your Technical Skills
              </b>
            </div>
            <div class="container">
              <form onSubmit={formik.handleSubmit}>
                <div class="form-row d-flex align-items-center justify-content-center">
                  <div class="col-md-8 mb-3">
                    <label htmlFor="currentCompany">Current Company</label>
                    <select
                      class="form-control form-control-lg"
                      name="currentCompany"
                      id="currentCompany"
                      onChange={formik.handleChange}
                      value={formik.values.currentCompany}
                    >
                      <option>--Select--</option>
                      <option>Cognizant</option>
                      <option>CTS</option>
                      <option>Wipro</option>
                      <option>Tech Mahindra</option>
                    </select>
                    {formik.errors.currentCompany && (
                      <em style={{ color: "red" }}>
                        {formik.errors.currentCompany}
                      </em>
                    )}
                  </div>
                  <div class="col-md-8 mb-3">
                    <label htmlFor="technicalSkills">Technical Skills</label>
                    <select
                      class="form-control form-control-lg"
                      name="technicalSkills"
                      id="technicalSkills"
                      onChange={formik.handleChange}
                      value={formik.values.technicalSkills}
                    >
                      <option>--Select--</option>
                      <option>JAVA</option>
                      <option>Python</option>
                      <option>JavaScript</option>
                      <option>HTML</option>
                      <option>CSS</option>
                      <option>React JS</option>
                      <option>React Native</option>
                    </select>
                    {formik.errors.technicalSkills && (
                      <em style={{ color: "red" }}>
                        {formik.errors.technicalSkills}
                      </em>
                    )}
                  </div>
                  <div class="col-md-8 mb-3">
                    <label htmlFor="experienceYear">Experience In Year</label>
                    <select
                      class="form-control form-control-lg"
                      name="ExperienceInYear"
                      id="experienceYear"
                      onChange={formik.handleChange}
                      value={formik.values.ExperienceInYear}
                    >
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
                    {formik.errors.ExperienceInYear && (
                      <em style={{ color: "red" }}>
                        {formik.errors.ExperienceInYear}
                      </em>
                    )}
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-center mt-3">
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
};

export default RegistrationTechSkills;
