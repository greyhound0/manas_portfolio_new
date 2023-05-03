import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
const Navbar = () => {
  function rederictToGithub() {
    window.open("https://github.com/greyhound0", "_blank");
  }
  function rederictToLinkedin() {
    window.open("https://www.linkedin.com/in/manas-gupta-501313262/", "_blank");
  }

  return (
    <nav className="bg-light navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0">
          <img
            src={logo}
            style={{ cursor: "pointer", marginRight: "15px" }}
            alt="logo"
            width="35"
            height="auto"
            className="d-inline-block align-text-top"
            onClick={() => rederictToGithub()}
          />

          <img
            src={logo2}
            style={{ cursor: "pointer" }}
            alt="logo"
            width="30"
            height="auto"
            className="d-inline-block align-text-top"
            onClick={() => rederictToLinkedin()}
          />
        </div>

        <div className="">
          <NavLink to="/" className="link me-5">
            Home
          </NavLink>
          <NavLink to="/about" className="link me-5">
            About
          </NavLink>
          <NavLink to="/projects" className="link">
            Projects
          </NavLink>
        </div>

        <div>
          <NavLink to="/contact" className="link">
            <button className="mt-5 m-lg-0 btn btn-primary custom-btn fw-bold">
              Contact me
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
