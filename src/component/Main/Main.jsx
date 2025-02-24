import React from "react";
import "./Main.css";
import Experience from "../Experience/Experience";
import ProjectCard from "../projectcard/projectcard";
import SkillsMarquee from "../SkilMatrix/SkillMatrix";

function Main({ aboutRef, experienceRef, projectsRef, skillsRef }) {
  return (
    <div className="main">
      <section className="about-section" id="about" ref={aboutRef}>
        <p>
          <span> </span>I am a passionate software developer with a diverse
          skill set in API integration, web development, and UI/UX design. My
          journey started in backend API development and cloud integrations, and
          I’ve since broadened my expertise to include front-end and full-stack
          development.
        </p>
        <p>
          I've had the opportunity to work on projects like FAVIO, a same-day
          sustainable delivery app, and CleanOps, a mobile app designed to
          optimize housekeeping operations. I enjoy building scalable, modern
          applications and refining user experiences through intuitive design.
        </p>
        <p>
          Currently, I’m honing my skills in frameworks like React, Redux, and
          Node.js, while diving deeper into MuleSoft for advanced API
          integrations and enterprise solutions.
        </p>
        <p>
          Outside of work, you can find me solving complex problems, staying
          updated on emerging technologies, or unwinding with a game of Dota, a
          good hike, or some music and cooking.
        </p>
      </section>

      <div className="resume-container">
        <a
          href="resume/thalhauzair_resume.pdf"
          download
          className="resume-link"
        >
          Download Resume
          <svg
            className="arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <section
        className="experience-section"
        id="experience"
        ref={experienceRef}
      >
        <Experience />
      </section>

      <section className="projects-section" id="projects" ref={projectsRef}>
        <ProjectCard />
      </section>

      <section className="skills-marquee" id="skills" ref={skillsRef}>
        <SkillsMarquee />
      </section>
    </div>
  );
}

export default Main;
