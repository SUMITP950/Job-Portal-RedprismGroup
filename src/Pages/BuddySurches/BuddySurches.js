import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";


export default function BuddySurches() {
    
       
   
    useEffect(() => {
        document.title = "Buddy Search";
      }, []);
  const [data, setData]=useState([]);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

  return (
    <>
      
      <div class="py-4 bg-white">
        <div class="container-fluid body-padding ">
            <div class="row justify-content-center">
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
            </div>
            {(<div class="row">
            {data.map((data, i) => (
            <><div class="col-md-3">
                    <a href="profile.html">
                        <div class="border network-item rounded mb-3">
                            <div class="p-3 d-flex align-items-center network-item-header">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src={data.image} alt=""/>
                                </div>
                                <div class="font-weight-bold">
                                    <h6 class="font-weight-bold text-dark mb-0 dataover" title={data.title}>{data.title}</h6>
                                    <div class="small text-black-50">Photographer at Photography</div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                                <div class="overlap-rounded-circle">
                                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top"
                                        title="Sophia Lee" src="img/p1.png" alt=""/>
                                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top"
                                        title="John Doe" src="img/p2.png" alt=""/>
                                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top"
                                        title="Julia Cox" src="img/p3.png" alt=""/>
                                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top"
                                        title="Robert Cook" src="img/p4.png" alt=""/>
                                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top"
                                        title="Sophia Lee" src="img/p5.png" alt=""/>
                                </div>
                                <span class="font-weight-bold small text-primary">4 mutual connections</span>
                            </div>
                            <div class="network-item-footer py-2 d-flex text-center">
                                <div class="col-6 pl-3 pr-1">
                                    <button type="button" class="btn btn-primary btn-sm btn-block"> Connect </button>
                                </div>
                                <div class="col-6 pr-3 pl-1">
                                    <button type="button" class="btn btn-outline-primary btn-sm btn-block"> <i
                                            class="feather-user-plus"></i> Follow </button>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                </>))}
            </div>)}
        </div>
    </div>  
       
    </>
  );
}