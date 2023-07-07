/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Select from "react-select";
import axios from "axios";

export default function Training(props) {
  useEffect(() => {
    document.title = "Training";
  });
  const [data, SetData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      SetData(res.data.products);
    });
    // console.log(data.products[0]);})
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div className="py-4">
        <div className="container-fluid body-padding">
          <div className="row justify-content-around">
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm">
                  <h6 class="pt-3 text-center">Other Option</h6>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-settings left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/Setting">
                        <span class="font-weight-bold">Settings</span>
                      </Link>
                    </div>
                  </a>

                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-file-text left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/SampleResume">
                        <span class="font-weight-bold">Simple Resume</span>
                      </Link>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
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
                      <Link to="/Training">
                        <span class="font-weight-bold">Trainings</span>
                      </Link>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
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
                      <Link to="/FresherJob">
                        <span class="font-weight-bold">Fresher Jobs</span>
                      </Link>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <img
                          src="https://static.thenounproject.com/png/960899-200.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      <Link to="/Internship">
                        <span class="font-weight-bold">Internship</span>
                      </Link>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-log-out left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/">
                        <span class="font-weight-bold">Sign Out</span>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
            <main className="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div className="pt-3" style={{ backgroundColor: "#edf2f6" }}>
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="d-flex justify-content-around">
                        <div className="dropdown">
                          <div className="d-flex align-items-center">
                            <img
                              className="dropdown-menu-img"
                              src="https://img.icons8.com/ios/50/000000/circuit.png"
                              alt=""
                            />
                            <Select
                              styles={{
                                container: (baseStyles, state) => ({
                                  ...baseStyles,
                                  display: "inherit",
                                }),
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  border: "none",
                                  backgroundColor: "#edf2f6",
                                }),
                                placeholder: (baseStyles, state) => ({
                                  ...baseStyles,
                                  color: "Black",
                                  fontWeight: "bold",
                                }),
                                indicatorSeparator: (baseStyles, state) => ({
                                  ...baseStyles,
                                  display: "none",
                                }),
                              }}
                              options={options}
                              isMulti
                              placeholder={"Technology"}
                            />
                          </div>
                        </div>

                        <div className="dropdown">
                          <div className="d-flex align-items-center">
                            <img
                              className="dropdown-menu-img"
                              src="https://img.icons8.com/ios/50/popular-man.png"
                              alt=""
                            />
                            <Select
                              styles={{
                                container: (baseStyles, state) => ({
                                  ...baseStyles,
                                  display: "inherit",
                                }),
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  border: "none",
                                  backgroundColor: "#edf2f6",
                                }),
                                placeholder: (baseStyles, state) => ({
                                  ...baseStyles,
                                  color: "Black",
                                  fontWeight: "bold",
                                }),
                                indicatorSeparator: (baseStyles, state) => ({
                                  ...baseStyles,
                                  display: "none",
                                }),
                              }}
                              options={options}
                              isMulti
                              placeholder={"Type"}
                            />
                          </div>
                        </div>

                        <div className="dropdown">
                          <div className="d-flex align-items-center">
                            <img
                              className="dropdown-menu-img"
                              src="https://img.icons8.com/ios/50/popular-man.png"
                              alt=""
                            />
                            <Select
                              styles={{
                                container: (baseStyles, state) => ({
                                  ...baseStyles,
                                  display: "inherit",
                                }),
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  border: "none",
                                  backgroundColor: "#edf2f6",
                                }),
                                placeholder: (baseStyles, state) => ({
                                  ...baseStyles,
                                  color: "Black",
                                  fontWeight: "bold",
                                }),
                                indicatorSeparator: (baseStyles, state) => ({
                                  ...baseStyles,
                                  display: "none",
                                }),
                              }}
                              options={options}
                              isMulti
                              placeholder={"Location"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid mt-4">
                <div className="row">
                  <div className="col-md-8">
                    <h5>Recommended Training</h5>
                  </div>
                  <div className="col-md-4">
                    <Select
                      placeholder={"Search Trainings...."}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: "50px",
                        }),
                        option: (baseStyles, state) => ({
                          ...baseStyles,

                          display: "none",
                        }),
                        indicatorsContainer: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),

                        indicatorSeparator: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),
                      }}
                    />
                  </div>
                </div>
                <div
                  className="row mt-4 p-4 rounded"
                  style={{ border: "1px solid black" }}
                >
                  {" "}
                  {data.map((item, id) => {
                    return (
                      <div className="col-md-4 mb-4" key={id}>
                        <div className="card">
                          <img
                            src={item.images[0]}
                            className="card-img-top crdimg"
                            alt="..."
                          />
                          {/* <img
                        src="https://www.redprismgroup.com/img/digita.jpg"
                        className="card-img-top crdimg"
                        alt="..."
                      /> */}
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                          </div>
                          <div className="card-footer">
                            <Link to="#" className="btn btn-block apply-btn">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src="https://www.redprismgroup.com/img/hadoop.jpg"
                        className="card-img-top crdimg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Big Data Hadoop</h5>
                        <p className="card-text">
                          What is Hadoop? Hadoop is an open source, Java based
                          framework used for storing..
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link to="#" className="btn btn-block apply-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src="https://www.redprismgroup.com/img/machine_learning.jpg"
                        className="card-img-top crdimg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Machine Learning</h5>
                        <p className="card-text">
                          Machine learning is not something that you have to
                          wait for a specific time or a..
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link to="#" className="btn btn-block apply-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row mt-4 p-4 rounded"
                  style={{ border: "1px solid black" }}
                >
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src="https://www.redprismgroup.com/img/django-3.jpeg"
                        className="card-img-top crdimg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Django Python</h5>
                        <p className="card-text">
                          Are you on the lookout for the Django institute? You
                          can count
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link to="#" className="btn btn-block apply-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src="https://www.redprismgroup.com/img/iot.jpg"
                        className="card-img-top crdimg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">IOT</h5>
                        <p className="card-text">
                          What is IOT(Internet of Things) The Internet of things
                          (IoT) is a sys..
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link to="#" className="btn btn-block apply-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src="https://www.redprismgroup.com/img/uipath.jpg"
                        className="card-img-top crdimg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">UI Path</h5>
                        <p className="card-text">
                          What is RPA? Robotic Process Automation is the
                          technology that
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link to="#" className="btn btn-block apply-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div> */}
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
                    <Link to="/Editprofile">
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
      </div>
    </>
  );
}
