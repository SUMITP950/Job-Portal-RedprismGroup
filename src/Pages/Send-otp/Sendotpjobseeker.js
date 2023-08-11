import "../../App.css";
import React,{useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { _, toaster } from "../../Component/Controller/main_controller";

function Sendotpjobseeker() {
  useEffect(() => {
    document.title = "SendOtpAsJobseeker";
  }, []);

  const [showCreatePass, setShowCreatePass]= useState(false)
  
  const formik = useFormik({
    initialValues: {
      mobile: "",
      otpid:"",
    },
    validationSchema: yup.object({
      mobile: yup
        .string()
        .required("*Required")
        .matches(/^[0-9]+$/, "This field  must be a number")
        .min(10, "Minimum 10 digits")
        .max(10, "Maximum 10 digits"),
    }),
    onSubmit: (values) => {
      // console.log(values);
    },
  });
    
 
  const handleApi=()=>{
    const toastId = toaster('load');
    if(formik.values.mobile){
      axios
        .post("http://testredprism.co/api/jobseekerForgotPassword/sendOtp", {
          ph_num: formik.values.mobile,
        })
        .then((response) => {
          // console.log(response.data);
          toaster(response.data.status, toastId, response.data.mssg);
          formik.values.otpid = response.data.otp_id;
          setShowCreatePass(true)
          alert(`Your otp is ${response.data.otp}`);
           // toast.success(`${response.data.mssg}`);
          
        
        })
        .catch((error) => {
          // console.error(error);
          toaster('error', toastId, 'Some Error Occurred. Please Try After Some Time');

        });
    }
  }
  
  return (
    <>
    {
      showCreatePass ? <CreatePassword otp_id={formik.values.otpid} ph_num={formik.values.mobile} /> : 
    
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2 d-none d-md-block login-bg-img-otp"></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center login-page-height">
              <div className="col-md-7">
                <h3 className="text-center">Forgot Your password ?</h3>
                {/* <!-- <p className="mb-4 text-center">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                            adipisicing.</p> --> */}

                <div className="container card shadow d-flex justify-content-center mt-5">
                  {/* <!-- nav options --> */}

                  <div className="tab-content" id="myTab p-3">
                    {/* <!-- Login Via Mobile Username --> */}
                    <div
                      className="tab-pane fade show active pt-3"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <form onSubmit={formik.handleSubmit}>
                        <div className="form-group last mb-3">
                          <label for="password">Enter Your Mobile Number</label>
                          <input
                            type="number"
                            name="mobile"
                            className="form-control"
                            placeholder="Enter Mobile Number"
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.mobile}
                            
                          />
                          {formik.errors.mobile && (
                            <p classNameName="inp-alert">
                              {formik.errors.mobile}
                            </p>
                          )}
                        </div>

                        <button type="submit" className="btn btn-block btn-primary" onClick={handleApi}>
                          <strong>Send OTP</strong>
                        </button>

                        <div className="d-flex mb-3 align-items-center mt-3">
                          <span className="ml-auto">
                            <Link to="/Signin">
                              Back to Login
                              </Link>
                          </span>
                          {/* <!-- <span className="ml-auto"><a href="#" className="forgot-pass"><strong>Creat a new
                                                        account</strong></a></span> --> */}
                        </div>
                      </form>
                    </div>
                    {/* <!-- Login Via Mobile Number --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
}


const CreatePassword=(props)=>{
console.log(props.otp_id);
console.log(props.ph_num);

  useEffect(() => {
    document.title = " CreatePassword";
  }, []);

  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      otp: "",
      ph_num:props.ph_num,
      otpid:props.otp_id,
      newpassword:"",
    },
    validationSchema: yup.object({
      otp: yup
        .string()
        .required("*Required")
        .matches(/^[0-9]+$/, "This field  must be a number")
        // .min(10, "Minimum 10 digits")
        .max(6, "Maximum 6 digits"),
      newpassword: yup
        .string()
        .required("*Required")
        .matches(/[^\w]/, "One Special character Required")
        .matches(/[0-9]/, "One Number Required")
        .min(3, "Minimum 3 characters length")
        .max(10, "Maximum 10 characters length"),
    }),
    onSubmit: (values) => {
      // console.log(values);
    },
  });


  const handleCreatePass=()=>{
    const toastId = toaster('load');
    if(formik.values.otp && formik.values.newpassword){
      axios
      .post("http://testredprism.co/api/jobseekerForgotPassword/savePassword", {
          ph_num: formik.values.ph_num,
          otp: formik.values.otp,
          otp_id: formik.values.otpid,
          password: formik.values.newpassword,
      })
      .then((response) => {

        toaster(response.data.status, toastId, response.data.mssg);
        navigate("/Signin");
      
      })
      .catch((error) => {
        // console.error(error);
        toaster('error', toastId, 'Some Error Occurred. Please Try After Some Time');
      });
    }
  }

  return(
    <div className="d-lg-flex half">
    <div className="bg order-1 order-md-2 d-none d-md-block login-bg-img-otp"></div>
    <div className="contents order-2 order-md-1">
      <div className="container">
        <div className="row align-items-center justify-content-center login-page-height">
          <div className="col-md-7">
            <h3 className="text-center">Forgot Your password ?</h3>
            {/* <!-- <p className="mb-4 text-center">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                        adipisicing.</p> --> */}

            <div className="container card shadow d-flex justify-content-center mt-5">
              {/* <!-- nav options --> */}

              <div className="tab-content" id="myTab p-3">
                {/* <!-- Login Via Mobile Username --> */}
                <div
                  className="tab-pane fade show active pt-3"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group last mb-3">
                      <label for="password">Enter Your OTP</label>
                      <input
                        type="text"
                        name="otp"
                        className="form-control"
                        placeholder="Enter OTP"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.otp}
                        
                      />
                      {formik.errors.otp && (
                        <em style={{ color: "red" }}>
                          {formik.errors.otp}
                        </em>
                      )}
                      </div>
                      <div className="form-group last mb-3">
                       <label for="password">Create New Password</label>
                      <input
                        type="password"
                        name="newpassword"
                        className="form-control"
                        placeholder="Enter new password"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.newpassword}
                        
                      />
                      {formik.errors.newpassword && (
                        <em style={{ color: "red" }}>
                          {formik.errors.newpassword}
                        </em>
                      )}
                    </div>

                    <button type="submit" className="btn btn-block btn-primary" onClick={handleCreatePass}>
                      <strong>Confirm Password</strong>
                    </button>

                    <div className="d-flex mb-3 align-items-center mt-3">
                      <span className="ml-auto">
                        <Link to="/SigninAsHr">
                          Back to Login
                          </Link>
                      </span>
                      {/* <!-- <span className="ml-auto"><a href="#" className="forgot-pass"><strong>Creat a new
                                                    account</strong></a></span> --> */}
                    </div>
                  </form>
                </div>
                {/* <!-- Login Via Mobile Number --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sendotpjobseeker;