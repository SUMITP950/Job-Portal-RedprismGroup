/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";

export default function Home() {
  let options = [];

  const [commentList, SetCommentList] = useState("");

  const [userDetails, SetUserDetails] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://testredprism.co/api/getUserDetails", {
  //       headers: {
  //         "auth-token": localStorage.getItem("authToken"),
  //       },
  //     })
  //     .then((res) => {
  //       SetUserDetails(res.data.userDetails);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("http://testredprism.co/api/home/getTechList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        let techList = res.data.techList;
        for (let index = 0; index < techList.length; index++) {
          options.push({
            value: techList[index]["_id"],
            label: techList[index]["tech_name"],
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
  const [post, setPost] = useState("");
  const [getpost, setGetpost] = useState([]);
  const [thoughts, setThoughts] = useState("");
  const [thought, setThought] = useState("");
  const [listdata, setListdata] = useState([]);
  const [listdata1, setListdata1] = useState("Like");
  const [comentdata, setcomentdata] = useState([]);
  const [like, setlike] = useState("");
  // Like section with backend
  const handellike = () => {
    setlike(like + 1);
    if (like >= 1) {
      setlike("");
    }
    if (like == 1) {
      setListdata1("Like");
    }

    axios
      .post(
        "http://testredprism.co/api/home/saveFeedsPostLikeDislike",
        { feeds_post_code: post.value, type: listdata1 },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success(`${response.data.mssg}`);
          console.log(listdata1);
        }
        if (response.data.status === "access denied") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleThoughtsChange = (e) => {
    setThoughts(e.target.value);
  };
  const handleThoughtsChange1 = (e) => {
    setThought(e.target.value);
  };

  const handlePost = (e) => {
    // Make a POST request to the backend with the thoughts data
    axios
      .post(
        "http://testredprism.co/api/home/saveFeedsPost",
        {
          tech_code: post.value,
          post_details: thoughts,
        },

        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        console.log(post);
        if (response.data.status === "success") {
          // setListdata((listdata) => {
          //   const updatedList = [...listdata, thoughts];
          //   setThoughts("");

          //   return updatedList;
          // });

          toast.success(`${response.data.mssg}`);
        }
        if (response.data.status === "access denied") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // get feed post
  const getFeed = (e) => {
    axios
      .post(
        "http://testredprism.co/api/home/getFeedsPost",
        {
          tech_code: e.value,
          from_index: 0,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setGetpost(response.data.feedsList);

          toast.success(`${response.data.mssg}`);
        }
        if (response.data.status === "access denied") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // comment section function with backend
  const disblk = () => {
    document.getElementById("open").style.display = "block";
  };
  const disnan = () => {
    document.getElementById("open").style.display = "none";
  };
  const handleComent = () => {
    setcomentdata((comentdata) => {
      const updatedComent = [...comentdata, thought];
      setThought("");

      axios
        .post(
          "http://testredprism.co/api/home/saveFeedsComment",
          {
            feeds_post_code: post.value,
            comment: thought,
          },
          {
            headers: {
              "auth-token": localStorage.getItem("authToken"),
            },
          }
        )
        .then((response) => {
          if (response.data.status === "success") {
            toast.success(`${response.data.mssg}`);
          }
          if (response.data.status === "access denied") {
            toast.error(`${response.data.mssg}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      return updatedComent;
    });
    disnan();
    getcomment();
  };
  const getcomment = () => {
    axios
      .post(
        "http://testredprism.co/api/home/getFeedsPostCommentsList",
        {
          feeds_post_code: post.value,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          // SetCommentList(response.data.feedsCommentsList);    problem is here
          console.log(commentList);
          toast.success(`${response.data.mssg}`);
        }
        if (response.data.status === "access denied") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const removeActivity = (i) => {
    const deleteListData = comentdata.filter((item, id) => {
      return i != id;
    });
    setcomentdata(deleteListData);
  };

  return (
    <div>
      <div className="py-4">
        <div className="container-fluid body-padding">
          <div className="row justify-content-around">
            <main className="col col-xl-7 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                <div className="wrapper" style={{ overflowX: "inherit" }}>
                  {/* <div className="icon">
                    <i id="left" className="feather-arrow-left"></i>
                  </div> */}
                  <div class="col-lg-12 ">
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
                          <b>Choose Your Technology &nbsp;&nbsp;</b>
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
                            defaultValuevalue={post}
                            onChange={(e) => {
                              setPost(e);
                              getFeed(e);
                            }}
                            placeholder={"Technology"}
                          />
                        </div>
                      </div>

                      {/* <div class="dropdown">
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
                </div> */}

                      {/* <div class="dropdown">
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
                </div> */}
                    </div>
                  </div>
                  {/* <ul className="tabs-box">
                    <li className="tab">Coding</li>
                    <li className="tab active">JavaScript</li>
                    <li class="tab">Podcasts</li>
                    <li class="tab">Databases</li>
                    <li class="tab">Web Development</li>
                    <li class="tab">Unboxing</li>
                    <li class="tab">History</li>
                    <li class="tab">Programming</li>
                    <li class="tab">Gadgets</li>
                    <li class="tab">Algorithms</li>
                    <li class="tab">Comedy</li>
                    <li class="tab">Gaming</li>
                    <li class="tab">Share Market</li>
                    <li class="tab">Smartphones</li>
                    <li class="tab">Data Structure</li>
                  </ul> */}
                  {/* <div className="icon">
                    <i id="right" className="feather-arrow-right"></i>
                  </div> */}
                </div>
                <div
                  className="tab-content"
                  id="myTabContent"
                  style={{ zIndex: "9" }}
                >
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="p-3 d-flex w-100" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/icon/smile.svg"
                          alt=""
                        />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="w-100">
                        <textarea
                          placeholder="Write your thoughts..."
                          className="form-control shadow-none"
                          value={thoughts}
                          onChange={handleThoughtsChange}
                          style={{ fontSize: 25 }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top p-3 d-flex align-items-center">
                  <div className="mr-auto">
                    {/* <a href="#" className="text-link">
                      <i className="feather-users"></i> Tag Buddies
                    </a> */}
                  </div>
                  <div className="flex-shrink-1">
                    <button
                      type="button"
                      className="btn btn-sm post-btn"
                      onClick={handlePost}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
              {listdata != [] &&
                listdata.map((data, i) => {
                  return (
                    <>
                      <div class="box shadow-sm border rounded bg-white mb-3 osahan-post">
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/icon/smile.svg"
                              alt=""
                            />
                            <div class="status-indicator bg-success"></div>
                          </div>
                          <div class="font-weight-bold">
                            <div class="text-truncate">Anirban Mukherjee</div>
                            <div class="small text-gray-500">
                              Frontend Developer at TP Digital Technology
                            </div>
                          </div>
                          <span class="ml-auto small">3 hours</span>
                        </div>
                        <div class="p-3 border-bottom osahan-post-body">
                          <p
                            class="mb-0"
                            key={i}
                            style={{ fontWeight: "bold", fontSize: 20 }}
                          >
                            <div>{data}</div>
                          </p>
                        </div>
                        <div class="p-3 osahan-post-footer text-center d-flex jcc">
                          <button
                            class="mr-3 text-secondary btn btn-link "
                            onClick={handellike}
                          >
                            <i class="feather-heart text-danger icon-font"></i>
                            {like}
                          </button>
                          <button
                            class="mr-3 text-secondary btn btn-link"
                            onClick={disblk}
                          >
                            <i class="feather-message-square icon-font"></i>
                            {}
                          </button>
                          <Link
                            to="#"
                            data-action="share/whatsapp/share"
                            target="_blank"
                            class="mr-3 text-secondary"
                          >
                            <img
                              src="img/icon/whatsapp.png"
                              alt=""
                              class="icon-image"
                            />
                          </Link>
                        </div>
                        {/* comment section start */}
                        <div>
                          {comentdata != [] &&
                            comentdata.map((data1, i2) => {
                              return (
                                <>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                    }}
                                  >
                                    <p
                                      class="my-3 px-2 py-1"
                                      key={i2}
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 15,
                                      }}
                                    >
                                      {data1}
                                    </p>
                                    <button
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "25",
                                        border: "none",
                                      }}
                                      onClick={() => removeActivity(i)}
                                    >
                                      X
                                    </button>
                                  </div>
                                </>
                              );
                            })}
                        </div>
                        <section
                          id="open"
                          style={{ backgroundColor: "#eee", display: "none" }}
                        >
                          <div class="container m-0 p-0">
                            <div class="row d-flex justify-content-center">
                              <div class="col-md-12">
                                <div class="card">
                                  <div
                                    class="card-footer py-3 border-0"
                                    style={{ backgroundColor: "#f8f9fa" }}
                                  >
                                    <div class="d-flex flex-start w-100">
                                      <div class="form-outline w-100">
                                        <textarea
                                          class="form-control"
                                          id="textAreaExample"
                                          rows="4"
                                          style={{ background: "#fff" }}
                                          value={thought}
                                          onChange={handleThoughtsChange1}
                                        ></textarea>

                                        <label
                                          class="form-label"
                                          for="textAreaExample"
                                        >
                                          Comment
                                        </label>
                                      </div>
                                    </div>
                                    <div class="float-end mt-2 pt-1">
                                      <button
                                        type="button"
                                        class="btn btn-primary btn-sm aply-btn mr-2"
                                        onClick={handleComent}
                                      >
                                        Post comment
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary btn-sm"
                                        onClick={disnan}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* comment section end */}
                      </div>
                    </>
                  );
                })}

              {getpost != [] &&
                getpost.map((data, i2) => {
                  return (
                    <>
                      <div class="box shadow-sm border rounded bg-white mb-3 osahan-post">
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/icon/smile.svg"
                              alt=""
                            />
                            <div class="status-indicator bg-success"></div>
                          </div>
                          <div class="font-weight-bold">
                            <div class="text-truncate">
                              {`${data.employee_details[0].first_name} ${data.employee_details[0].last_name}`}
                            </div>

                            <div class="small text-gray-500">
                              {data.employee_details[0].employee_type}
                            </div>
                          </div>
                          <span class="ml-auto small">
                            {data.post_datetime}
                          </span>
                        </div>
                        <div class="p-3 border-bottom osahan-post-body">
                          <p
                            class="mb-0"
                            // key={i}
                            style={{ fontWeight: "bold", fontSize: 20 }}
                          >
                            <div>{data.post_details}</div>
                          </p>
                        </div>
                        <div class="p-3 osahan-post-footer text-center d-flex jcc">
                          <button
                            class="mr-3 text-secondary btn btn-link "
                            onClick={handellike}
                          >
                            <i class="feather-heart text-danger icon-font"></i>
                            {like}
                          </button>
                          <button
                            class="mr-3 text-secondary btn btn-link"
                            onClick={disblk}
                          >
                            <i class="feather-message-square icon-font"></i>
                            {}
                          </button>
                          <Link
                            to="#"
                            data-action="share/whatsapp/share"
                            target="_blank"
                            class="mr-3 text-secondary"
                          >
                            <img
                              src="img/icon/whatsapp.png"
                              alt=""
                              class="icon-image"
                            />
                          </Link>
                        </div>
                        {/* comment section start */}
                        <div>
                          {comentdata != [] &&
                            comentdata.map((data1, i2) => {
                              return (
                                <>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                    }}
                                  >
                                    <p>{}</p>
                                    <p
                                      class="my-3 px-2 py-1"
                                      key={i2}
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 15,
                                      }}
                                    >
                                      {data1}
                                    </p>
                                    <button
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "25",
                                        border: "none",
                                      }}
                                      onClick={() => removeActivity(i2)}
                                    >
                                      X
                                    </button>
                                  </div>
                                </>
                              );
                            })}
                        </div>
                        <section
                          id="open"
                          style={{ backgroundColor: "#eee", display: "none" }}
                        >
                          <div class="container m-0 p-0">
                            <div class="row d-flex justify-content-center">
                              <div class="col-md-12">
                                <div class="card">
                                  <div
                                    class="card-footer py-3 border-0"
                                    style={{ backgroundColor: "#f8f9fa" }}
                                  >
                                    <div class="d-flex flex-start w-100">
                                      <div class="form-outline w-100">
                                        <textarea
                                          class="form-control"
                                          id="textAreaExample"
                                          rows="4"
                                          style={{ background: "#fff" }}
                                          value={thought}
                                          onChange={handleThoughtsChange1}
                                        ></textarea>

                                        <label
                                          class="form-label"
                                          for="textAreaExample"
                                        >
                                          Comment
                                        </label>
                                      </div>
                                    </div>
                                    <div class="float-end mt-2 pt-1">
                                      <button
                                        type="button"
                                        class="btn btn-primary btn-sm aply-btn mr-2"
                                        onClick={handleComent}
                                      >
                                        Post comment
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary btn-sm"
                                        onClick={disnan}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* comment section end */}
                      </div>
                    </>
                  );
                })}
            </main>
            <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 aside-tag">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm pt-4 pb-4">
                  <div class="dropdown-item d-flex align-items-center">
                    <div class="mr-2">
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
                  </div>
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
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12 aside-tag">
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
                      <Link to="/Setting">
                        <span class="font-weight-bold">Settings</span>
                      </Link>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-log-out left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/SampleResume">
                        <span class="font-weight-bold">Simple Resume</span>
                      </Link>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-file-text left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/Training">
                        <span class="font-weight-bold">Trainings</span>
                      </Link>
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
                      <Link to="/FresherJob">
                        <span class="font-weight-bold">Fresher Jobs</span>
                      </Link>
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
                      <Link to="/Internship">
                        <span class="font-weight-bold">Internship</span>
                      </Link>
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
                      <Link to="/">
                        <span class="font-weight-bold">Sign Out</span>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
