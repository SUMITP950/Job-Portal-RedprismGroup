import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";


function RegisterJobSheeker () {
    // useEffect(() => {
    //     document.title = "Registration";
    //   }, []);

      const [count, setCount] = useState('');
      setCount('Abhijit');
      console.log(count);
      
      // const navigate = useNavigate();
    
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
          changeForm('verify',values);
          // axios
          // .post("http://localhost:3030/users_registration_jobseeker", values)
          // .then((response) => {
          //   console.log(response.data);
          // })
          // .catch((error) => {
          //   console.error(error);
          // });
          // navigate("/RegistrationVarify");
        },
      });
    // registration varify Start


    // const navigate1 = useNavigate();

    // form validation
    const formik1 = useFormik({
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
        // axios
        // .post("http://localhost:3030/users_registration_jobseeker", values)
        // .then((response) => {
        //   console.log(response.data);
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
        // navigate1("/RegistrationCreate");
        changeForm('create',values);
      },
    });

    
    
    // registration varify End
    
    // registration create start

    // const navigate2 = useNavigate();

    // form validation
  
    const formik2 = useFormik({
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
        console.log(values); // In this section data send to backend
        // axios
        // .post("http://localhost:3030/users_registration_jobseeker", values)
        // .then((response) => {
        //   console.log(response.data);
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
        // navigate2("/RegistrationTechSkills");
        changeForm('skill',values);
      },
    });

    
    // registration create End




    // registration tech skills start


    // const navigate3 = useNavigate();

    // form validation
  
    const formik3 = useFormik({
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
      onSubmit: (values) =>{
        console.log(values)
        // console.log(values); // In this section data send to backend
        // axios
        // .post("http://localhost:3030/users_registration_jobseeker", values)
        // .then((response) => {
        //   console.log(response.data);
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
        // navigate("/RegistrationStatus");
        changeForm('status',values);
      },
    });




    // registration tech skills End
    
    
    // registration  status start

    const navigate4 = useNavigate();

    // form validation
  
    const formik4 = useFormik({
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
        axios
          .post("http://localhost:3030/users_registration_jobseeker", values)
          .then((response) => {
            const data = response.data;
            console.log(data);
            toast.success(`Registered successfully.`);
          })
          .catch((error) => {
            console.error(error);
            toast.success(`Failed : ${error.message}`);
          });
        navigate4("/Signin");
      },
    });
    let demo = '';
    const changeForm = (formName,values) =>{
        document.getElementById("basic").style.display = 'none';
        document.getElementById("verify").style.display = 'none';
        document.getElementById("create").style.display = 'none';
        document.getElementById("skill").style.display = 'none';
        document.getElementById("status").style.display = 'none';
        document.getElementById(formName).style.display = 'block';
        demo += values;
        console.log(demo);
    }
    // registration status End



    
      return (
        <>
          <div className="container" id="basic">
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
                  <form onSubmit={formik.handleSubmit }>
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
{/* registrstion varify page Start */}

<div className="container" id="verify" style={{display:'none'}}>
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
              <Link to="/RegistrationVarify" onClick={formik1.handleSubmit}>
                <span
                  class="icon1 tns90"
                >
                  3
                </span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationVarify" onClick={formik1.handleSubmit}>
                  <span class="icon1 tns90">4</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationVarify" onClick={formik1.handleSubmit}>
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
            <div class="col-md-12 text-center">( As a Job Seeker )</div>
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
              <form onSubmit={formik1.handleSubmit}>
                <div class="form-row d-flex align-items-center justify-content-center">
                  <div class="col-md-8 mb-3">
                    <p className="d-flex h4 my-5 justify-content-center">OTP</p>
                    <input
                      type="number"
                      name="otp"
                      class="form-control"
                      placeholder="Enter Your 6 Digit OTP"
                      onChange={formik1.handleChange}
                      value={formik1.values.otp}
                    />
                    {formik1.errors.otp && (
                      <em style={{ color: "red" }}>{formik1.errors.otp}</em>
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


{/* registrstion varify page End */}

{/* registration create start */}


<div className="container" id="create"style={{display:'none'}}>
        <div className="row">
          <div className="col-md-4 dn">
            <div className="pindicator">
              <div className="bullet current ">
                <Link to="/RegistrationCreate" onClick={formik2.handleSubmit}>
                  <span className="icon1 tns90">1</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationCreate" onClick={formik2.handleSubmit}>
                  <span className="icon1 tns90">2</span>
                </Link>
              </div>
              <div className="bullet next current">
                <Link>
                  <span className="icon1 tns90">3</span>
                </Link>
              </div>
              <div className="bullet future">
                <Link to="/RegistrationCreate" onClick={formik2.handleSubmit}>
                  <span className="icon1 tns90">4</span>
                </Link>
              </div>
              <div className="bullet future">
                <Link to="/RegistrationCreate" onClick={formik2.handleSubmit}>
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
              <form onSubmit={formik2.handleSubmit}>
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
                      onChange={formik2.handleChange}
                      value={formik2.values.username}
                    />
                    {formik2.errors.username && (
                      <em style={{ color: "red" }}>{formik2.errors.username}</em>
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
                      onChange={formik2.handleChange}
                      value={formik2.values.password}
                    />
                    {formik2.errors.password && (
                      <em style={{ color: "red" }}>{formik2.errors.password}</em>
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


{/* registration create end */}





{/* registration tech skills start */}


<div className="container" id="skill"style={{display:'none'}}>
        <div className="row">
          <div className="col-md-4 dn">
            <div class="pindicator">
              <div class="bullet current ">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik3.handleSubmit}
                >
                  <span class="icon1 tns90">1</span>
                </Link>
              </div>
              <div class="bullet current">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik3.handleSubmit}
                >
                  <span class="icon1 tns90">2</span>
                </Link>
              </div>
              <div class="bullet current future">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik3.handleSubmit}
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
                  onClick={formik3.handleSubmit}
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
              <form onSubmit={formik3.handleSubmit}>
                <div class="form-row d-flex align-items-center justify-content-center">
                  <div class="col-md-8 mb-3">
                    <label htmlFor="currentCompany">Current Company</label>
                    <select
                      class="form-control form-control-lg"
                      name="currentCompany"
                      id="currentCompany"
                      onChange={formik3.handleChange}
                      value={formik3.values.currentCompany}
                    >
                      <option>--Select--</option>
                      <option>Cognizant</option>
                      <option>CTS</option>
                      <option>Wipro</option>
                      <option>Tech Mahindra</option>
                    </select>
                    {formik3.errors.currentCompany && (
                      <em style={{ color: "red" }}>
                        {formik3.errors.currentCompany}
                      </em>
                    )}
                  </div>
                  <div class="col-md-8 mb-3">
                    <label htmlFor="technicalSkills">Technical Skills</label>
                    <select
                      class="form-control form-control-lg"
                      name="technicalSkills"
                      id="technicalSkills"
                      onChange={formik3.handleChange}
                      value={formik3.values.technicalSkills}
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
                    {formik3.errors.technicalSkills && (
                      <em style={{ color: "red" }}>
                        {formik3.errors.technicalSkills}
                      </em>
                    )}
                  </div>
                  <div class="col-md-8 mb-3">
                    <label htmlFor="experienceYear">Experience In Year</label>
                    <select
                      class="form-control form-control-lg"
                      name="ExperienceInYear"
                      id="experienceYear"
                      onChange={formik3.handleChange}
                      value={formik3.values.ExperienceInYear}
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
                    {formik3.errors.ExperienceInYear && (
                      <em style={{ color: "red" }}>
                        {formik3.errors.ExperienceInYear}
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



{/* registration tech skills end */}



{/* registration status end */}


<div className="container" id="status"style={{display:'none'}}>
        <div className="row">
          <div className="col-md-4 dn">
            <div className="pindicator">
              <div className="bullet current ">
                <Link to="/RegistrationStatus" onClick={formik4.handleSubmit}>
                  <span className="icon1 tns90">1</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationStatus" onClick={formik4.handleSubmit}>
                  <span className="icon1 tns90">2</span>
                </Link>
              </div>
              <div className="bullet next current">
                <Link to="/RegistrationStatus" onClick={formik4.handleSubmit}>
                  <span className="icon1 tns90">3</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationStatus" onClick={formik4.handleSubmit}>
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
              <form onSubmit={formik4.handleSubmit}>
                <div className="form-row d-flex align-items-center justify-content-center">
                  <div className="col-md-8 mb-3">
                    <label htmlFor="lookingJob">Looking For Job</label>
                    <select
                      className="form-control form-control-lg"
                      name="lookingForJob"
                      id="lookingJob"
                      onChange={formik4.handleChange}
                      value={formik4.values.lookingForJob}
                    >
                      <option>--Select--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik4.errors.lookingForJob && (
                      <em style={{ color: "red" }}>
                        {formik4.errors.lookingForJob}
                      </em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="noticePeriod">Notice Period</label>
                    <select
                      className="form-control form-control-lg"
                      name="noticePeriod"
                      id="noticePeriod"
                      onChange={formik4.handleChange}
                      value={formik4.values.noticePeriod}
                      disabled={formik4.values.lookingForJob === "No"}
                    >
                      <option>--Select--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik4.errors.noticePeriod &&
                      formik4.values.lookingForJob === "Yes" && (
                        <em style={{ color: "red" }}>
                          {formik4.errors.noticePeriod}
                        </em>
                      )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="immediateJoiner">Immediate Joiner</label>
                    <select
                      className="form-control form-control-lg"
                      name="immediateJoiner"
                      id="immediateJoiner"
                      onChange={formik4.handleChange}
                      value={formik4.values.immediateJoiner}
                      disabled={formik4.values.lookingForJob === "No"}
                    >
                      <option>--Select--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik4.errors.immediateJoiner &&
                      formik4.values.lookingForJob === "Yes" && (
                        <em style={{ color: "red" }}>
                          {formik4.errors.immediateJoiner}
                        </em>
                      )}
                  </div>
                  <div
                    className="col-md-8 d-flex"
                    style={{ justifyContent: "space-around" }}
                  >
                    <img src="img/icon/status.png" className="icon-reg"></img>
                    <img src="img/icon/icon2.png" className="icon-reg"></img>
                    <img src="img/icon/icon3.png" className="icon-reg"></img>
                    <img src="img/icon/icon4.png" className="icon-reg"></img>
                  </div>
                  <div
                    className="col-md-8 d-flex"
                    style={{ justifyContent: "space-around" }}
                  >
                    <center>
                      <p className="icon-font"> 1Year Jobless</p>
                    </center>
                    <center>
                      <p className="icon-font"> Saving Notice Period</p>
                    </center>
                    <p className="icon-font"> Looking Job</p>
                    <p className="icon-font"> Immediate Joiner</p>
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



{/* registration status end */}
        </>
      );
}

export default RegisterJobSheeker