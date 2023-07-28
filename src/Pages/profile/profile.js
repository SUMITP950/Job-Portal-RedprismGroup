/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [employeeImage, setEmployeeImage] = useState("");
  const [email, setEmail] = useState("");
  const [phnmbr, setPhNumber] = useState("");
  const [lookingjob, setLookingJob] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [immediateJoiner, setImmediateJoiner] = useState("");
  const [fresher, setFresher] = useState("");
  const [cv, setCv] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [technology, setTechnology] = useState("");
  const [experience, setExperience] = useState("");
  const [progressbar,setProgressBar] =useState(0);

  //Protecting this page
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  //Fetch profile details
  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = ()=>{
    axios
    .get("http://testredprism.co/api/profileDetails/getMyProfileDetails", {
      headers: {
        "auth-token": localStorage.getItem("authToken"),
      },
    })
    .then((res) => {
      setUserName(res.data.profileDetails[0].user_name);
      setFirstName(res.data.profileDetails[0].first_name);
      setLastName(res.data.profileDetails[0].last_name);
      setEmployeeType(res.data.profileDetails[0].employee_type);
      setEmployeeImage(res.data.profileDetails[0].employee_image);
      setEmail(res.data.profileDetails[0].email_id);
      setPhNumber(res.data.profileDetails[0].ph_num);
      setLookingJob(res.data.profileDetails[0].looking_job);
      setNoticePeriod(res.data.profileDetails[0].notice_period);
      setImmediateJoiner(res.data.profileDetails[0].immediate_joinner);
      setFresher(res.data.profileDetails[0].fresher);
      setCv(res.data.profileDetails[0].resume);
      setLocation(
        res.data.profileDetails[0].location.length > 0
          ? `${res.data.profileDetails[0].location[0].area},${res.data.profileDetails[0].location[0].city},${res.data.profileDetails[0].location[0].state}`
          : ""
      );
      setCompany(
        res.data.profileDetails[0].company_details.length > 0
          ? res.data.profileDetails[0].company_details[0].company_name
          : ""
      );
      setTechnology(
        res.data.profileDetails[0].technology.length > 0
          ? res.data.profileDetails[0].technology[0].tech_name
          : ""
      );
      setExperience(
        res.data.profileDetails[0].experience_master.length > 0
          ? res.data.profileDetails[0].experience_master[0].experience
          : ""
      );

      if (res.data.profileDetails[0].employee_type === "Hr") {
        document.getElementById("cv").style.display = "none";
        document.getElementById("tech").style.display = "none";
        document.getElementById("lookingjob").style.display = "none";
        document.getElementById("noticePeriod").style.display = "none";
        document.getElementById("immediateJoiner").style.display = "none";
        document.getElementById("fresher").style.display = "none";
        document.getElementById("experience").style.display = "none";
        document.getElementById("location").style.display = "none";
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleFile=(e)=>{
    const file= e.target.files[0];
    const formdata= new FormData();
    formdata.append("employee_image", file);
    axios.post("http://testredprism.co/api/profileDetails/updateProfilePhoto",formdata,{
      headers: {
        "auth-token": localStorage.getItem("authToken"),
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: event=>{
        setProgressBar(Math.round(100* event.loaded)/event.total)
      }
    })
    .then(res=> { if (res.data.status === "success")
    {
      getProfileDetails();
      toast.success(`${res.data.mssg}`);
    }
    if (res.data.status === "error") {
      toast.error(`${res.data.mssg}`);
    }
  })
    .catch(err=> console.log(err))
  }

  return (
    <div class="py-4">
      <div class="container-fluid body-padding">
        <div class="row">
          <aside class="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
            <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
              <div class="py-4 px-3 border-bottom">
                {employeeImage && <img
                  src={`http://testredprism.co/${employeeImage}`}
                  class="img-fluid mt-2 "
                  alt="Responsive image"
                  style={{width:"auto", maxWidth:"100%", height:"250px",
                  borderRadius:"50px"
                }}
                />}
                
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" 
                  role="progressbar" aria-label='progressbar' aria-valuenow={progressbar}
                  aria-valuemin="0" aria-valuemax="100" style={{width:`${progressbar}%`}}
                  >

                  </div>
                </div>
                <div className="bg-white p-2 rounded w-50 vh-50">
                  <input type="file" onChange={handleFile}/>

                </div>
                {/* <div class="text-center mt-2 mb-2">
                  <button type="button" class="btn btn-outline-primary btn-sm">
                    <i class="feather-eye"></i>
                    Upload Photo
                  </button>
                </div> */}
                <h5 class="font-weight-bold text-dark mb-1 mt-4">{userName}</h5>
                <p class="mb-0 text-dark">{employeeType}</p>
              </div>

              <div class="col-12 border-bottom p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <i class="feather-user menu-icon"></i>{" "}
                  {`${firstName} ${lastName}`}
                </h6>
              </div>

              <div class="col-12 border-bottom p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <i class="feather-mail menu-icon"></i> {email}
                </h6>
              </div>
              <div class="col-12 p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <i class="feather-phone menu-icon"></i>
                  {phnmbr}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="location">
                <h6 class="font-weight-bold text-dark mb-1" >
                  <i class="feather-home menu-icon"></i> {location}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="tech">
                <h6 class="font-weight-bold text-dark mb-1">
                  Skills : {technology}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="lookingjob">
                <h6 class="font-weight-bold text-dark mb-1">
                  Looking Job : {lookingjob}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="noticePeriod">
                <h6 class="font-weight-bold text-dark mb-1">
                  Notice Period : {noticePeriod}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="immediateJoiner">
                <h6 class="font-weight-bold text-dark mb-1">
                  Immediate Joinner : {immediateJoiner}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="fresher">
                <h6 class="font-weight-bold text-dark mb-1">
                  Fresher : {fresher}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="experience">
                <h6 class="font-weight-bold text-dark mb-1">
                  Experience : {experience}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  Company : {company}
                </h6>
              </div>

              <div class="overflow-hidden border-top">
                <a class="font-weight-bold p-3 d-block" href="sign-in.html">
                  <Link to="/">Log Out</Link>
                </a>
              </div>
            </div>
          </aside>

          <main class="col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
            <div class="box shadow-sm border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Experience</h6>
              </div>
              <div class="box-body p-3 border-bottom">
                <div class="d-flex align-items-top job-item-header pb-2">
                  <div class="mr-2">
                    <h6 class="font-weight-bold text-dark mb-0">
                      Web designer
                    </h6>
                    <div class="text-truncate text-primary">Spotify Inc.</div>
                    <div class="small text-gray-500">
                      Oct 2020 - Present (4 year 7 month)
                    </div>
                  </div>
                  <img
                    class="img-fluid ml-auto mb-auto"
                    src="img/l3.png"
                    alt=""
                  />
                </div>
                <p class="mb-0">
                  Find the most qualified people in the most unexpected places.
                  Information for applicants to consider when applying for local
                  positions.
                </p>
              </div>
              <div class="box-body p-3 border-bottom">
                <div class="d-flex align-items-top job-item-header pb-2">
                  <div class="mr-2">
                    <h6 class="font-weight-bold text-dark mb-0">
                      Cloud Software Engineer
                    </h6>
                    <div class="text-truncate text-primary">Spotify Inc.</div>
                    <div class="small text-gray-500">
                      Oct 2020 - Present (4 year 7 month)
                    </div>
                  </div>
                  <img
                    class="img-fluid ml-auto mb-auto"
                    src="img/l6.png"
                    alt=""
                  />
                </div>
                <p class="mb-0">
                  Find the most qualified people in the most unexpected places.
                  Information for..
                </p>
              </div>
              <div class="box-body p-3">
                <div class="d-flex align-items-top job-item-header pb-2">
                  <div class="mr-2">
                    <h6 class="font-weight-bold text-dark mb-0">
                      UI/UX designer
                    </h6>
                    <div class="text-truncate text-primary">Behance</div>
                    <div class="small text-gray-500">
                      Oct 2020 - Present (4 year 7 month)
                    </div>
                  </div>
                  <img
                    class="img-fluid ml-auto mb-auto"
                    src="img/l2.png"
                    alt=""
                  />
                </div>
                <p class="mb-0">
                  Wualified people in the most unexpected places. Information
                  for applicants to consider when applying for local positions.
                  The largest community on the web to find and list jobs that
                  aren't restricted by commutes or a specific location.
                </p>
              </div>
            </div>

            <div class="box shadow-sm border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Education</h6>
              </div>
              <div class="box-body p-3 border-bottom">
                <div class="d-flex align-items-top job-item-header pb-2">
                  <div class="mr-2">
                    <h6 class="font-weight-bold text-dark mb-0">
                      Stanford University
                    </h6>
                    <div class="text-truncate text-primary">
                      Master’s programmes
                    </div>
                    <div class="small text-gray-500">
                      Oct 2020 - Present (4 year 7 month)
                    </div>
                  </div>
                  <img
                    class="img-fluid ml-auto mb-auto"
                    src="img/e1.png"
                    alt=""
                  />
                </div>
                <p class="mb-0">
                  Find the most qualified people in the most unexpected places.
                  Information for applicants to consider when applying for local
                  positions.
                </p>
              </div>
              <div class="box-body p-3">
                <div class="d-flex align-items-top job-item-header pb-2">
                  <div class="mr-2">
                    <h6 class="font-weight-bold text-dark mb-0">
                      Harvard University
                    </h6>
                    <div class="text-truncate text-primary">
                      Maths and science education
                    </div>
                    <div class="small text-gray-500">
                      Oct 2020 - Present (4 year 7 month)
                    </div>
                  </div>
                  <img
                    class="img-fluid ml-auto mb-auto"
                    src="img/e2.png"
                    alt=""
                  />
                </div>
                <p class="mb-0">
                  Wualified people in the most unexpected places. Information
                  for applicants to consider when applying for local positions.
                </p>
              </div>
            </div>
          </main>
          <aside class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <div
              class="shadow-sm border rounded bg-white job-item mb-3"
              id="cv"
            >
              <div class="d-flex align-items-center  justify-content-between p-3 job-item-header">
                <div class="overflow-hidden mr-2">
                  <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                    CV
                  </h6>
                </div>
                <img
                  src={`http://testredprism.co/${cv}`}
                  class="img-fluid mt-2 rounded-circle"
                  alt="Responsive image"
                />
              </div>
              <div className="bg-white p-2 rounded w-50 vh-50">
                  <input type="file" onChange={handleFile}/>

                </div>
              {/* <div class="text-center mb-3">
                <button type="button" class="btn btn-outline-primary btn-sm">
                  <i class="feather-eye"></i>
                  Upload
                </button>
              </div> */}
              <div class="p-3 job-item-footer border-top"></div>
            </div>
            <div class="shadow-sm border rounded bg-white job-item mb-3">
              <div class="d-flex align-items-center p-3 job-item-header">
                <div class="overflow-hidden mr-2">
                  <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                    Achievement
                  </h6>
                </div>
                <i class="feather-file-text menu-icon ml-auto"></i>
              </div>
              <div class="text-center mb-3">{/* Add Achievement */}</div>
              <div class="p-3 job-item-footer border-top"></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
