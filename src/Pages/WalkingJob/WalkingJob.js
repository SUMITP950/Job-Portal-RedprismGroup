import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";

import { SearchResultsList } from "../../Component/SearchBar/SearchResultList";
import { toast } from "react-toastify";
import { data } from "jquery";

const WalkingJob = () => {

const [getLocation,setgetLocation]=useState("");
const [getLocationList,setgetLocationList]=useState([]);


  useEffect(() => {
    document.title = "Job Post";
  }, []);
 
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/walkingJobPost/getLocationList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
       setgetLocationList(res.data.locationList)
     
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {/* html start */}
      <div className="container-fluid body-padding">
        <div className="row justify-content-around my-5">
          <aside className="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <div className="border rounded bg-white mb-3">
              <div className="shadow-sm">
                <h6 className="pt-3 text-center">Other Option</h6>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/Setting"
                >
                  <div className="mr-3">
                    <div className="icon-circle-profile border-rm">
                      <i className="feather-settings left-menu-icon" />
                    </div>
                  </div>
                  <div>
                    <span className="font-weight-bold">Settings</span>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/SampleResume"
                >
                  <div className="mr-3">
                    <div className="icon-circle-profile border-rm">
                      <i className="feather-file-text left-menu-icon" />
                    </div>
                  </div>
                  <div>
                    <span className="font-weight-bold">Simple Resume</span>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/Training"
                >
                  <div className="mr-3">
                    <div className="icon-circle-profile border-rm">
                      <img
                        src="img/icon/training.png"
                        alt
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="font-weight-bold">Trainings</span>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/FresherJob"
                >
                  <div className="mr-3">
                    <div className="icon-circle-profile border-rm">
                      <img
                        src="img/icon/2255545.png"
                        alt
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="font-weight-bold">Fresher Jobs</span>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/Internship"
                >
                  <div className="mr-3">
                    <div className="icon-circle-profile border-rm">
                      <img
                        src="https://static.thenounproject.com/png/960899-200.png"
                        alt
                        className="icon-image"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="font-weight-bold">Internship</span>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/SigninAsHr"
                >
                  <div className="mr-3">
                    <div className="icon-circle-profile border-rm">
                      <i className="feather-log-out left-menu-icon" />
                    </div>
                  </div>
                  <div>
                    <span className="font-weight-bold">Sign Out</span>
                  </div>
                </a>
              </div>
            </div>
          </aside>
          <main className="col col-xl-7 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12 pb-5" style={{backgroundColor:"#fff"}}>
            
              <ul
                className="nav nav-justified border-bottom osahan-line-tab mb-5"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    <img
                      src="img/icons8-password-48.png"
                      style={{ width: 32 }}
                    />
                 Enter New Walkling Job
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="home-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="true"
                  >
                    <img
                      src="img/icons8-male-user-100.png"
                      style={{ width: 32 }}
                    />
                    List Job
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTab p-3">
                <div
                  className="tab-pane fadev active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  
                      
                        <div className="card">
                          <div className="card-header">
                            <h3 className="card-title">Post a Job</h3>
                          </div>
                          <div className="card-body ">
                            <form  >
                              <div className="form-group">
                                <label htmlFor="title">Job Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="title"
                                  placeholder="Enter the job title"
                             
                                 
                                  
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="salaryRange">
                                  Salary Range
                                </label>
                                <select
                                  className="form-control"
                                  id="salaryRange"
                                 
                                  required
                                >
                                  <option value="">
                                    -- Select Salary Range --
                                  </option>
                                  <option value="60k-1LPA">60k - 1LPA</option>
                                  <option value="1LPA-2LPA">1LPA - 2LPA</option>
                                  <option value="2LPA-6LPA">2LPA - 6LPA</option>
                                  <option value="6LPA-12LPA">
                                    6LPA - 12LPA
                                  </option>
                                  <option value="12LPA-Above">
                                    12LPA and Above
                                  </option>
                                </select>
                              </div>
                              <div className="form-group">
                                <b
                                  htmlFor="description"
                                  style={{ paddingLeft: "8px" }}
                                >
                                  Location
                                </b>
                                <div className="form-group">
                                <select  onChange={(e)=>(setgetLocation(e.target.value))} value ={getLocation} className="form-control"
                                  id="salaryRange">
                                  <option>-- Select Location --</option>
                                  {getLocationList.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {item.state} , {item.city} , {item.area}
                            </option>
                          </>
                        );
                      })}
                                  </select>
                                </div>
                              </div>
                              <div className="form-group">
                                <b
                                  htmlFor="description"
                                  style={{ paddingLeft: "8px" }}
                                >
                                  Technology
                                </b>
                                <div className="form-group">
                                <select    className="form-control"
                                  id="salaryRange">
                                  <option>jhsbdcvhik</option>
                                  <option>ohihdbcvisdb</option>
                                  <option>ajdbnsciksadhn</option>
                                  <option>ajsbdhixbash</option>
                                  <option>ujdgcujhd</option>
                                  </select>
                                </div>
                              </div>
                            
                              <div className="form-group">
                                <label htmlFor="experienceYear">
                                  Experience in Year
                                </label>
                                <select
                                  className="form-control"
                                  id="experienceYear"
                          
                                  required
                                >
                                  <option value="">
                                    -- Select Experience in Year --
                                  </option>
                                  <option value="Fresher">Fresher</option>
                                  <option value="0-1 Year">0-1 Year</option>
                                  <option value="1-2 Year">1-2 Year</option>
                                  <option value="2-3 Year">2-3 Year</option>
                                  <option value="3-4 Year">3-4 Year</option>
                                  <option value="4-5 Year">4-5 Year</option>
                                  <option value="5-6 Year">5-6 Year</option>
                                  <option value="6-7 Year">6-7 Year</option>
                                  <option value="7-8 Year">7-8 Year</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="description">
                                  Job Description
                                </label>
                                <textarea
                                  className="form-control"
                                  id="description"
                                  placeholder="Enter the job description"
                                  rows="5"
                       
                                  required
                                ></textarea>
                              </div>

                              <button
                                type="submit"
                                className="btn apply-btn"
                              
                              >submit
                              </button>
                            </form>
                          </div>
                       
                      </div>
                    
                </div>
                <div
                  className="tab-pane fade active show"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <form>
                    <div className="form-group first">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter Your Username"
                        id="username"
                        defaultValue
                      />
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Your Password"
                        defaultValue
                      />
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">
                      <strong>SIGN IN</strong>
                    </button>
                    <div className="d-flex mb-3 align-items-center mt-3">
                      <span className="mr-auto">
                        <a className="forgot-pass" href="/sendotpjobseeker">
                          Forgot Password ?
                        </a>
                      </span>
                      <span className="ml-auto">
                        <a className="forgot-pass" href="/RegisterJobSheeker">
                          Creat a new account
                        </a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
        
          </main>
          <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 ">
            <div class="border rounded bg-white mb-3">
              <div class="shadow-sm pt-4 pb-4">
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-user left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                    <Link to="/Profile">
                      <span class="font-weight-bold">User Name</span>
                    </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-edit left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                    <Link to="/ProfileEdit">
                      <span class="font-weight-bold">Edit Profile</span>
                    </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <img src="img/icon/smile.svg" alt="" />
                    </div>
                  </div>
                  <div>
                    <Link to="/Profile">
                      <span class="font-weight-bold">User Profile</span>
                    </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-users left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                    <Link to="/MyBuddies">
                      <span class="font-weight-bold">My Buddies</span>
                    </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-briefcase left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                    <Link to="/Jobs">
                      <span class="font-weight-bold">Jobs</span>
                    </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-save left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                    <Link to="/Jobprofile">
                      <span class="font-weight-bold">My Jobs</span>
                    </Link>
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* html start */}
    </>
  );
};

export default WalkingJob;
