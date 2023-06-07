import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";


export default function JobSearch() {
  useEffect(() => {
    document.title = "Job Search";
  }, []);
 

  return (
    <>
      
      <div className="container-fluid body-padding "><div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="d-flex justify-content-around"
                        style={{borderRadius: "50px", border:"1px solid rgb(6, 6, 6)",padding:"10px"}}>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="dropdown-menu-img" src="https://img.icons8.com/ios/50/000000/circuit.png"
                                    alt="" /> Technology
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="dropdown-menu-img" src="https://img.icons8.com/ios/50/popular-man.png"
                                    alt="" /> Experience
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="feather-map-pin mr-2 menu-icon"></i> Location
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
                <main class="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                    <div class="box rounded mb-3 osahan-share-post">
                        <div class="wrapper-2">

                            <ul class="tabs-box justify-content-center">
                                <li class="tab"><i class="feather-home mr-2 menu-icon"></i> Work Form Home
                                </li>
                                <li class="tab active"><i class="feather-clock mr-2 menu-icon"></i> Part
                                    time</li>
                                <li class="tab"><i class="feather-cloud-off mr-2 menu-icon"></i> Night Shift
                                </li>
                                <li class="tab"><i class="feather-user mr-2 menu-icon"></i> Jobs For Women
                                </li>
                                <li class="tab"><img src="img/icon/2255545.png" alt="" class="icon-image" />
                                    Jobs For
                                    Fresher</li>
                            </ul>

                        </div>
                    </div>
                </main>
            </div></div>   
       
    </>
  );
}