import React from "react";
import { GrCertificate } from "react-icons/gr";
import'./certificate.css'
import certificate from "./img/download.jpg";
import certificate2 from "./img/r.jpg";

const Certificate = () => {
  return (
    <div className="certificate">
      <i>
        <GrCertificate />
        Certificate
      </i>
      <hr />
      <>
        <img src={certificate} alt="" />
        <img src={certificate2} alt="" className="img2" />
      </>
    </div>
  );
};

export default Certificate;
