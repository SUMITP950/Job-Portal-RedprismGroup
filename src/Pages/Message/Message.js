/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ChatBox from "./ChatBox";
import MainChat from "./MainChat";

export default function Message() {
  const [userDetails, SetUserDetails] = useState("");

  useEffect(() => {
    document.title = "Home";
  }, []);

  //Protecting this page
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  // Get user details
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/getUserDetails", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        SetUserDetails(res.data.userDetails);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="py-4">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm pt-3 pb-4">
                  <h6 class="pt-2 text-center">Other Option</h6>
                  <Link
                    to="/Setting"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-settings left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Settings</span>
                    </div>
                  </Link>
                  <Link
                    to="/SampleResume"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-log-out left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Sample Resume</span>
                    </div>
                  </Link>
                  <Link
                    to="/Training"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-file-text left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Trainings</span>
                    </div>
                  </Link>
                  <Link
                    to="/FresherJob"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <img
                          src="img/icon/training.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Fresher Jobs</span>
                    </div>
                  </Link>
                  <Link
                    to="/Internship"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <img
                          src="img/icon/2255545.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Internship</span>
                    </div>
                  </Link>
                </div>
              </div>
            </aside>
            <main class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div class="box shadow-sm rounded bg-white mb-3 osahan-chat">
                <h5 class="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">
                  Messaging
                </h5>
                <div class="row m-0">
                  <div class="border-right col-lg-5 col-xl-4 px-0">
                    <div class="osahan-chat-left">
                      <div class="position-relative icon-form-control p-3 border-bottom">
                        <i class="feather-search position-absolute"></i>
                        <input
                          placeholder="Search messages"
                          type="text"
                          class="form-control"
                        />
                      </div>

                      <ChatBox />
                    </div>
                  </div>
                  <div class="col-lg-7 col-xl-8 px-0">
                    <MainChat />

                    <div class="w-100 border-top border-bottom">
                      <textarea
                        placeholder="Write a message…"
                        class="form-control border-0 p-3 shadow-none"
                        rows="2"
                      ></textarea>
                    </div>
                    <div class="p-3 d-flex align-items-center">
                      <span class="ml-auto">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm rounded"
                        >
                          <i class="feather-send"></i> Send
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 ">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm pt-4 pb-3">
                  <div class="dropdown-item d-flex align-items-center">
                    <div class="mr-2">
                      <div class="icon-circle-profile">
                        <i class="feather-user left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="font-weight-bold">{userDetails.user_name}</h5>
                    </div>
                    <div>
                      <h6 className="font-weight-bold ml-1 line-reduce">
                        ({userDetails.employee_type})
                      </h6>
                    </div>
                  </div>

                  <Link
                    to="/Profile"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <img src="img/icon/smile.svg" alt="" />
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">My Profile</span>
                    </div>
                  </Link>
                  <Link
                    to="/MyBuddies"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-users left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">My Buddies</span>
                    </div>
                  </Link>
                  <Link
                    to="/jobPost"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-briefcase left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Job Post</span>
                    </div>
                  </Link>
                  <Link
                    to="/walkingjob"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-save left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Walking Job</span>
                    </div>
                  </Link>
                  <Link
                    to="/Jobsearch"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile ">
                        <img
                          src="img/icon/2255545.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Job Search</span>
                    </div>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
