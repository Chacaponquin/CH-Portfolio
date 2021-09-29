import React from "react";
import { meLinks } from "../helpers/Theme";
import Github from "./svg/Github";
import Linkedin from "./svg/Linkedin";
import Twitter from "./svg/Twitter";

const ContactMe = ({ windowSize }) => {
  return (
    <>
      <div className="contactMe">
        <a href={meLinks.LINKEDIN} target={"_blank"} rel={"noreferrer"}>
          <Linkedin size={windowSize <= 500 ? 10 : 20} />
        </a>
        <a href={meLinks.TWITTER} target={"_blank"} rel={"noreferrer"}>
          <Twitter size={windowSize <= 500 ? 10 : 20} />
        </a>
        <a href={meLinks.GITHUB} target={"_blank"} rel={"noreferrer"}>
          <Github size={windowSize <= 500 ? 10 : 20} />
        </a>
      </div>
    </>
  );
};

export default ContactMe;
