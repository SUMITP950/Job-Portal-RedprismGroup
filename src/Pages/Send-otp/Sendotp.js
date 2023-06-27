import React, { useEffect, useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sendotp(props) {
  useEffect(() => {
    document.title = "Send OTP";
  }, []);
  const [otp, Setotp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    window.alert("OTP Validation Successful");

    const data = { otp };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
                      <form onSubmit={handleSubmit}>
                        <div class="form-group last mb-3">
                          <label for="password">Enter Your Mobile Number</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Enter Mobile Number"
                            id="password"
                            onChange={(e) => Setotp(e.target.value)}
                            value={otp}
                            required
                          />
                        </div>

                        <button type="submit" class="btn btn-block btn-primary">
                          <strong>Send OTP</strong>
                        </button>

                        <div class="d-flex mb-3 align-items-center mt-3">
                          <span class="ml-auto">
                            <a href="#" class="forgot-pass">
                              Back to Login
                            </a>
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
