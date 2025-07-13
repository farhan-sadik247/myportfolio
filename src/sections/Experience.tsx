import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

type Education = {
  university: string;
  location: string;
  degree: string;
  duration: string;
  courses: string;
};

type Skills = {
  languages: string[];
  webDev: string[];
  blockchain: string[];
  databases: string[];
  versionControl: string[];
  productivity: string[];
};

type Thesis = {
  title: string;
  date: string;
  description: string[];
};

type Achievement = {
  title: string;
  description: string;
};

type ExperienceContent = Education | Skills | Thesis | Achievement[];

interface ExperienceItem {
  name: string;
  role: string;
  content: ExperienceContent;
}

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      if (underline) {
        underline.style.top = `${selected * 2.5}rem`;
      }
    };
    transformSelected();
  }, [selected]);

  const experiences: ExperienceItem[] = [
    {
      name: "Education",
      role: "Education",
      content: {
        university: "BRAC University",
        location: "Dhaka, Bangladesh",
        degree: "B.Sc. in Computer Science and Engineering",
        duration: "Jun 2021 -- May 2025",
        courses: "Software Engineering, System Analysis & Design, Natural Language Processing, Blockchain & Cryptocurrency, Data Structures & Algorithms"
      } as Education
    },
    {
      name: "Skills",
      role: "Technical Skills",
      content: {
        languages: ["Python", "C", "JavaScript", "TypeScript", "HTML", "CSS"],
        webDev: ["ReactJS", "React Native", "Django", "MERN Stack", "NextJS"],
        blockchain: ["Solidity", "Truffle", "Ganache", "MetaMask", "Docker"],
        databases: ["MySQL", "MongoDB"],
        versionControl: ["Git", "GitHub"],
        productivity: ["Microsoft Excel", "Word", "PowerPoint"]
      } as Skills
    },
    {
      name: "Thesis",
      role: "Academic Thesis",
      content: {
        title: "A Deep Learning Approach of Translating Speech into 3D Hand Sign Language (ASL)",
        date: "Jan 2025",
        description: [
          "Proposed a deep learning pipeline to convert speech into 3D ASL animation using speech-to-text, gloss translation, and keypoint mapping.",
          "Utilized Whisper, BART, MarianMT, OpenPifPaf, RTMPose3D, ResNet50, MediaPipe, and LSTM trained on the How2Sign dataset."
        ]
      } as Thesis
    },
    {
      name: "Achievements",
      role: "Achievements",
      content: [
        {
          title: "BUET CTF 2024",
          description: "Ranked 8th in the final round, organized by BUET Cybersecurity Club"
        },
        {
          title: "EWU CTF 2024",
          description: "Secured 5th place in the final round, hosted by East West University Robotics Club"
        }
      ] as Achievement[]
    }
  ];

  const renderContent = (selected: number) => {
    const content = experiences[selected].content;
    switch (experiences[selected].name) {
      case "Education": {
        const edu = content as Education;
        return (
          <div className="education-content">
            <h4>{edu.university}</h4>
            <p className="location">{edu.location}</p>
            <p className="degree">{edu.degree}</p>
            <p className="duration">{edu.duration}</p>
            <div className="courses">
              <h5>Relevant Coursework:</h5>
              <p>{edu.courses}</p>
            </div>
          </div>
        );
      }

      case "Skills": {
        const skills = content as Skills;
        return (
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="skill-tags">
                {skills.languages.map((skill: string, index: number) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Web Development</h4>
              <div className="skill-tags">
                {skills.webDev.map((skill: string, index: number) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Blockchain</h4>
              <div className="skill-tags">
                {skills.blockchain.map((skill: string, index: number) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>Databases</h4>
              <div className="skill-tags">
                {skills.databases.map((skill: string, index: number) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        );
      }

      case "Thesis": {
        const thesis = content as Thesis;
        return (
          <div className="thesis-content">
            <h4>{thesis.title}</h4>
            <p className="date">{thesis.date}</p>
            {thesis.description.map((desc: string, index: number) => (
              <p key={index} className="description">{desc}</p>
            ))}
          </div>
        );
      }

      case "Achievements": {
        const achievements = content as Achievement[];
        return (
          <div className="achievements-grid">
            {achievements.map((achievement: Achievement, index: number) => (
              <div key={index} className="achievement-card">
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>My Resume</h2>
      </div>

      <div className="resume-download">
        <Link href="/FSCV.pdf" target="_blank" className="download-button">
          <FiDownload /> Download CV
        </Link>
      </div>

      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => (
            <li
              className={`exp-slider-item ${
                index === selected && "exp-slider-item-selected"
              }`}
              onClick={() => setSelected(index)}
              key={experience.name}
            >
              <span>{experience.name}</span>
            </li>
          ))}
        </ul>
        <motion.div 
          className="exp-details"
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
            </h3>
            {renderContent(selected)}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;
