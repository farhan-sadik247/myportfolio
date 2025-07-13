import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Computer Science undergraduate with a strong foundation in frontend development and growing expertise in full-stack MERN applications. Proficient in ReactJS, with experience building responsive, user-friendly interfaces. Eager to contribute in collaborative, fast-paced environments.
          </p>
          <div className="about-grid-info-skills">
            <h3>Technical Skills</h3>
            <div className="skills-categories">
              <div className="skill-category">
                <h4>Languages</h4>
                <ul className="about-grid-info-list">
                  <li className="about-grid-info-list-item">Python</li>
                  <li className="about-grid-info-list-item">C</li>
                  <li className="about-grid-info-list-item">JavaScript</li>
                  <li className="about-grid-info-list-item">TypeScript</li>
                  <li className="about-grid-info-list-item">HTML</li>
                  <li className="about-grid-info-list-item">CSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Web Development</h4>
                <ul className="about-grid-info-list">
                  <li className="about-grid-info-list-item">ReactJS</li>
                  <li className="about-grid-info-list-item">React Native</li>
                  <li className="about-grid-info-list-item">Django</li>
                  <li className="about-grid-info-list-item">MERN Stack</li>
                  <li className="about-grid-info-list-item">NextJS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/farhan.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
