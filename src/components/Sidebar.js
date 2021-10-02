import React from "react";
import { motion } from "framer-motion";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
// import mightycoder from "../assets/mighty-coder.svg";
import mj from "../assets/love.jpg";
import resume from "../assets/loveresume.pdf";
import "../index.css";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:lovejot.singh6285@gmail.com");
  };
  const side_variants = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={side_variants}
      initial="hidden"
      animate="visible"
    >
      <img src={mj} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Lovejot <span>Singh</span>{" "}
      </div>
      <div className="sidebar__item sidebar__title">Front-End Developer</div>
      <a href={resume} download="Lovejot_resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img
            src={tie}
            alt="resume"
            className="sidebar__icon sidebar__resume"
          />
          Download Resume
        </div>
      </a>
      <div className="sidebar__contact">
        <div className="sidebar__item">
          <a
            href="https://www.linkedin.com/in/lovejot-singh-b9997b218/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="none"
              className="sidebar__icon mr-2"
            />
            Linkedin
          </a>
        </div>
        <div className="sidebar__item">
          <a
            href="https://github.com/Lovejotsaini"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github"
              className="sidebar__icon sidebar__github mr-2"
            />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-1" />
          Mukerian,Punjab,INDIA
        </div>
        <div className="sidebar__item">lovejot.singh6285@gmail.com</div>
        <div className="sidebar__item">7888708075/9988161845</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
