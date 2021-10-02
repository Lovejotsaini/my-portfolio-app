import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import data_projects from "./projects_data";

const Projects = () => {
  const project_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      className="container projects"
      variants={project_variants}
      initial="hidden"
      animate="visible"
    >
      <div className="row">
        {data_projects.map((data) => (
          <ProjectCard key={data.name} {...data} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
