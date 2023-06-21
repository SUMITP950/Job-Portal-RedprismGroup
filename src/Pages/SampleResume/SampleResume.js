import React, { useEffect, useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Select from "react-select";

export default function SampleResume(props) {
  useEffect(() => {
    document.title = "Sample Resume";
  }, []);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div class="py-4">
        <div class="container-fluid body-padding">
          <div class="row justify-content-around">
          <main class="col col-xl-7 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">

<div class="col-lg-12 mb-3">
    <div class="text-dark" style={{fontSize: "20px" , fontWeight: "bold"}}>
        <span
            style={{border:"3px solid #000" ,border: "none", borderBottom: "5px solid #000", paddingBottom: "2px"}}>Sample
            Resume</span>
    </div>
</div>
<div class="col-lg-12 col-md-12 card-out-border">
    <div class="row">
        <div class="col-lg-4 col-md-4">
            <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                <img class="card-img-top resume-image"
                    src="https://www.slideteam.net/media/catalog/product/cache/1280x720/p/r/professional_resume_illustration_cv_design_template_slide01.jpg"
                    alt="Card image cap" />
                <h6 class="text-dark text-center mt-2">Consectetur adipisicing elit</h6>
                <div class="card-body text-center">
                    <span class="badge badge-success">View</span>
                    <span class="badge badge-danger">Download</span>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4">
            <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                <img class="card-img-top resume-image"
                    src="https://www.slideteam.net/media/catalog/product/cache/1280x720/r/e/resume_template_creative_cv_design_for_professionals_slide01.jpg"
                    alt="Card image cap" />
                <h6 class="text-dark text-center mt-2">Consectetur adipisicing elit</h6>
                <div class="card-body text-center">
                    <span class="badge badge-success ">View</span>
                    <span class="badge badge-danger">Download</span>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4">
            <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                <img class="card-img-top resume-image"
                    src="https://dsgrcdnblobprod5u3.azureedge.net/uploadedfiles/uploads/a8af7250-e605-4e0c-8cb6-005f6fa12c59-d5ef38c8-3741-4713-af61-7cf422f716bc-cubist-resume-00.webp"
                    alt="Card image cap" />
                <h6 class="text-dark text-center mt-2">Consectetur adipisicing elit</h6>
                <div class="card-body text-center">
                    <span class="badge badge-success">View</span>
                    <span class="badge badge-danger">Download</span>
                </div>
            </div>
        </div>
    </div>
</div>

</main>
            <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 dn">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm pt-4 pb-4">
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-user left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">User Name</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-edit left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Edit Profile</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <img src="img/icon/smile.svg" alt="" />
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">User Profile</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-users left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">My Buddies</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-briefcase left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Jobs</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-save left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">My Jobs</span>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12 dn">
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
                      <span class="font-weight-bold">Settings</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-log-out left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Sign Out</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-file-text left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Simple Resume</span>
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
                      <span class="font-weight-bold">Trainings</span>
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
                      <span class="font-weight-bold">Fresher Jobs</span>
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
                      <span class="font-weight-bold">Internship</span>
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
