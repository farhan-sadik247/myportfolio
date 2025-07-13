import Button from "@/components/Button";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const roles = ["CSE Graduate", "Frontend Developer", "Full Stack Developer", "React Native Developer", "AI Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const slideUp = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const renderAnimatedText = (text: string) => {
    return text.split('').map((char, idx) => (
      <motion.span
        key={idx}
        className={`animated-char ${char === ' ' ? 'space' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: char === ' ' ? 0 : 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: idx * 0.04,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <div className="hero">
      <div className="hero-background">
        <div className="gradient-sphere gradient-sphere-1" />
        <div className="gradient-sphere gradient-sphere-2" />
        <div className="grid-overlay" />
      </div>
      
      <motion.div 
        className="hero-content"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div className="hero-intro" variants={fadeIn}>
          <motion.span className="hero-greeting">
            Hi, my name is
          </motion.span>
        </motion.div>

        <motion.h1 
          className="hero-name"
          variants={slideUp}
        >
          Farhan Sadik
          <span className="hero-name-dot">.</span>
        </motion.h1>

        <motion.div 
          className="hero-title-animation"
          variants={slideUp}
        >
          <span className="static-text">I am a</span>
          <div className="animated-text-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                className="animated-text"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                {renderAnimatedText(roles[currentRole])}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p 
          className="hero-text"
          variants={slideUp}
        >
          I&apos;m a Computer Science graduate with a passion for creating impactful web solutions. 
          Specializing in frontend development with growing expertise in full-stack applications, 
          I focus on building accessible, user-centered digital experiences. 
          My approach combines technical excellence with creative problem-solving 
          to deliver innovative solutions that make a difference.
        </motion.p>

        <motion.div 
          className="hero-cta"
          variants={fadeIn}
        >
          <Button
            text="Check out my resume"
            link="/FSCV.pdf"
          />
          <motion.div 
            className="scroll-indicator"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="scroll-text">Scroll Down</span>
            <span className="scroll-arrow">↓</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
