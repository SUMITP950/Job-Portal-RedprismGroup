import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

export default function ProfileEdit() {
  useEffect(() => {
    document.title = "Profile Edit";
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);
  const [LastName, SetLastName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [mobile, SetMobile] = useState("");
  const [Location, setLocation] = useState("");
  const [Experience, SetExperience] = useState("");
  const [technology, setTechnology] = useState("");
  const [technologyList, setTechnologyList] = useState([]);
  const [company, SetCompany] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [ExperienceList, SetExperienceList] = useState([]);
  const [employeeImage, setEmployeeImage] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [employeeStatus, setEmployeeStatus] = useState("");
  const [employeeStatusIcon, setEmployeeStatusIcon] = useState("");
  const [lookingjob, setLookingjob] = useState("");
  const [noticePeriod, setnoticePeriod] = useState("");
  const [immediateJoiner, setimmediateJoiner] = useState("");
  const [freasher, setFreasher] = useState("");

  // const handleChange = (event) => {
  //   SetDmonth(event.target.value);
  //   SetDay(event.target.value);
  //   SetYear(event.target.value);
  //   SetGender(event.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     Name,
  //     username,
  //     Email,
  //     mobile,
  //     Location,
  //     Website,
  //     Organization,
  //     Company,
  //     Position,
  //     From,
  //     To,
  //     Dmonth,
  //     Day,
  //     Year,
  //     Gender,
  //   };
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/posts", data)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

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

  // fatch experience list
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobPost/getExpList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        SetExperienceList(res.data.expList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // fatch technology list
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobseekerRegister/getTechList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setTechnologyList(res.data.techList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Get profile details
  useEffect(() => {
    getMyProfileDetails();
  }, []);
  const getMyProfileDetails = () => {
    axios
      .get("http://testredprism.co/api/profileDetails/getMyProfileDetails", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        let profileDetails = res.data.profileDetails[0];
        setUsername(res.data.profileDetails[0].user_name);
        setFirstName(res.data.profileDetails[0].first_name);
        SetLastName(res.data.profileDetails[0].last_name);
        setTechnology(res.data.profileDetails[0].technology[0].tech_name);
        setEmployeeImage(res.data.profileDetails[0].employee_image);
        setEmail(res.data.profileDetails[0].email_id);
        SetMobile(res.data.profileDetails[0].ph_num);
        setEmployeeType(res.data.profileDetails[0].employee_type);
        setEmployeeStatus(res.data.profileDetails[0].employee_status);
        setEmployeeStatusIcon(res.data.profileDetails[0].status_icon);
        setLookingjob(res.data.profileDetails[0].looking_job);
        setnoticePeriod(res.data.profileDetails[0].notice_period);
        setimmediateJoiner(res.data.profileDetails[0].immediate_joinner);
        setFreasher(res.data.profileDetails[0].fresher);
        // setLocation(
        //   res.data.profileDetails[0].location.length > 0
        //     ? `${res.data.profileDetails[0].location[0].area},${res.data.profileDetails[0].location[0].city},${res.data.profileDetails[0].location[0].state}`
        //     : ""
        // );
        res.data.profileDetails[0].location.length > 0
          ? setLocation(profileDetails.location[0]._id)
          : setLocation("");
        res.data.profileDetails[0].company_details.length > 0
          ? SetCompany(profileDetails.company_details[0]._id)
          : SetCompany("");
        res.data.profileDetails[0].experience_master.length > 0
          ? SetExperience(profileDetails.experience_master[0]._id)
          : SetExperience("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFile = (e) => {
    // document.getElementById("progress").style.display = "flex";

    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append("employee_image", file);
    axios
      .post(
        "http://testredprism.co/api/profileDetails/updateProfilePhoto",
        formdata,
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
            "Content-Type": "multipart/form-data",
          },
          // onUploadProgress: (event) => {
          // setProgressBar(Math.round(100 * event.loaded) / event.total);
          // },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          toast.success(`${res.data.mssg}`);
        }
        if (res.data.status === "error") {
          toast.error(`${res.data.mssg}`);
        }
      })
      .catch((err) => console.log(err));
  };
  // const savehr = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       "http://testredprism.co/api/profileDetails/updateHrProfileDetails",
  //       {
  //         first_name: FirstName,
  //         last_name: LastName,
  //         user_name: username,
  //         ph_num: mobile,
  //         email_id: Email,
  //         company_code: Company,
  //       },
  //       {
  //         headers: {
  //           "auth-token": localStorage.getItem("authToken"),
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data.status === "success") {
  //         toast.success(`${res.data.mssg}`);
  //       }
  //       if (res.data.status === "error") {
  //         toast.error(`${res.data.mssg}`);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const saveJobSeeker = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://testredprism.co/api/profileDetails/updateJobSeekerProfileDetails",

        {
          first_name: FirstName,
          last_name: LastName,
          user_name: username,
          ph_num: mobile,
          email_id: Email,
          company_code: company,
          employee_status: employeeStatus,
          status_icon: employeeStatusIcon,
          tech_code: technology,
          exp_code: Experience,
          location_code: Location,
          looking_job: lookingjob,
          notice_period: noticePeriod,
          immediate_joinner: immediateJoiner,
          fresher: freasher,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          toast.success(`${res.data.mssg}`);
        }
        if (res.data.status === "error") {
          console.log(res.data);
          toast.error(`${res.data.mssg}`);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {" "}
      <div class="py-4">
        <div class="container">
          <div class="row">
            <aside class="col-md-4">
              <div class="mb-3 border rounded bg-white profile-box text-center w-10">
                <div class="p-4 d-flex align-items-center">
                  {employeeImage && (
                    <img
                      src={`http://testredprism.co/${employeeImage}`}
                      class="img-fluid mt-2 mb-2 "
                      alt="Responsive image"
                      style={{
                        width: "175px",
                        maxWidth: "100%",
                        height: "175px",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  <div class="p-4">
                    <label
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="Upload New Picture"
                      class="btn btn-info m-0"
                      for="fileAttachmentBtn"
                    >
                      <i class="feather-image"></i>
                      <input
                        id="fileAttachmentBtn"
                        name="file-attachment"
                        type="file"
                        class="d-none"
                        onChange={handleFile}
                      />
                    </label>
                    <button
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="Delete"
                      type="submit"
                      class="btn btn-danger"
                    >
                      <i class="feather-trash-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            <main class="col-md-8">
              <div class="border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Edit Basic Info</h6>
                  <p class="mb-0 mt-0 small">
                    Lorem ipsum dolor sit amet, consecteturs.
                  </p>
                </div>
                <div class="box-body p-3">
                  <form
                    // onSubmit={handleSubmit}
                    class="js-validate"
                    novalidate="novalidate"
                  >
                    <div class="row">
                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="nameLabel" class="form-label">
                            First Name
                            <span class="text-danger">*</span>
                          </label>
                          <div class="form-group">
                            <input
                              onChange={(e) => setFirstName(e.target.value)}
                              value={FirstName}
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Enter your name"
                              aria-label="Enter your name"
                              required
                              aria-describedby="nameLabel"
                              data-msg="Please enter your name."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                            <small class="form-text text-muted">
                              Displayed on your public profile, notifications
                              and other places.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="nameLabel" class="form-label">
                            Last Name
                            <span class="text-danger">*</span>
                          </label>
                          <div class="form-group">
                            <input
                              onChange={(e) => SetLastName(e.target.value)}
                              value={LastName}
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Enter your name"
                              aria-label="Enter your name"
                              required
                              aria-describedby="nameLabel"
                              data-msg="Please enter your name."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                            <small class="form-text text-muted">
                              Displayed on your public profile, notifications
                              and other places.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="emailLabel" class="form-label">
                            Email address
                            <span class="text-danger">*</span>
                          </label>
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={Email}
                              placeholder="Enter your email address"
                              aria-label="Enter your email address"
                              required
                              aria-describedby="emailLabel"
                              data-msg="Please enter a valid email address."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                            <small class="form-text text-muted">
                              We'll never share your email with anyone else.
                            </small>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="locationLabel" class="form-label">
                            Location
                            <span class="text-danger">*</span>
                          </label>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="location"
                              onChange={(e) => setLocation(e.target.value)}
                              value={Location}
                              placeholder="Enter your location"
                              aria-label="Enter your location"
                              required
                              aria-describedby="locationLabel"
                              data-msg="Please enter your location."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="organizationLabel" class="form-label">
                            Organization
                            <span class="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            id="experienceYear"
                            value={company}
                            onChange={(e) => SetCompany(e.target.value)}
                            required
                          >
                            {/* <option>{Company}</option> */}
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
                      </div>

                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="websiteLabel" class="form-label">
                            Experience
                          </label>
                          <div class="form-group">
                            <select
                              className="form-control"
                              id="experienceYear"
                              onChange={(e) => SetExperience(e.target.value)}
                              value={Experience}
                              required
                            >
                              {/* <option>{Experience}</option> */}
                              {ExperienceList.map((item, id) => {
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
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="phoneNumberLabel" class="form-label">
                            Mobile number
                            <span class="text-danger">*</span>
                          </label>
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="tel"
                              name="phoneNumber"
                              onChange={(e) => SetMobile(e.target.value)}
                              value={mobile}
                              placeholder="Enter your phone number"
                              aria-label="Enter your phone number"
                              required
                              aria-describedby="phoneNumberLabel"
                              data-msg="Please enter a valid phone number"
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="usernameLabel" class="form-label">
                            Username
                            <span class="text-danger">*</span>
                          </label>
                          <div class="form-group">
                            <input
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              type="text"
                              class="form-control"
                              name="username"
                              placeholder="Enter your username"
                              aria-label="Enter your username"
                              required
                              aria-describedby="usernameLabel"
                              data-msg="Please enter your username."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="websiteLabel" class="form-label">
                            Skills
                          </label>
                          <div class="form-group">
                            <select
                              className="form-control"
                              id="experienceYear"
                              onChange={(e) => setTechnology(e.target.value)}
                              required
                              value={technology}
                            >
                              {/* <option>{technology}</option> */}
                              {technologyList.map((item, id) => {
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
                      </div>
                      <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label id="websiteLabel" class="form-label">
                            Employee Type
                          </label>
                          <div class="form-group">
                            <select
                              className="form-control"
                              id="experienceYear"
                              disabled
                            >
                              <option>{employeeType}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* <div class="col-sm-6 mb-2">
                        <div class="js-form-message">
                          <label class="form-label">
                            Preferred language
                            <span class="text-danger">*</span>
                          </label>
                          <div class="form-group">
                            <select class="custom-select">
                              <option value="">Select language</option>
                              <option value="languageSelect1" selected="">
                                English
                              </option>
                              <option value="languageSelect2">Français</option>
                              <option value="languageSelect3">Deutsch</option>
                              <option value="languageSelect4">Português</option>
                            </select>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </form>
                </div>
              </div>
              {/* <div class="border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Experience</h6>
                  <p class="mb-0 mt-0 small">
                    Tell about your work, job, and other experiences.
                  </p>
                </div>
                <div class="box-body px-3 pt-3 pb-0">
                  <div class="row">
                    <div class="col-sm-6 mb-4">
                      <label id="FROM" class="form-label">
                        FROM
                      </label>

                      <div class="input-group">
                        <input
                          onChange={(e) => SetFrom(e.target.value)}
                          value={From}
                          type="text"
                          class="form-control"
                          placeholder="From"
                          aria-label="FROM"
                          aria-describedby="FROM"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 mb-4">
                      <label id="TO" class="form-label">
                        TO
                      </label>

                      <div class="input-group">
                        <input
                          onChange={(e) => SetTo(e.target.value)}
                          value={To}
                          type="text"
                          class="form-control"
                          placeholder="TO"
                          aria-label="TO"
                          aria-describedby="TO"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 mb-4">
                      <label id="companyLabel" class="form-label">
                        Company
                      </label>

                      <div class="input-group">
                        <select
                          type="text"
                          onChange={(e) => SetOrganization(e.target.value)}
                          value={Organization}
                          class="form-control"
                          placeholder="Enter your company title"
                          aria-label="Enter your company title"
                          aria-describedby="companyLabel"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 mb-4">
                      <label id="positionLabel" class="form-label">
                        Position
                      </label>

                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => SetPosition(e.target.value)}
                          value={Position}
                          placeholder="Enter your position"
                          aria-label="Enter your position"
                          aria-describedby="positionLabel"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div class="mb-3 text-right">
                <a
                  class="font-weight-bold btn btn-link rounded btn-light  p-3"
                  href="#"
                >
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; Cancel &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </a>
                <button
                  onClick={saveJobSeeker}
                  class="font-weight-bold btn rounded p-3 savechanges btn-warning"
                >
                  &nbsp;&nbsp;&nbsp;&nbsp; Save Changes &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
