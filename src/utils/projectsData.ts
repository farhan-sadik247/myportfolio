export interface Project {
  image: string;
  projectName: string;
  projectDescription: string;
  projectTech: string[];
  projectExternalLinks: {
    github: string;
    demo?: string;
    projectLink?: string;
  };
}

export const projectsData: Project[] = [
  {
    image: "/journal.png", // You'll need to add this image
    projectName: "Academic Journal Publish Website",
    projectDescription: "Built a full-stack academic journal platform supporting end-to-end workflow: submission → peer review → editorial decision → copyediting → publication. Integrated Google OAuth with role-based access and promotion system, ensuring secure multi-level editorial control. Enabled real-time manuscript tracking, email notifications, and manual payment processing via bank transfer.",
    projectTech: ["Next.js", "MongoDB", "TypeScript", "NextAuth.js", "SCSS"],
    projectExternalLinks: {
      github: "https://github.com/farhan-sadik247/journalWebsite.git",
      demo: "https://gjadt.vercel.app/",
      projectLink: "https://gjadt.vercel.app/"
    }
  },
  {
    image: "/design-editor.png", // You'll need to add this image
    projectName: "Mini Design Editor App",
    projectDescription: "Built a cross-platform mobile design editor with canvas rendering via Skia, enabling real-time drawing and manipulation. Integrated gesture-based interactions (drag, pinch, zoom) using Gesture Handler and smooth 60fps animations with Reanimated. Enabled adding styled text, importing images, creating shapes, and exporting designs as PNGs.",
    projectTech: ["React Native", "Expo", "TypeScript", "Skia", "Reanimated"],
    projectExternalLinks: {
      github: "https://github.com/farhan-sadik247/design-editor-app",
      demo: "https://tinyurl.com/DragNDrop2o",
      projectLink: "https://tinyurl.com/DragNDrop2o"
    }
  },
  {
    image: "/missing-link.png", // You'll need to add this image
    projectName: "Missing Link",
    projectDescription: "Developed a decentralized application (DApp) for reporting, tracking, and assisting in finding missing individuals. Enabled public case visibility and secure on-chain reporting with smart contracts on Ethereum. Built features like appointment booking, case tracking, and investigator dashboards for transparency. Integrated MetaMask, Ganache, and Truffle for secure local testing and Docker support for deployment.",
    projectTech: ["Solidity", "React.js", "Web3.js", "Truffle", "Docker"],
    projectExternalLinks: {
      github: "https://github.com/farhan-sadik247/missing-link"
    }
  },
  {
    image: "/edu.png",
    projectName: "Education Platform Website",
    projectDescription: "Created an e-learning platform inspired by BUX, allowing teachers to upload and manage content. Implemented secure user roles for students and instructors. Enabled enrollment system and dashboard for viewing lectures and progress. Built REST APIs to support future scalability and content moderation.",
    projectTech: ["React.js", "Django", "PostgreSQL"],
    projectExternalLinks: {
      github: "https://github.com/farhan-sadik247/EducationPlatForm-Frontend.git"
    }
  },
  {
    image: "/tailor.png",
    projectName: "Tailor Maven",
    projectDescription: "Developed an online tailoring platform with 3D suit previews, real-time customization using React Three Fiber, and live chat. Integrated Stripe payment gateway and OAuth2.0 login system for secure and seamless transactions. Built admin dashboard with order tracking and gifting features for improved user experience.",
    projectTech: ["MERN Stack", "Stripe", "Socket.io", "React Three Fiber"],
    projectExternalLinks: {
      github: "https://github.com/al-rafi304/TailorMaven.git",
      demo: "https://tailor-maven-app.vercel.app/",
      projectLink: "https://tailor-maven-app.vercel.app/"
    }
  },
  {
    image: "/tolet.png",
    projectName: "House Rental Website",
    projectDescription: "Designed a city-specific rental platform with searchable listings and booking functionality. Implemented an admin panel to manage property data and access control. Focused on ease-of-use for individuals relocating to Dhaka.",
    projectTech: ["Django", "SQLite", "HTML/CSS"],
    projectExternalLinks: {
      github: "https://github.com/farhan-sadik247/House-Rental-Website.git"
    }
  }
]; 