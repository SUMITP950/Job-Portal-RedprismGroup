import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { FaUserPlus, FaUserCheck, FaUserSlash } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";

export default function MyBuddies(props) {
  const [userDetails, SetUserDetails] = useState("");

  useEffect(() => {
    document.title = "MyBuddies";
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
      <div class="py-4">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <main class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                <div class="row pt-3 pb-3 text-center">
                  <div class="col-lg-4">
                    <b className="h4">Buddies</b>{" "}
                  </div>
                  <div class="col-lg-3"> </div>

                  <div class="col-lg-4">
                    <form
                      class="d-none d-sm-inline-block form-inline m-auto my-md-0 mw-100 navbar-search border"
                      style={{ borderRadius: "30px" }}
                    >
                      <div class="input-group ">
                        <input
                          type="text"
                          class="form-control shadow-none border-0 search-btn search-placeholder small-search"
                          placeholder="Search..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div class="input-group-append">
                          <button class="btn search-icon" type="button">
                            <i class="feather-search searchicon"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <ul
                  class="nav nav-justified border-bottom osahan-line-tab"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      {" "}
                      My Buddies
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {" "}
                      Buddies Request
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Send Request
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="p-3  align-items-center w-100" href="#">
                      <div class="row justify-content-center">
                        <div class="col-md-12 d-flex justify-content-between ">
                          
                          <div
                            class="col-md-6 mt-3 mr-1"
                            style={{
                              // border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "#f4f5f7",
                              
                            }}
                          >
                            <div class="row px-2 padding-bottom" style={{paddingTop:'12px'}}>
                              <div class="col-md-3">
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px", borderRadius:"50%"}}
                                />
                              </div>
                              <div class="col-md-8" style={{paddingLeft:'25px'}}>
                                <h5 class="text-dark mt-2">Username</h5>
                                <p class=" ">Business Manager</p>
                                <div class="d-flex mb-3">
                                <div >
                                  <button class="btn btn-primary">
                                    <FaUserPlus
                                      size={20}
                                      className="text-light"
                                    />
                                    Confirm
                                  </button>
                                </div>

                                <div class="ml-2">
                                  <button class="btn btn-primary">
                                    <FaUserXmark
                                      size={20}
                                      className="text-light"
                                    />
                                    Delete
                                  </button>
                                </div>
                                </div>
                              </div>
                              
                        
                            </div>
                          </div>
                          <div
                            class="col-md-6 mt-3 "
                            style={{
                              // border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "#f4f5f7",
                            }}
                          >
                            <div class="row px-2 padding-bottom" style={{paddingTop:'12px'}}>
                              <div class="col-md-3" >
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px", borderRadius:"50%" }}
                                />
                              </div>
                              <div class="col-md-8" style={{paddingLeft:'25px'}} >
                                <h5 class="text-dark mt-2">Username</h5>
                                <p>Business Manager</p>
                                <div class="d-flex">
                                <div >
                                  <button class="btn btn-primary">
                                    <FaUserPlus
                                      size={20}
                                      className="text-light"
                                    />
                                    Confirm
                                  </button>
                                </div>

                                <div class="ml-2">
                                  <button class="btn btn-primary">
                                    <FaUserXmark
                                      size={20}
                                      className="text-light"
                                    />
                                    Delete
                                  </button>
                                </div>
                                </div>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="p-3 w-100">
                      <div class="row justify-content-center">
                      <div class="col-md-12 d-flex justify-content-between ">
                          
                          <div
                            class="col-md-6 mt-3 mr-1"
                            style={{
                              // border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "#f4f5f7",
                            }}
                          >
                            <div class="row px-2 padding-bottom" style={{paddingTop:'12px'}}>
                              <div class="col-md-3">
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px", borderRadius:"50%"}}
                                />
                              </div>
                              <div class="col-md-8" style={{paddingLeft:'25px'}}>
                                <h5 class="text-dark mt-2">Username</h5>
                                <p class=" ">Business Manager</p>
                                <div class="d-flex mb-3">
                                <div >
                                  <button class="btn btn-primary">
                                    <FaUserPlus
                                      size={20}
                                      className="text-light"
                                    />
                                    Confirm
                                  </button>
                                </div>

                                <div class="ml-2">
                                  <button class="btn btn-primary">
                                    <FaUserXmark
                                      size={20}
                                      className="text-light"
                                    />
                                    Delete
                                  </button>
                                </div>
                                </div>
                              </div>
                              
                        
                            </div>
                          </div>
                          <div
                            class="col-md-6 mt-3 "
                            style={{
                              // border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "#f4f5f7",
                            }}
                          >
                            <div class="row px-2 padding-bottom" style={{paddingTop:'12px'}}>
                              <div class="col-md-3" >
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px", borderRadius:"50%" }}
                                />
                              </div>
                              <div class="col-md-8" style={{paddingLeft:'25px'}}>
                                <h5 class="text-dark mt-2">Username</h5>
                                <p>Business Manager</p>
                                <div class="d-flex">
                                <div >
                                  <button class="btn btn-primary">
                                    <FaUserPlus
                                      size={20}
                                      className="text-light"
                                    />
                                    Confirm
                                  </button>
                                </div>

                                <div class="ml-2">
                                  <button class="btn btn-primary">
                                    <FaUserXmark
                                      size={20}
                                      className="text-light"
                                    />
                                    Delete
                                  </button>
                                </div>
                                </div>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div class="p-3 w-100">
                      <div class="row justify-content-center">
                      <div class="col-md-12 d-flex justify-content-between ">
                          
                          <div
                            class="col-md-6 mt-3 mr-1"
                            style={{
                              // border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "#f4f5f7",
                            }}
                          >
                            <div class="row px-2 padding-bottom" style={{paddingTop:'12px'}}>
                              <div class="col-md-3">
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px", borderRadius:"50%"}}
                                />
                              </div>
                              <div class="col-md-8" style={{paddingLeft:'25px'}}>
                                <h5 class="text-dark mt-2">Username</h5>
                                <p class=" ">Business Manager</p>
                                <div class="d-flex mb-3">
                                <div >
                                  <button class="btn btn-primary">
                                    <FaUserPlus
                                      size={20}
                                      className="text-light"
                                    />
                                    Confirm
                                  </button>
                                </div>

                                <div class="ml-2">
                                  <button class="btn btn-primary">
                                    <FaUserXmark
                                      size={20}
                                      className="text-light"
                                    />
                                    Delete
                                  </button>
                                </div>
                                </div>
                              </div>
                              
                        
                            </div>
                          </div>
                          <div
                            class="col-md-6 mt-3 "
                            style={{
                              // border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "#f4f5f7",
                            }}
                          >
                            <div class="row px-2 padding-bottom" style={{paddingTop:'12px'}}>
                              <div class="col-md-3" >
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px", borderRadius:"50%" }}
                                />
                              </div>
                              <div class="col-md-8" style={{paddingLeft:'25px'}}>
                                <h5 class="text-dark mt-2">Username</h5>
                                <p>Business Manager</p>
                                <div class="d-flex">
                                <div >
                                  <button class="btn btn-primary">
                                    <FaUserPlus
                                      size={20}
                                      className="text-light"
                                    />
                                    Confirm
                                  </button>
                                </div>

                                <div class="ml-2">
                                  <button class="btn btn-primary">
                                    <FaUserXmark
                                      size={20}
                                      className="text-light"
                                    />
                                    Delete
                                  </button>
                                </div>
                                </div>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 aside-tag">
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
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12 aside-tag">
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
          </div>
        </div>
      </div>
    </>
  );
}
