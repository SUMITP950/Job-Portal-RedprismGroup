import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function BuddySurches() {
  useEffect(() => {
    document.title = "Job Search";
  }, []);

  return (
    <>
      <div class="py-4">
        <div class="container-fluid body-padding">
          <div class="row justify-content-around">
            <main class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div class="pt-3 body-color">
                <div class="container-fluid">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <div
                        class="d-flex justify-content-around"
                        style={{
                          borderRadius: "50px",
                          border: "1px solid rgb(6, 6, 6)",
                          padding: "10px",
                        }}
                      >
                        {/* <div
                          class="select2-dropdown bigdrop select2-dropdown--below"
                          dir="ltr"
                          style={{ width: "242.94px" }}
                        >
                          <span class="select2-search select2-search--dropdown">
                            <input
                              class="select2-search__field"
                              type="search"
                              tabindex="0"
                              autocomplete="off"
                              autocorrect="off"
                              autocapitalize="none"
                              spellcheck="false"
                              role="textbox"
                            />
                          </span>
                          <span class="select2-results">
                            <ul
                              class="select2-results__options"
                              role="tree"
                              id="select2-hess-results"
                              aria-expanded="true"
                              aria-hidden="false"
                            >
                              <li
                                class="select2-results__option select2-results__option--highlighted"
                                id="select2-hess-result-eq5h-Choose Your Class"
                                role="treeitem"
                                aria-selected="true"
                                data-select2-id="select2-hess-result-eq5h-Choose Your Class"
                              >
                                Choose Your Class
                              </li>
                              <li
                                class="select2-results__option"
                                id="select2-hess-result-wmt5-Private &amp; Group Lessons"
                                role="treeitem"
                                aria-selected="false"
                                data-select2-id="select2-hess-result-wmt5-Private &amp; Group Lessons"
                              >
                                Private &amp; Group Lessons
                              </li>
                              <li
                                class="select2-results__option"
                                id="select2-hess-result-16g5-THE FACILITATOR For Beginners"
                                role="treeitem"
                                aria-selected="false"
                                data-select2-id="select2-hess-result-16g5-THE FACILITATOR For Beginners"
                              >
                                THE FACILITATOR For Beginners
                              </li>
                              <li
                                class="select2-results__option"
                                id="select2-hess-result-0pc1-THE FACILITATOR For Pregnant"
                                role="treeitem"
                                aria-selected="false"
                                data-select2-id="select2-hess-result-0pc1-THE FACILITATOR For Pregnant"
                              >
                                THE FACILITATOR For Pregnant
                              </li>
                              <li
                                class="select2-results__option"
                                id="select2-hess-result-jdty-THE FACILITATOR Barre"
                                role="treeitem"
                                aria-selected="false"
                                data-select2-id="select2-hess-result-jdty-THE FACILITATOR Barre"
                              >
                                THE FACILITATOR Barre
                              </li>
                              <li
                                class="select2-results__option"
                                id="select2-hess-result-b18f-THE FACILITATOR Core"
                                role="treeitem"
                                aria-selected="false"
                                data-select2-id="select2-hess-result-b18f-THE FACILITATOR Core"
                              >
                                THE FACILITATOR Core
                              </li>
                              <li
                                class="select2-results__option"
                                id="select2-hess-result-iimm-THE FACILITATOR Restore"
                                role="treeitem"
                                aria-selected="false"
                                data-select2-id="select2-hess-result-iimm-THE FACILITATOR Restore"
                              >
                                THE FACILITATOR Restore
                              </li>
                            </ul>
                          </span>
                        </div> */}

                        <div class="dropdown">
                          <button
                            class="btn  dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img
                              class="dropdown-menu-img"
                              src="https://img.icons8.com/ios/50/popular-man.png"
                              alt=""
                            />
                            Type
                          </button>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>

                        <div class="dropdown">
                          <button
                            class="btn  dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="feather-map-pin mr-2 menu-icon"></i>{" "}
                            Location
                          </button>

                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8 ">
                  {" "}
                  <div
                    class="col-md-12 mt-5 "
                    style={{
                      border: "1px solid gray",
                      borderRadius: "15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div class="row px-2">
                      <div className="col-md-3">
                        <img
                          src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                          style={{ height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="col-md-5">
                        <h4 class="text-dark mt-2">Username</h4>
                        <p class=" ">
                          Business Development Manager
                          <br />
                          Confidential
                          <br />
                          Mumbai, Maharashtra
                        </p>
                      </div>
                      <div className="col-md-4 d-flex align-items-center">
                        <div className="ml-4">
                          <Link className="btn btn-dark">
                            <i className="feather-plus-circle"></i> Add buddies
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-12 mt-5 "
                    style={{
                      border: "1px solid gray",
                      borderRadius: "15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div class="row px-2">
                      <div className="col-md-3">
                        <img
                          src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                          style={{ height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="col-md-5">
                        <h4 class="text-dark mt-2">Username</h4>
                        <p class=" ">
                          Business Development Manager
                          <br />
                          Confidential
                          <br />
                          Mumbai, Maharashtra
                        </p>
                      </div>
                      <div className="col-md-4  d-flex align-items-center">
                        <div className="ml-4">
                          <Link className="btn btn-dark">
                            <i className="feather-plus-circle"></i> Add buddies
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
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
