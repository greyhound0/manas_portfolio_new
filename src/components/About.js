import React from "react";
import { FaBootstrap } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

import resume from "../assets/Manas_Gupta_Resume.pdf";

const About = () => {
  return (
    <div className="container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100">
      <p className="text-center lead m-4">
        I'm a react developer with 1 year of experience in web development as a
        Front-End Developer in a product based company. I love creating responsive websites using
        ReactJS, JavaScript, HTML5, CSS3, Bootstrap & Github. I've done multiple
        small projects to learn basics and now doing more complex projects.
      </p>

      <a
        href={resume}
        download
        className="btn btn-primary mt-5 custom-btn fw-bold"
      >
        Download My Resume
      </a>
      <h3 className="pt-5 pb-2 custom-color">Languages and tools I use:</h3>

      <p className="lead">
        <img
          className="me-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="40"
          height="40"
        />
        <img
          className="m-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="40"
          height="40"
        />
        <img
          className="m-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="30"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react"
          width="35"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="vscode"
          width="35"
          height="35"
        />
      </p>

      <FaBootstrap
        className="m-2"
        style={{ width: "35", height: "35", color: "#7a14f5" }}
      />
    </div>
  );
};

export default About;
