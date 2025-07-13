import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";

function MobileSocialEmail() {
  const socialLinks = [
    { 
      name: "Github", 
      icon: <FiGithub />, 
      link: "https://github.com/farhan-sadik247" 
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/md-farhan-sadik-39826721b/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/farhan_sadik247/",
    },
    {
      name: "Facebook",
      icon: <FiFacebook />,
      link: "https://www.facebook.com/farhan.sadiq2407",
    },
  ];

  return (
    <motion.div
      className="mobile-social-email"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <div className="mobile-social-email-container">
        <div className="mobile-social-icons">
          {socialLinks.map(({ name, icon, link }) => (
            <Link
              key={name}
              href={link}
              className="mobile-social-icon-link"
              target="_blank"
              title={name}
            >
              {icon}
            </Link>
          ))}
        </div>
        <div className="mobile-email">
          <Link
            href="mailto:md.farhan.sadik.578@gmail.com"
            className="mobile-email-link"
            title="Email"
          >
            <FiMail />
            <span>md.farhan.sadik.578@gmail.com</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default MobileSocialEmail; 