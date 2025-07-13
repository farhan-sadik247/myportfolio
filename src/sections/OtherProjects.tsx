import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiChevronLeft, FiLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { projectsData } from "../utils/projectsData";

function OtherProjects() {
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  const toggleProjectDescription = (projectName: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectName]: !prev[projectName]
    }));
  };

  return (
    <div className="all-projects-page">
      <Link href="/" className="back-button">
        <FiChevronLeft /> Back to Home
      </Link>

      <motion.div
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>All Projects</h1>
      </motion.div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.projectName}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-image">
              <Image src={project.image} alt={project.projectName} width={400} height={200} />
            </div>
            <div className="project-content">
              <h3>{project.projectName}</h3>
              <p>
                {expandedProjects[project.projectName]
                  ? project.projectDescription
                  : `${project.projectDescription.slice(0, 150)}...`}
                <button
                  className="read-more"
                  onClick={() => toggleProjectDescription(project.projectName)}
                >
                  {expandedProjects[project.projectName] ? "Show Less" : "Read More"}
                </button>
              </p>
              <ul className="project-tech">
                {project.projectTech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <Link href={project.projectExternalLinks.github} className="github-link" target="_blank">
                  <FiGithub />
                </Link>
                {project.projectExternalLinks.demo && (
                  <Link href={project.projectExternalLinks.demo} className="external-link" target="_blank">
                    <FiExternalLink />
                  </Link>
                )}
                {project.projectExternalLinks.projectLink && (
                  <Link href={project.projectExternalLinks.projectLink} className="project-link" target="_blank">
                    <FiLink />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OtherProjects;
