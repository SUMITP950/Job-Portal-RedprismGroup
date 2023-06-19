import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegistrationTechSkills = () => {
  const [currentCompany, setCurrentCompany] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [experienceYear, setExperienceYear] = useState("");

  useEffect(() => {
    document.title = "Registration";
  }, []);

  const handleCurrentCompanyChange = (e) => {
    setCurrentCompany(e.target.value);
  };

  const handleTechnicalSkillsChange = (e) => {
    setTechnicalSkills(e.target.value);
  };

  const handleExperienceYearChange = (e) => {
    setExperienceYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace("./RegistrationStatus");
    // Create an object with the form data
    const formData = {
      currentCompany,
      technicalSkills,
      experienceYear,
    };

    // Send the form data to the server
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 dn">
            <div class="pindicator">
              <div class="bullet current ">
                <Link to="/RegistrationBasic">
                  <span class="icon1 tns90">1</span>
                </Link>
              </div>
              <div class="bullet current">
                <Link to="/RegistrationVarify">
                  <span class="icon1 tns90">2</span>
                </Link>
              </div>
              <div class="bullet current future">
                <Link to="/RegistrationCreate">
                  <span class="icon1 tns90">3</span>
                </Link>
              </div>
              <div class="bullet future current">
                <Link to="/RegistrationTechSkills">
                  <span class="icon1 tns90">4</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationStatus">
                  <span class="icon1 tns90">5</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div class="col-md-12 font-weight-bold text-center h1">
              Create an Account!
            </div>
            <div class="col-md-12 text-center">( As a Job Seeker )</div>
            <div class="col-md-12 text-center">
              It only takes a couple of minutes to get started!
            </div>
            <div class="col-md-12 text-center">
              <span class="px-3 py-1 backcolor">It's free</span>
            </div>
            <div class="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
              <b className="midil backcolor px-3 py-1">
                Please Enter Your Technical Skills
              </b>
            </div>
            <div class="container">
              <form onSubmit={handleSubmit}>
                <div class="form-row d-flex align-items-center justify-content-center">
                  <div class="col-md-8 mb-3">
                    <label for="currentCompany">Current Company</label>
                    <select
                      class="form-control form-control-lg"
                      id="currentCompany"
                      value={currentCompany}
                      onChange={handleCurrentCompanyChange}
                    >
                      <option>--Select--</option>
                      <option>Cognizant</option>
                      <option>CTS</option>
                      <option>Wipro</option>
                      <option>Tech Mahindra</option>
                    </select>
                  </div>
                  <div class="col-md-8 mb-3">
                    <label for="technicalSkills">Technical Skills</label>
                    <select
                      class="form-control form-control-lg"
                      id="technicalSkills"
                      value={technicalSkills}
                      onChange={handleTechnicalSkillsChange}
                    >
                      <option>--Select--</option>
                      <option>JAVA</option>
                      <option>Python</option>
                      <option>JavaScript</option>
                      <option>HTML</option>
                      <option>CSS</option>
                      <option>React JS</option>
                      <option>React Native</option>
                    </select>
                  </div>
                  <div class="col-md-8 mb-3">
                    <label for="experienceYear">Experience In Year</label>
                    <select
                      class="form-control form-control-lg"
                      id="experienceYear"
                      value={experienceYear}
                      onChange={handleExperienceYearChange}
                    >
                      <option>--Select--</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </select>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-center mt-3">
                  <button
                    class="btn btn-pink mb-5 px-5"
                    type="submit"
                    style={{ fontWeight: "600", fontSize: "16px" }}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationTechSkills;
