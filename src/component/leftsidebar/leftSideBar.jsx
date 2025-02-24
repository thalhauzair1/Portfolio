import React, { useState, useEffect } from "react";
import "./leftSideBar.css";

function LeftSideBar({ sectionsRef }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section when it comes into view
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    sectionsRef.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current); // Observe each section by its ref
      }
    });

    return () => {
      sectionsRef.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current); // Clean up observers
        }
      });
    };
  }, [sectionsRef]);

  return (
    <div className="left-sidebar">
      <div className="profile-header">
        <h1
          className="heroTitle"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          THALHA UZAIR
        </h1>
        <h2>Software Engineer</h2>
        <p>
          I specialize in full-stack development, API integrations, and building
          scalable, modern applications with a focus on performance
          optimization.
        </p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {["about", "experience", "projects", "skills"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="social-links">
        <a
          href="https://github.com/thalhauzair1"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          GH
        </a>
        <a
          href="https://www.linkedin.com/in/thalha-uzair/"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          in
        </a>
        <a href="mailto:thalhauzair4@gmail.com" className="social-icon">
          ✉️
        </a>
      </div>
    </div>
  );
}

export default LeftSideBar;
