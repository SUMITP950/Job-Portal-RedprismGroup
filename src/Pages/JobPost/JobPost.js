/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Component/auth.js";
import { toast } from "react-toastify";

const JobPost = () => {
  // Get user details

  const [userDetails, SetUserDetails] = useState("");

  const fetchUserDetails = async () => {
    const userData = await auth();
    SetUserDetails(userData);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Title
  useEffect(() => {
    document.title = "Job Post";
  }, []);

  //Protecting this page
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  const [title, setTitle] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phnumber, setPhNumber] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLoctions] = useState("");
  const [locationList, setLoctionList] = useState([]);
  const [company, setCompany] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [technicalSkillsList, setTechnicalSkillsList] = useState([]);
  const [salaryRange, setSalaryRange] = useState("");
  const [salaryRangeList, setSalaryRangeList] = useState([]);
  const [experienceYear, setExperienceYear] = useState("");
  const [experienceYearList, setExperienceYearList] = useState([]);
  const [targetedEmployee, SetTargetedEmployee] = useState("");
  const [serviceAreaCode, SetServiceAreaCode] = useState("");
  const [serviceAreaCodeList, SetServiceAreaCodeList] = useState([]);
  const [getJobPostList, setGetJobPostList] = useState([]);

  //Fetch location list
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobPost/getLocationList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setLoctionList(res.data.locationList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Fetch Technology list
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobPost/getTechList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setTechnicalSkillsList(res.data.techList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Fetch Company list
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobPost/getCompanyList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setCompanyList(res.data.companyList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Fetch Experience list
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobPost/getExpList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setExperienceYearList(res.data.expList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Fetch salary list
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobPost/getSalaryRange", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setSalaryRangeList(res.data.salaryRangeList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Fetch services list
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobPost/getServiceAreaList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        SetServiceAreaCodeList(res.data.serviceAreaList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Save job post

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://testredprism.co/api/jobPost/saveJobPost",
        {
          tech_code: technicalSkills,
          location_code: location,
          company_code: company,
          salary_range_code: salaryRange,
          exp_code: experienceYear,
          service_area_code: serviceAreaCode,
          targeted_employee: targetedEmployee,
          job_title: title,
          designation: designation,
          description: description,
          email: email,
          ph_num: phnumber,
        },

        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success(`${response.data.mssg}`);
          setEmail("");
          setTitle("");
          setDescription("");
          setDesignation("");
          setCompany("");
          setPhNumber("");
          setLoctions("");
          setExperienceYear("");
          setSalaryRange("");
          setTechnicalSkills("");
          SetServiceAreaCode("");
          SetTargetedEmployee("");
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Get job post list

  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobPost/getMyJobPost", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setGetJobPostList(res.data.jobsList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {/* html start */}
      <div className="container-fluid body-padding">
        <div className="row justify-content-around mt-5">
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
          <main
            className="col col-xl-7 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12"
            style={{ backgroundColor: "#fff" }}
          >
            <ul
              className="nav nav-justified border-bottom osahan-line-tab mb-5"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Post Your Job
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  Job Post List
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTab p-3">
              <div
                className="tab-pane fade  active show"
                id="home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Post a Job</h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="title">Job Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="Enter the job title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="title">Job Designation</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="Enter Your Job Designation "
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="title">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="title"
                          placeholder="Enter Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="title">Contact Number</label>
                        <input
                          type="number"
                          className="form-control"
                          id="title"
                          placeholder="Enter Your Ph number"
                          value={phnumber}
                          onChange={(e) => setPhNumber(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <b htmlFor="description" style={{ paddingLeft: "8px" }}>
                          Location
                        </b>
                        <div className="form-group">
                          <select
                            className="form-control"
                            value={location}
                            onChange={(e) => setLoctions(e.target.value)}
                          >
                            <option>-- Select Location --</option>
                            {locationList.map((item, id) => {
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
                        <b htmlFor="description" style={{ paddingLeft: "8px" }}>
                          Technology
                        </b>
                        <div className="form-group">
                          <select
                            className="form-control"
                            value={technicalSkills}
                            onChange={(e) => setTechnicalSkills(e.target.value)}
                          >
                            <option>-- Select Technology --</option>
                            {technicalSkillsList.map((item, id) => {
                              return (
                                <>
                                  <option value={item._id} key={id._id}>
                                    {item.tech_name}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="experienceYear">Company</label>
                        <select
                          className="form-control"
                          id="experienceYear"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                        >
                          <option>-- Select Company --</option>
                          {companyList.map((item, id) => {
                            return (
                              <>
                                <option value={item._id} key={id._id}>
                                  {item.company_name}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="experienceYear">
                          Experience in Year
                        </label>
                        <select
                          className="form-control"
                          id="experienceYear"
                          value={experienceYear}
                          onChange={(e) => setExperienceYear(e.target.value)}
                          required
                        >
                          <option>-- Select Experience in Year --</option>
                          {experienceYearList.map((item, id) => {
                            return (
                              <>
                                <option value={item._id} key={id._id}>
                                  {item.experience}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="salaryRange">Salary Range</label>
                        <select
                          className="form-control"
                          id="salaryRange"
                          value={salaryRange}
                          onChange={(e) => setSalaryRange(e.target.value)}
                          required
                        >
                          <option>-- Select Salary Range --</option>
                          {salaryRangeList.map((item, id) => {
                            return (
                              <>
                                <option value={item._id} key={id._id}>
                                  {item.salary_range}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="salaryRange">Service Area</label>
                        <select
                          className="form-control"
                          id="salaryRange"
                          value={serviceAreaCode}
                          onChange={(e) => SetServiceAreaCode(e.target.value)}
                          required
                        >
                          <option>-- Select Service Area --</option>
                          {serviceAreaCodeList.map((item, id) => {
                            return (
                              <>
                                <option value={item._id} key={id._id}>
                                  {item.service_area}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="salaryRange">Targeted Employee</label>
                        <select
                          className="form-control"
                          id="salaryRange"
                          onChange={(e) => SetTargetedEmployee(e.target.value)}
                          value={targetedEmployee}
                          required
                        >
                          <option>-- Select Targeted Employee --</option>
                          <option>All</option>
                          <option>Fresher</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="description">Job Description</label>
                        <textarea
                          className="form-control"
                          id="description"
                          placeholder="Enter the job description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows="5"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn apply-btn"
                        onClick={handleApi}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">TargetedEmployee</th>
                        <th scope="col">Jobtitle</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phnum</th>
                        <th scope="col">PostDate&time</th>
                        <th scope="col">Technology</th>
                        <th scope="col">Location</th>
                        <th scope="col">Company</th>
                        <th scope="col">Salaryrange</th>
                        <th scope="col">Experience</th>
                        <th scope="col">ServiceArea</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    {getJobPostList.map((item, id) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{item.targeted_employee}</td>
                            <td>{item.job_title}</td>
                            <td>{item.designation}</td>
                            <td>{item.email}</td>
                            <td>{item.ph_num}</td>
                            <td>{item.post_datetime}</td>
                            <td key={id._id}>
                              {item.technology.length > 0
                                ? item.technology[0].tech_name
                                : ""}
                            </td>
                            <td key={id._id}>
                              {item.location.length > 0
                                ? `${item.location[0].area},${item.location[0].city},${item.location[0].state}`
                                : ""}
                            </td>
                            <td key={id._id}>
                              {item.company_details.length > 0
                                ? item.company_details[0].company_name
                                : ""}
                            </td>
                            <td key={id._id}>
                              {item.salary_range.length > 0
                                ? item.salary_range[0].salary_range
                                : ""}
                            </td>
                            <td key={id._id}>
                              {item.experience_master.length > 0
                                ? item.experience_master[0].experience
                                : ""}
                            </td>
                            <td key={id._id}>
                              {item.service_area_details.length > 0
                                ? item.service_area_details[0].service_area
                                : ""}
                            </td>
                            <td>{item.description}</td>
                            <td>{item.status}</td>
                            <td
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <button
                                type="button"
                                class="btn btn-primary mr-2"
                              >
                                Edit
                              </button>
                              <button type="button" class="btn btn-danger">
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
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
                    <h5 class="font-weight-bold">{userDetails.user_name}</h5>
                  </div>
                  <div>
                    <h6 class="font-weight-bold ml-1 ">
                      ({userDetails.employee_type})
                    </h6>
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

export default JobPost;
