import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand osahan-nav-top head-padding osahan-nav-top" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand mr-2" href="#">
                {/* <img src="img/logo.svg" alt=""/>  */}
                Your Logo
            </a>
            <form class="d-none d-sm-inline-block form-inline m-auto my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control shadow-none border-0 search-btn search-placeholder"
                        placeholder="Search Buddies" aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button class="btn search-icon" type="button">
                            <i class="feather-search searchicon"></i>
                        </button>
                    </div>
                </div>
            </form>
            <ul class="navbar-nav ml-auto d-flex align-items-center">

                <li class="nav-item dropdown no-arrow d-sm-none">
                    <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="feather-search mr-2"></i>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form class="form-inline mr-auto w-100 navbar-search">
                            <div class="input-group">
                                <input type="text" class="form-control border-0 shadow-none"
                                    placeholder="Search people, jobs and more..." aria-label="Search"
                                    aria-describedby="basic-addon2"/>
                                <div class="input-group-append">
                                    <button class="btn" type="button">
                                        <i class="feather-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="jobs.html"><i class="feather-home mr-2 menu-icon"></i><span
                            class="d-none d-lg-inline">Home</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="connection.html"><i class="feather-users mr-2 menu-icon"></i><span
                            class="d-none d-lg-inline">Buddies</span></a>
                </li>

                <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="feather-message-square menu-icon"></i>

                        <span class="badge badge-danger badge-counter">8</span>
                    </a>

                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                        <h6 class="dropdown-header">
                            Message Center
                        </h6>
                        <a class="dropdown-item d-flex align-items-center" href="messages.html">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/p1.png" alt=""/>
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div class="font-weight-bold overflow-hidden">
                                <div class="text-truncate">Hi there! I am wondering if you can help me with a problem
                                    I've been having.</div>
                                <div class="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="messages.html">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/p2.png" alt=""/>
                                <div class="status-indicator"></div>
                            </div>
                            <div class="overflow-hidden">
                                <div class="text-truncate">I have the photos that you ordered last month, how would you
                                    like them sent to you?</div>
                                <div class="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="messages.html">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/p3.png" alt=""/>
                                <div class="status-indicator bg-warning"></div>
                            </div>
                            <div class="overflow-hidden">
                                <div class="text-truncate">Last month's report looks great, I am very happy with the
                                    progress so far, keep up the good work!</div>
                                <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="messages.html">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/p4.png" alt=""/>
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div class="overflow-hidden">
                                <div class="text-truncate">Am I a good boy? The reason I ask is because someone told me
                                    that people say this to all dogs, even if they aren't good...</div>
                                <div class="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </a>
                        <a class="dropdown-item text-center small text-gray-500" href="messages.html">Read More
                            Messages</a>
                    </div>
                </li>
                <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="feather-bell menu-icon"></i>

                        <span class="badge badge-info badge-counter">6</span>
                    </a>

                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                        <h6 class="dropdown-header">
                            Alerts Center
                        </h6>
                        <a class="dropdown-item d-flex align-items-center" href="notifications.html">
                            <div class="mr-3">
                                <div class="icon-circle bg-primary">
                                    <i class="feather-download-cloud text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 12, 2019</div>
                                <span class="font-weight-bold">A new monthly report is ready to download!</span>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="notifications.html">
                            <div class="mr-3">
                                <div class="icon-circle bg-success">
                                    <i class="feather-edit text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 7, 2019</div>
                                $290.29 has been deposited into your account!
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="notifications.html">
                            <div class="mr-3">
                                <div class="icon-circle bg-warning">
                                    <i class="feather-folder text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 2, 2019</div>
                                Spending Alert: We've noticed unusually high spending for your account.
                            </div>
                        </a>
                        <a class="dropdown-item text-center small text-gray-500" href="notifications.html">Show All
                            Alerts</a>
                    </div>
                </li>


                <li class="nav-item ml-3">
                    <a class="btn btn-light upload-btn" href="jobs.html"><img
                            src="https://img.icons8.com/fluency/48/upload-2.png" alt="" class="icon-img" /><span
                            class="d-none d-lg-inline color-black upload-btn-text">Upload
                            resume</span></a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  );
}
