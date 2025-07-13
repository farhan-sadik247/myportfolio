import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowLeft, FiLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { projectsData } from "../utils/projectsData";

function AllProjects() {
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (projectName: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectName]: !prev[projectName]
    }));
  };

  return (
    <div className="all-projects-page">
      <div className="back-button-container">
        <Link href="/" className="back-button">
          <FiArrowLeft />
          <span>Back to Home</span>
        </Link>
      </div>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>All Projects</h2>
      </motion.div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.projectName}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <div className="project-image">
              <Image src={project.image} alt={project.projectName} width={400} height={200} />
            </div>
            <div className="project-content">
              <h3>{project.projectName}</h3>
              <div className={`project-description ${expandedProjects[project.projectName] ? 'expanded' : 'collapsed'}`}>
                <p>
                  {expandedProjects[project.projectName]
                    ? project.projectDescription
                    : `${project.projectDescription.slice(0, 150)}...`}
                  <button
                    className="read-more-btn"
                    onClick={() => toggleDescription(project.projectName)}
                  >
                    {expandedProjects[project.projectName] ? 'Show Less' : 'Read More'}
                  </button>
                </p>
              </div>
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

export default AllProjects; 