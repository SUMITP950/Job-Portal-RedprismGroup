import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

export default function JobSearch() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  // useEffect(() => {
  //   const tabsBox = document.querySelector(".tabs-box"),
  //     allTabs = tabsBox.querySelectorAll(".tab"),
  //     arrowIcons = document.querySelectorAll(".icon i");

  //   let isDragging = false;

  //   const handleIcons = (scrollVal) => {
  //     let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  //     arrowIcons[0].parentElement.style.display =
  //       scrollVal <= 0 ? "none" : "flex";
  //     arrowIcons[1].parentElement.style.display =
  //       maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
  //   };

  //   arrowIcons.forEach((icon) => {
  //     icon.addEventListener("click", () => {
  //       // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
  //       let scrollWidth = (tabsBox.scrollLeft +=
  //         icon.id === "left" ? -340 : 340);
  //       handleIcons(scrollWidth);
  //     });
  //   });

  //   allTabs.forEach((tab) => {
  //     tab.addEventListener("click", () => {
  //       tabsBox.querySelector(".active").classList.remove("active");
  //       tab.classList.add("active");
  //     });
  //   });

  //   const dragging = (e) => {
  //     if (!isDragging) return;
  //     tabsBox.classList.add("dragging");
  //     tabsBox.scrollLeft -= e.movementX;
  //     handleIcons(tabsBox.scrollLeft);
  //   };

  //   const dragStop = () => {
  //     isDragging = false;
  //     tabsBox.classList.remove("dragging");
  //   };

  //   tabsBox.addEventListener("mousedown", () => (isDragging = true));
  //   tabsBox.addEventListener("mousemove", dragging);
  //   document.addEventListener("mouseup", dragStop);
  //   function auto_grow(element) {
  //     element.style.height = "5px";
  //     element.style.height = element.scrollHeight + "px";
  //   }
  //   window.onscroll = function () {
  //     myFunction();
  //   };

  //   var navbar = document.getElementById("navbar");
  //   var sticky = navbar.offsetTop;

  //   const myFunction = () => {
  //     if (window.pageYOffset >= sticky) {
  //       navbar.classList.add("sticky");
  //     } else {
  //       navbar.classList.remove("sticky");
  //     }
  //   };
  //   if (!("boxShadow" in document.body.style)) {
  //     document.body.setAttribute("class", "noBoxShadow");
  //   }
  // }, []);

  useEffect(() => {
    document.title = "Job Search";
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
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
          <div class="row justify-c-center">
            {/* mobile menu view start */}
            <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown mobile-view-filter">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="feather-filter mr-2 menu-icon"></i>

                <span class="badge badge-dark badge-counter">Filter</span>
              </a>

              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm filter-dropdown-menu">
                <div class="dropdown">
                  <div className="d-flex align-items-center">
                    <img
                      class="dropdown-menu-img"
                      src="https://img.icons8.com/ios/50/000000/circuit.png"
                      alt=""
                    />
                    <Select
                      styles={{
                        container: (baseStyles, state) => ({
                          ...baseStyles,

                          display: "inherit",
                        }),
                        control: (baseStyles, state) => ({
                          ...baseStyles,

                          border: "none",
                          backgroundColor: "#fff",
                        }),
                        placeholder: (baseStyles, state) => ({
                          ...baseStyles,
                          color: "Black",
                          fontWeight: "bold",
                        }),
                        indicatorSeparator: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),
                      }}
                      options={options}
                      isMulti
                      placeholder={"Technology"}
                    />
                  </div>
                </div>

                <div class="dropdown">
                  <div className="d-flex align-items-center">
                    <img
                      class="dropdown-menu-img"
                      src="https://img.icons8.com/ios/50/popular-man.png"
                      alt=""
                    />
                    <Select
                      styles={{
                        container: (baseStyles, state) => ({
                          ...baseStyles,

                          display: "inherit",
                        }),
                        control: (baseStyles, state) => ({
                          ...baseStyles,

                          border: "none",
                          backgroundColor: "#fff",
                        }),
                        placeholder: (baseStyles, state) => ({
                          ...baseStyles,
                          color: "Black",
                          fontWeight: "bold",
                        }),
                        indicatorSeparator: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),
                      }}
                      options={options}
                      isMulti
                      placeholder={"Type"}
                    />
                  </div>
                </div>
                <div class="dropdown">
                  <div className="d-flex align-items-center">
                    <i class="feather-map-pin mr-2 menu-icon"></i>
                    <Select
                      styles={{
                        container: (baseStyles, state) => ({
                          ...baseStyles,

                          display: "inherit",
                        }),
                        control: (baseStyles, state) => ({
                          ...baseStyles,

                          border: "none",
                          backgroundColor: "#fff",
                        }),
                        placeholder: (baseStyles, state) => ({
                          ...baseStyles,
                          color: "Black",
                          fontWeight: "bold",
                        }),
                        indicatorSeparator: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),
                      }}
                      options={options}
                      isMulti
                      placeholder={"Location"}
                    />
                  </div>
                </div>
              </div>
            </li>
            {/* mobile menu view end */}
            <div class="col-lg-8 dropdown-m-hide">
              <div
                class="d-flex justify-content-around"
                style={{
                  borderRadius: "50px",
                  border: "1px solid rgb(6, 6, 6)",
                  padding: "10px",
                }}
              >
                <div class="dropdown">
                  <div className="d-flex align-items-center">
                    <img
                      class="dropdown-menu-img"
                      src="https://img.icons8.com/ios/50/000000/circuit.png"
                      alt=""
                    />
                    <Select
                      styles={{
                        container: (baseStyles, state) => ({
                          ...baseStyles,

                          display: "inherit",
                        }),
                        control: (baseStyles, state) => ({
                          ...baseStyles,

                          border: "none",
                          backgroundColor: "#fff",
                        }),
                        placeholder: (baseStyles, state) => ({
                          ...baseStyles,
                          color: "Black",
                          fontWeight: "bold",
                        }),
                        indicatorSeparator: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),
                      }}
                      options={options}
                      isMulti
                      placeholder={"Technology"}
                    />
                  </div>
                </div>

                <div class="dropdown">
                  <div className="d-flex align-items-center">
                    <img
                      class="dropdown-menu-img"
                      src="https://img.icons8.com/ios/50/popular-man.png"
                      alt=""
                    />
                    <Select
                      styles={{
                        container: (baseStyles, state) => ({
                          ...baseStyles,

                          display: "inherit",
                        }),
                        control: (baseStyles, state) => ({
                          ...baseStyles,

                          border: "none",
                          backgroundColor: "#fff",
                        }),
                        placeholder: (baseStyles, state) => ({
                          ...baseStyles,
                          color: "Black",
                          fontWeight: "bold",
                        }),
                        indicatorSeparator: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),
                      }}
                      options={options}
                      isMulti
                      placeholder={"Type"}
                    />
                  </div>
                </div>

                <div class="dropdown">
                  <div className="d-flex align-items-center">
                    <i class="feather-map-pin mr-2 menu-icon"></i>
                    <Select
                      styles={{
                        container: (baseStyles, state) => ({
                          ...baseStyles,

                          display: "inherit",
                        }),
                        control: (baseStyles, state) => ({
                          ...baseStyles,

                          border: "none",
                          backgroundColor: "#fff",
                        }),
                        placeholder: (baseStyles, state) => ({
                          ...baseStyles,
                          color: "Black",
                          fontWeight: "bold",
                        }),
                        indicatorSeparator: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),
                      }}
                      options={options}
                      isMulti
                      placeholder={"Location"}
                    />
                  </div>
                </div>
              </div>
            </div>
         
          </div>
          {
            <div class="row mt-5">
              {data.map((data, i) => (
                <>
                  {" "}
                  <table class="table table-m-view" style={{ border: "none" }}>
                    <thead class="thead-pink">
                      <tr>
                        <th scope="col">Job Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Location</th>
                        <th scope="col">Technology</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Digital Marketing</td>
                        <td>7,000-20,00</td>
                        <td>2-3 Years</td>
                        <td>Kolkata</td>
                        <td>Python</td>
                        <td>
                          <button class="apply-btn"> Apply Now</button>{" "}
                          <button class="share-btn">
                            {" "}
                            Share{" "}
                            <img
                              src="img/icon/whatsapp.png"
                              alt=""
                              class="whatsapp-img"
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Web designer</td>
                        <td>7,000-20,00</td>
                        <td>2-3 Years</td>
                        <td>Kolkata</td>
                        <td>Java</td>
                        <td>
                          <button class="apply-btn"> Apply Now</button>{" "}
                          <button class="share-btn">
                            {" "}
                            Share{" "}
                            <img
                              src="img/icon/whatsapp.png"
                              alt=""
                              class="whatsapp-img"
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>web development</td>
                        <td>7,000-20,00</td>
                        <td>2-3 Years</td>
                        <td>Kolkata</td>
                        <td>PHP</td>
                        <td>
                          <button class="apply-btn"> Apply Now</button>{" "}
                          <button class="share-btn">
                            {" "}
                            Share{" "}
                            <img
                              src="img/icon/whatsapp.png"
                              alt=""
                              class="whatsapp-img"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              ))}
            </div>
          }
        </div>
      </div>
    </>
  );
}
