import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  const education = {
    university: "BRAC University",
    location: "Dhaka, Bangladesh",
    degree: "B.Sc. in Computer Science and Engineering",
    duration: "Jun 2021 -- May 2025",
    courses: "Software Engineering, System Analysis & Design, Natural Language Processing, Blockchain & Cryptocurrency, Data Structures & Algorithms"
  };

  const skills = {
    languages: ["Python", "C", "JavaScript", "TypeScript", "HTML", "CSS"],
    webDev: ["ReactJS", "React Native", "Django", "MERN Stack", "NextJS"],
    blockchain: ["Solidity", "Truffle", "Ganache", "MetaMask", "Docker"],
    databases: ["MySQL", "MongoDB"],
    versionControl: ["Git", "GitHub"],
    productivity: ["Microsoft Excel", "Word", "PowerPoint"]
  };

  const achievements = [
    {
      title: "BUET CTF 2024",
      description: "Ranked 8th in the final round, organized by BUET Cybersecurity Club"
    },
    {
      title: "EWU CTF 2024",
      description: "Secured 5th place in the final round, hosted by East West University Robotics Club"
    }
  ];

  const thesis = {
    title: "A Deep Learning Approach of Translating Speech into 3D Hand Sign Language (ASL)",
    date: "Jan 2025",
    description: [
      "Proposed a deep learning pipeline to convert speech into 3D ASL animation using speech-to-text, gloss translation, and keypoint mapping.",
      "Utilized Whisper, BART, MarianMT, OpenPifPaf, RTMPose3D, ResNet50, MediaPipe, and LSTM trained on the How2Sign dataset."
    ]
  };

  return (
    <section className="resume" id="resume">
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
        <h2>My Resume</h2>
      </motion.div>

      <div className="resume-content">
        <div className="resume-download">
          <Link href="/FSCV.pdf" target="_blank" className="download-button">
            <FiDownload /> Download CV
          </Link>
        </div>

        <motion.div
          className="resume-section education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Education</h3>
          <div className="education-content">
            <h4>{education.university}</h4>
            <p className="location">{education.location}</p>
            <p className="degree">{education.degree}</p>
            <p className="duration">{education.duration}</p>
            <div className="courses">
              <h5>Relevant Coursework:</h5>
              <p>{education.courses}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="resume-section skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="skill-tags">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Web Development</h4>
              <div className="skill-tags">
                {skills.webDev.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Blockchain</h4>
              <div className="skill-tags">
                {skills.blockchain.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Databases</h4>
              <div className="skill-tags">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="resume-section thesis"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Academic Thesis</h3>
          <div className="thesis-content">
            <h4>{thesis.title}</h4>
            <p className="date">{thesis.date}</p>
            {thesis.description.map((desc, index) => (
              <p key={index} className="description">{desc}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="resume-section achievements"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 