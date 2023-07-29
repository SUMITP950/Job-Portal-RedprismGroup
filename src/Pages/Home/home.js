/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  const [techno, setTechno] = useState("");
  const [technoData, SetTechnoData] = useState([]);
  const [userDetails, SetUserDetails] = useState("");
  const [getpost, setGetpost] = useState([]);
  const [thoughts, setThoughts] = useState(""); // this is for post value
  const [thought, setThought] = useState(""); // this is for comment value
  const [comentList, setcomentList] = useState({});
  const [nolikcmt, setnolikcmt] = useState(""); //total comment & like

  const handleThoughtsChange = (e) => {
    setThoughts(e.target.value);
  };
  const handleThoughtsChange1 = (e) => {
    setThought(e.target.value);
  };

  const disnan = (postId) => {
    document.getElementById("open_" + postId).style.display = "none";
  };

  //Protecting this page
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  // Get user details
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/getUserDetails", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        SetUserDetails(res.data.userDetails);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const noslikecoment = (id) => {
    console.log(id);
    axios
      .post(
        "http://testredprism.co/api/home/getTotalLikeComments",
        {
          feeds_post_code: id,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          toast.success(`${res.data.mssg}`);
          console.log(res.data);
          document.querySelector(".feed_like_" + id).innerText =
            res.data.totalLikes;
        }
        // console.log(res.data.totalLikes);

        // setnolikcmt(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Get tech list
  useEffect(() => {
    axios
      .get(
        "http://testredprism.co/api/home/getTechList",

        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((res) => {
        // console.log(res.data.techList)
        SetTechnoData(res.data.techList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Save post data
  const handlePost = () => {
    // console.log("Post Save " + techno);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/saveFeedsPost`,
        {
          tech_code: techno,
          post_details: thoughts,
        },

        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setThoughts("");
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Get feed post list

  const technoChange = (tech_code) => {
    // console.log(tech_code);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/getFeedsPost`,
        {
          tech_code: tech_code,
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
          // console.log(response.data);
          setGetpost(response.data.feedsList);
        }
        if (response.data.status === "error") {
          // console.log(response.data);
          // toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Like section with backend

  const handellike = (postId) => {
    // console.log(postId);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/saveFeedsPostLikeDislike`,
        { feeds_post_code: postId, type: "Like" },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          noslikecoment(postId);

          // toast.success(`${response.data.mssg}`);
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // //  Dislike section with backend

  const handelDislike = (postId) => {
    // console.log(postId);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/saveFeedsPostLikeDislike`,
        { feeds_post_code: postId, type: "Dislike" },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        if (response.data.status === "success") {
          noslikecoment(postId);

          // toast.success(`${response.data.mssg}`);
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // comment section api

  const handleComent = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/saveFeedsComment`,
        {
          feeds_post_code: id,
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
          disblk(id);
          setThought("");
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return removeActivity();
  };

  const fetchComment = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/getTotalLikeComments`,
        {
          feeds_post_code: id,
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
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return removeActivity();
  };

  // comment list section api

  const disblk = (postId) => {
    document.getElementById("open_" + postId).style.display = "block";
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/getFeedsPostCommentsList`,
        {
          feeds_post_code: postId,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setcomentList({
            feedId: postId,
            commentlist: response.data.feedsCommentsList,
          });
        }
        if (response.data.status === "error") {
          // toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // comment delete section api
  const removeActivity = (commentId, feedpostId) => {
    console.log(commentId);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/deleteFeedsComment`,
        {
          feeds_comment_code: commentId,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          disblk(feedpostId);
        }
        if (response.data.status === "error") {
          // toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="py-4">
        <div className="container-fluid body-padding">
          <div className="row justify-content-around">
            <main className="col col-xl-7 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                <div className="wrapper" style={{ overflowX: "inherit" }}>
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
                          <select
                            class="form-control form-control-lg"
                            name="currentCompany"
                            id="currentCompany"
                            onChange={(e) => {
                              setTechno(e.target.value);
                              technoChange(e.target.value);
                            }}
                            value={techno}
                          >
                            <option>--Technology--</option>
                            {technoData.map((item, id) => {
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
                  </div>
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
              {getpost != [] &&
                getpost.map((data, i2) => {
                  return (
                    <>
                      <div class="box shadow-sm border rounded bg-white mb-3 osahan-post">
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src={`${process.env.REACT_APP_API_URL}/${data.employee_details[0].employee_image}`}
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
                            class={
                              `mr-3 text-secondary btn btn-link feed_like_btn_` +
                              data._id
                            }
                            onClick={
                              data.user_like.length > 0
                                ? () => handelDislike(data._id)
                                : () => handellike(data._id)
                            }
                          >
                            <i
                              class={
                                `feather-heart text-danger icon-font feed_like_` +
                                data._id
                              }
                            >
                              {data.totalLike}
                            </i>
                          </button>
                          <button
                            class="mr-3 text-secondary btn btn-link"
                            onClick={() => disblk(data._id)}
                          >
                            <i class="feather-message-square icon-font">
                              {data.totalComments}
                            </i>
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

                        {/* comment list  */}
                        <div>
                          {comentList.feedId === data._id &&
                            comentList.commentlist.map((list, listid) => {
                              return (
                                <>
                                  <div class="border m-3 p-2 rounded">
                                    <div class="dropdown-list-image mr-3 d-flex pl-3">
                                      <img
                                        class="rounded-circle"
                                        src={`${process.env.REACT_APP_API_URL}/${list.employee_details[0].employee_image}`}
                                        alt=""
                                      />
                                      <div class="font-weight-bold pl-1">
                                        <div class="text-truncate">
                                          {`${list.employee_details[0].first_name} ${list.employee_details[0].last_name}`}
                                        </div>
                                        <div class="small text-gray-500 pl-1">
                                          {
                                            list.employee_details[0]
                                              .employee_type
                                          }
                                        </div>
                                      </div>
                                    </div>

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
                                        key={listid}
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 15,
                                        }}
                                      >
                                        {list.comment}
                                      </p>

                                      {userDetails._id ===
                                      list.employee_details[0]._id ? (
                                        <button
                                          style={{
                                            fontWeight: "bold",
                                            fontSize: "25",
                                            border: "none",
                                          }}
                                          onClick={() =>
                                            removeActivity(list._id, data._id)
                                          }
                                        >
                                          X
                                        </button>
                                      ) : null}
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                        </div>

                        {/* comment section start
                        <div>
                          {comentdata != [] &&
                            comentdata.map((data1, i2) => {
                              return (
                                <>
                                  <div class="border m-3 p-2 rounded">
                                    <div class="dropdown-list-image mr-3 d-flex pl-3">
                                      <img
                                        class="rounded-circle"
                                        src="img/icon/smile.svg"
                                        alt=""
                                      />
                                      <div class="font-weight-bold pl-1">
                                        <div class="text-truncate">
                                          {`${data.employee_details[0].first_name} ${data.employee_details[0].last_name}`}
                                        </div>
                                        <div class="small text-gray-500 pl-1">
                                          {
                                            data.employee_details[0]
                                              .employee_type
                                          }
                                        </div>
                                      </div>
                                    </div>

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
                                        onClick={() => removeActivity(i2)}
                                      >
                                        X
                                      </button>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                        </div> */}
                        <section
                          id={`open_` + data._id}
                          style={{ backgroundColor: "#eee", display: "none" }}
                        >
                          <div class="container m-0 p-0">
                            <div class="row d-flex justify-content-center">
                              <div class="col-md-12">
                                <div class="card">
                                  <div
                                    class="card-footer py-3 border-0"
                                    style={{ backgroundColor: "#fff" }}
                                  >
                                    <div class="d-flex flex-start w-100">
                                      <img
                                        src={`${process.env.REACT_APP_API_URL}/${userDetails.employee_image}`}
                                        style={{
                                          height: "30px",
                                          borderRadius: "50%",
                                        }}
                                      />
                                      <div class="form-outline w-100">
                                        <textarea
                                          class="form-control"
                                          id="textAreaExample"
                                          rows="4"
                                          placeholder="Comment...."
                                          style={{ background: "#fff" }}
                                          value={thought}
                                          onChange={handleThoughtsChange1}
                                        ></textarea>
                                      </div>
                                      <button
                                        type="button"
                                        style={{
                                          background: "none",

                                          border: "none",

                                          cursor: "pointer",
                                          outline: "inherit",
                                        }}
                                        onClick={() => {
                                          handleComent(data._id);
                                          fetchComment(data._id);
                                        }}
                                      >
                                        <i
                                          className="feather-arrow-right-circle"
                                          style={{
                                            fontSize: "25px",
                                            color: "rgb(199 199 188)",
                                          }}
                                        />
                                      </button>
                                    </div>
                                    <div class="float-end mt-2 pt-1">
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary btn-sm"
                                        onClick={() => disnan(data._id)}
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
                      <h6
                        class="font-weight-bold ml-1 "
                        style={{
                          whiteSpace: "nowrap",
                          width: "50px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
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
                      <Link to="/jobPost">
                        <span class="font-weight-bold">Job Post</span>
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
                      <Link to="/walkingjob">
                        <span class="font-weight-bold">Walking Job</span>
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
