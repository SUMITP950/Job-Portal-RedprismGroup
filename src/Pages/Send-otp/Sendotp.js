import "../../App.css";
import React,{useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

export default function Sendotp(props) {
  useEffect(() => {
    document.title = "Send OTP";
  }, []);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      mobile: "",
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
      console.log(values);
      // axios
      // .post("http://localhost:3030/send_otp", values)
      // .then((response) => {
      //   const data= response.data;
      //   console.log(data);
      //   // toast.success(`login successfully.`);
      // })
      // .catch((error) => {
      //   console.error(error);
      //   // toast.success(`Failed : ${error.message}`);
      // });
      // navigate("/Signin"); 
    },
  });

  const handleApi=()=>{
    axios
      .post("http://localhost:5000/api/employee/hr/sendotp/phnum", {
        ph_num : formik.values.mobile ,
      })
      .then((response) => {
        console.log(response.data);
        if(response.data.status==="not found"){
          toast.error(`Failed : ${response.data.mssg}`);
        }
        if(response.data.status==="success"){
          toast.success(`${response.data.mssg}`);
          navigate("/SigninAsHr");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Failed : ${error.message}`);
      });
  }
  
  return (
    <>
      <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2 d-none d-md-block login-bg-img-otp"></div>
        <div class="contents order-2 order-md-1">
          <div class="container">
            <div class="row align-items-center justify-content-center login-page-height">
              <div class="col-md-7">
                <h3 class="text-center">Forgot Your password ?</h3>
                {/* <!-- <p class="mb-4 text-center">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                            adipisicing.</p> --> */}

                <div class="container card shadow d-flex justify-content-center mt-5">
                  {/* <!-- nav options --> */}

                  <div class="tab-content" id="myTab p-3">
                    {/* <!-- Login Via Mobile Username --> */}
                    <div
                      class="tab-pane fade show active pt-3"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <form onSubmit={formik.handleSubmit}>
                        <div class="form-group last mb-3">
                          <label for="password">Enter Your Mobile Number</label>
                          <input
                            type="number"
                            name="mobile"
                            class="form-control"
                            placeholder="Enter Mobile Number"
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.mobile}
                            
                          />
                          {formik.errors.mobile && (
                            <em style={{ color: "red" }}>
                              {formik.errors.mobile}
                            </em>
                          )}
                        </div>

                        <button type="submit" class="btn btn-block btn-primary" onClick={handleApi}>
                          <strong>Send OTP</strong>
                        </button>

                        <div class="d-flex mb-3 align-items-center mt-3">
                          <span class="ml-auto">
                            <Link to="/SigninAsHr">
                              Back to Login
                              </Link>
                          </span>
                          {/* <!-- <span class="ml-auto"><a href="#" class="forgot-pass"><strong>Creat a new
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
    </>
  );
}
