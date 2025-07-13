import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Loader({ isLoading, setIsLoading }: LoaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1900);
    return () => clearTimeout(timer); // Clear timeout if component unmounts early
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="loader-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
          >
            <div className="loader-image-container">
              <motion.div
                className="rotating-ring"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="var(--theme-color)"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
              <motion.div
                className="loader-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <Image 
                  src="/FS.png" 
                  alt="Farhan Sadik" 
                  width={120} 
                  height={120}
                  priority
                />
              </motion.div>
            </div>
            <motion.h1
              className="loader-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              Farhan Sadik Portfolio
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
