import React from "react";
import Wrapper from "../sections/Wrapper";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      
      <div className="profile-links">
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaYoutube />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
