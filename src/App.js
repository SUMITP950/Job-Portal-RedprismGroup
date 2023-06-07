import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import Timeline from "./Component/Timeline";
import Home from "./Pages/Home/home";
import Jobs from "./Pages/jobs/jobs";
import Profile from "./Pages/profile/profile";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Message from "./Pages/Message/Message";
import Notifications from "./Pages/Notifications/Notifications";
import EditProfile from "./Pages/EditProfile/EditProfile";
import Connection from "./Pages/connection/connection";
import CompanyProfile from "./Pages/CompanyProfile/CompanyProfile";
import JobProfile from "./Pages/JobProfile/JobProfile";
import SigninAsHr from "./Pages/SigninAsHr/SigninAsHr";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SideBar from "./Component/SideBar";
import RegistrationBasic from "./Pages/RegistrationBasic/RegistrationBasic"
import RegistrationVarify from "./Pages/RegistrationVarify/RegistrationVarify"
import RegistrationTechSkills from "./Pages/RegistrationTechSkills/RegistrationTechSkills"
import RegistrationStatus from "./Pages/RegistrationStatus/RegistrationStatus"
import RegistrationCreate from "./Pages/RegistrationCreate/RegistrationCreate"
import BuddySurches from "./Pages/BuddySurches/BuddySurches"
import JobSearch from "./Pages/JobSearch/JobSearch"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/LandingPage"
            element={
              <>
                <Nav /> <Home />
              </>
            }
          />
          <Route
            path="/jobs"
            element={
              <>
                <Nav /> <Jobs />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Nav />
                <Profile />
              </>
            }
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route
            path="/Message"
            element={
              <>
                <Nav />
                <Message />
              </>
            }
          />
          <Route
            path="/Notifications"
            element={
              <>
                <Nav />
                <Notifications />
              </>
            }
          />
          <Route
            path="/EditProfile"
            element={
              <>
                <Nav />
                <EditProfile />
              </>
            }
          />
          <Route
            path="/Connection"
            element={
              <>
                <Nav />
                <Connection />
              </>
            }
          />
          <Route
            path="/CompanyProfile"
            element={
              <>
                <Nav />
                <CompanyProfile />
              </>
            }
          />
          <Route
            path="/JobProfile"
            element={
              <>
                <Nav />
                <JobProfile />
              </>
            }
          />
          <Route path="/BuddySurches"
          element={<><Nav/><BuddySurches/></>}/>
          <Route
            path="/SigninAsHr"
            element={
              <>
                <SigninAsHr />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <LandingPage />
              </>
            }
          />
        
        <Route
          path="/RegistrationBasic"
          element={
            <><div className="container">
                <div className="row">
                  <div className="col-md-4 dn"><SideBar/> 
                  </div>
                  <div className="col-md-8"><RegistrationBasic/>
                 
                  </div>
                </div>
              </div>
              
              
            </>
          }
        />
        <Route 
          path="/RegistrationVarify"
          element={
            <><RegistrationVarify/>
              
            </>
          }
        />
        <Route
          path="/RegistrationStatus"
          element={
            <><RegistrationStatus/>
              
              
            </>
          }
        />
        <Route
          path="/RegistrationCreate"
          element={
            <><RegistrationCreate/>
              
              
            </>
          }
        />
        <Route
          path="/RegistrationTechSkills"
          element={
            <><RegistrationTechSkills/>
            </>
          }
        />
        <Route path="/JobSearch" element={<><Nav/><JobSearch/></>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
