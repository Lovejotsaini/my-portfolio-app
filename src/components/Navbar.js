import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  const [active, setActive] = useState("About");
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/") {
      setActive("About");
    } else if (history.location.pathname === "/resume") {
      setActive("Resume");
    } else if (history.location.pathname === "/projects") {
      setActive("Projects");
    }
  }, [active, history.location.pathname]);

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar__item" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}
        {active !== "Resume" && (
          <Link to="/resume">
            <div className="navbar__item" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        )}
        {active !== "Projects" && (
          <Link to="/projects">
            <div className="navbar__item" onClick={() => setActive("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
