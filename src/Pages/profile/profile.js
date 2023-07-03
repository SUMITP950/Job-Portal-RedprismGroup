import React from "react";
import { Link } from "react-router-dom";

export default function profile() {
  return (
    <div class="py-4">
      <div class="container-fluid body-padding">
        <div class="row">
          <aside class="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
            <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
              <div class="py-4 px-3 border-bottom">
                <img
                  src="img/p13.png"
                  class="img-fluid mt-2 rounded-circle"
                  alt="Responsive image"
                />
                <h5 class="font-weight-bold text-dark mb-1 mt-4">
                  Gurdeep Osahan
                </h5>
                <p class="mb-0 text-muted">UI / UX Designer</p>
              </div>

              <div class="col-12 border-bottom p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <i class="feather-mail menu-icon"></i> 261imrankhan@gmail.com
                </h6>
              </div>
              <div class="col-12 p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <i class="feather-phone menu-icon"></i>+91 98754 11657
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <i class="feather-map-pin menu-icon"></i> Location
                </h6>
              </div>

              <div class="overflow-hidden border-top">
                <a class="font-weight-bold p-3 d-block" href="sign-in.html">
                  Log Out
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
            <div class="shadow-sm border rounded bg-white job-item mb-3">
              <div class="d-flex align-items-center p-3 job-item-header">
                <div class="overflow-hidden mr-2">
                  <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                    CV
                  </h6>
                </div>
                <i class="feather-file-text menu-icon ml-auto"></i>
              </div>
              <div class="text-center mb-3">
                <button type="button" class="btn btn-outline-primary btn-sm">
                  <i class="feather-eye"></i>
                  View
                </button>
              </div>
              <div class="p-3 job-item-footer border-top">
                <small class="text-gray-500">
                  <i class="feather-clock"></i> Updated 14 Jul 2022
                </small>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
