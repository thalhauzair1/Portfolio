import React from "react";
import "./projectcard.css";
import Chip from "../Chip/Chip";
import favioImage from "../../assets/ProjectImage/favio.svg";
import pawguardImage from "../../assets/ProjectImage/pawguard.svg";
import taskAppImage from "../../assets/ProjectImage/task-app.png";
import cleanOpsImage from "../../assets/ProjectImage/cleanops.svg";

function ProjectCard() {
  const projects = [
    // {
    //   title: "Music Player",
    //   description: "A basic music player developed using vanilla JavaScript.",
    //   stack: ["HTML", "SCSS", "JavaScript", "Netlify"],
    //   link: "#", // Replace with actual link
    //   image: "/mnt/data/image.png", // Replace with your actual image path
    // },
    {
      title: "FAVIO",
      description: "A same-day sustainable delivery web application.",
      stack: ["HTML", "CSS", "JavaScript", "Firebase", "Google API", "Vercel"],
      link: "https://favio.vercel.app/", // Replace with actual link
      image: favioImage, // Replace with your actual image path
    },
    {
      title: "Task Management App",
      description: "A task management application built with React and Redux.",
      stack: ["React", "Redux", "CSS", "Node.js", "Vercel"],
      link: "https://task-management-xi-three.vercel.app/", // Replace with actual link
      image: taskAppImage, // Replace with your actual image path
    },
    {
      title: "PawGuard",
      description: "An app for pet safety and tracking, developed with React.",
      stack: ["React", "Node.js", "MongoDB", "AWS S3", "JWT", "Amazon Ec2"],
      link: "#", // Replace with actual link
      image: pawguardImage, // Replace with your actual image path
    },
    {
      title: "CleanOps",
      description:
        "A mobile app optimizing housekeeping operations for hotels.",
      stack: [
        "React Native",
        "Node.js",
        "Azure MySQL",
        "Amazon EC2",
        "AWS S3",
        "JWT",
      ],
      link: "https://cleanops-landingpage.vercel.app/", // Replace with actual link
      image: cleanOpsImage, // Replace with your actual image path
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {/* Thumbnail */}
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />

          {/* Content */}
          <div className="project-content">
            <h3 className="project-title">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title} ↗
              </a>
            </h3>
            <p className="project-description">{project.description}</p>

            {/* Tech Stack */}
            <div className="project-stack">
              {project.stack.map((tech, techIndex) => (
                <Chip key={techIndex} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
