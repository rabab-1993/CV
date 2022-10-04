import React from "react";
import avatar from "./img/avatar.svg";
import { FaGithub, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { BsPhoneFill, BsGlobe, BsLinkedin } from "react-icons/bs";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <img src={avatar} alt="avatar" className="avatar" />
      <h2>Rabab Yousef</h2>
      <h3>junior full stack web developer</h3>
      <i>
        <BsPhoneFill /> 0563864747
      </i>
      <i>
        <FaLocationArrow />
        Saudi Arabia, Qassim
      </i>
      <i>
        <FaEnvelope /> rababyousef1414@gmail.com
      </i>
      <a
        href="https://rabab-yousef.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <BsGlobe />

        <b>My Portofilio</b>
      </a>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/rabab-yousef"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/rabab-1993/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
