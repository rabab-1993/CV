import React from "react";
import "./about.css";
import {
  FaUserAlt,
  FaRegBuilding,
  FaGraduationCap,
  FaCode,
  FaEnvira,
} from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import certificate from "./img/download.jpg";
import certificate2 from "./img/r.jpg";
// import Certificate from "./Certificate";

export const About = () => {
  return (
    <div className="about">
      <i>
        <FaUserAlt /> ABOUT
      </i>
      <hr />
      <p className="about-me">
        Hard-working programmer with a flair for creating elegant solutions in
        the least amount of time, passionate for learning, great at multitasking
        and handling a fast-paced team environment, Looking to use my
        programming skills.
      </p>
      <i>
        <FaGraduationCap /> Education
      </i>
      <hr />
      <h3>- Bachelor Of Human Resource Mangement (Buraydah Colleges | 2016)</h3>
      <h3>- Front-End Web Development (NANODEGREE Program) Udacity | 2020</h3>
      <i>
        <FaRegBuilding /> WORK EXPERIENCE
      </i>
      <hr />
      <h3>
        Full Stack JavaScript Developer (Internship) Oct 2021- Feb 2022 at Saudi
        Federation for Cybersecurity and Programming,
      </h3>

      <i>
        <FaCode />
        Technical Skils
      </i>
      <hr />
      <p className="technical">
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
        <span>ReactJs</span>
        <span>Redux</span>
        <span>MUI</span>
        <span>Node</span>
        <span>Express.Js</span>
        <span>MongoDB</span>
        <span>Git</span>
        <span>Github</span>
      </p>
      <i>
        <FaEnvira />
        Soft Skils
      </i>
      <hr />
      <p className="soft">
        <span>Learnable.</span>
        <span>Communication Skills.</span>
        <span>Time Management.</span>
        <span>Team Works.</span>
      </p>
      <i>
        <IoLanguageOutline />
        Languages
      </i>
      <hr />
      <p className="soft">
        <span> Arabic - native</span>
        <span> English - advanced</span>
      </p>
      {/* <Certificate /> */}
      <i>
        <GrCertificate />
        Certificate
      </i>
      <hr />
      <div className="certificate">
        <img src={certificate} alt="" />
        <img src={certificate2} alt="" className="img2" />
      </div>
    </div>
  );
};
