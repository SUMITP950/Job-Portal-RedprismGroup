import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Component/auth.js";

import { SearchResultsList } from "../../Component/SearchBar/SearchResultList";
import { toast } from "react-toastify";

const JobPost = () => {
  const [userDetails, SetUserDetails] = useState("");

  const fetchUserDetails = async () => {
    const userData = await auth();
    SetUserDetails(userData);
  };

  useEffect(() => {
    document.title = "Job Post";
  }, []);
  // const [results, setResults] = useState([]);
  const options = [
    { value: "Kolkata", label: "Kolkata" },
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
  ];
  const options1 = [
    { value: "React js", label: "React js" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [location, setLoctions] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [experienceYear, setExperienceYear] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleLocationsChange = (selectedOptions) => {
    const locations = selectedOptions.map((option) => option.value);
    setLoctions(locations);
  };

  const handleTechnicalSkillsChange = (selectedOptions) => {
    const selectedSkills = selectedOptions.map((option) => option.value);
    setTechnicalSkills(selectedSkills);
  };

  const handleSalaryRangeChange = (event) => {
    setSalaryRange(event.target.value);
  };

  const handleExperienceYearChange = (event) => {
    setExperienceYear(event.target.value);
  };

  // Get user details
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = {
      title: title,
      description: description,
      location: location,
      technicalSkills: technicalSkills,
      salaryRange: salaryRange,
      experienceYear: experienceYear,
    };

    try {
      await axios.post("http://localhost:3030/job_post", formData);
      // console.log("Form submitted successfully");
      toast.success(`Form submitted successfully`);
    } catch (error) {
      // console.error("Form submission error:", error);
      toast.success(`Failed : ${error.message}`);
    }
    setSubmitting(false);
    setTitle("");
    setDescription("");
    setLoctions("");
    setTechnicalSkills("");
    setSalaryRange("");
    setExperienceYear("");
  };

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
                  className="nav-link "
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
                  className="nav-link active"
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
                className="tab-pane fade"
                id="home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Post a Job</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="title">Job Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="Enter the job title"
                          value={title}
                          onChange={handleTitleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="salaryRange">Salary Range</label>
                        <select
                          className="form-control"
                          id="salaryRange"
                          value={salaryRange}
                          onChange={handleSalaryRangeChange}
                          required
                        >
                          <option value="">-- Select Salary Range --</option>
                          <option value="60k-1LPA">60k - 1LPA</option>
                          <option value="1LPA-2LPA">1LPA - 2LPA</option>
                          <option value="2LPA-6LPA">2LPA - 6LPA</option>
                          <option value="6LPA-12LPA">6LPA - 12LPA</option>
                          <option value="12LPA-Above">12LPA and Above</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <b htmlFor="description" style={{ paddingLeft: "8px" }}>
                          Location
                        </b>
                        <div className="form-group">
                          <select className="form-control">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <b htmlFor="description" style={{ paddingLeft: "8px" }}>
                          Technology
                        </b>
                        <div className="form-group">
                          <select className="form-control">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
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
                          value={experienceYear}
                          onChange={handleExperienceYearChange}
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
                        <label htmlFor="description">Job Description</label>
                        <textarea
                          className="form-control"
                          id="description"
                          placeholder="Enter the job description"
                          rows="5"
                          value={description}
                          onChange={handleDescriptionChange}
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn apply-btn"
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Submit"}
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
                {/* Job Post list*/}
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
