import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../utils/projectsData";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const projectsToShow = isMobile ? 1 : 5;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        // For mobile, just go to next project
        return (prevIndex + 1) % projectsData.length;
      } else {
        // For desktop, maintain the original logic
        const nextIndex = prevIndex + 1;
        return nextIndex + projectsToShow > projectsData.length ? 0 : nextIndex;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        // For mobile, go to previous project
        return prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1;
      } else {
        // For desktop, maintain the original logic
        if (prevIndex === 0) {
          return Math.max(0, projectsData.length - projectsToShow);
        }
        return prevIndex - 1;
      }
    });
  };

  const visibleProjects = (() => {
    if (isMobile) {
      // For mobile, show only the current project
      return [projectsData[currentIndex]];
    } else {
      // For desktop, maintain the original logic
      if (currentIndex + projectsToShow > projectsData.length) {
        const endSlice = projectsData.slice(currentIndex);
        const remainingCount = projectsToShow - endSlice.length;
        const startSlice = projectsData.slice(0, remainingCount);
        return [...endSlice, ...startSlice];
      }
      return projectsData.slice(currentIndex, currentIndex + projectsToShow);
    }
  })();

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <h2>My Projects</h2>
      </motion.div>
      
      <div className="projects-carousel-container">
        <button 
          className="carousel-button prev" 
          onClick={prevSlide}
        >
          <FiChevronLeft />
        </button>

        <div className="projects-carousel">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <motion.div
                className="project-card"
                key={`${project.projectName}-${currentIndex + index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="project-image">
                  <Image src={project.image} alt={project.projectName} width={400} height={200} />
                  <div className="project-overlay">
                    <h3>{project.projectName}</h3>
                    <p>{project.projectDescription.slice(0, 100)}...</p>
                  </div>
                </div>
                <div className="project-content">
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
          </AnimatePresence>
        </div>

        <button 
          className="carousel-button next" 
          onClick={nextSlide}
        >
          <FiChevronRight />
        </button>
      </div>

      <motion.div
        className="view-all"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <Link href="/projects" className="view-all-button">
          View All Projects
        </Link>
      </motion.div>
    </div>
  );
}

export default Projects;
