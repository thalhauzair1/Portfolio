import React, { useRef } from "react";
import LeftSideBar from "./component/leftsidebar/leftSideBar";
import "./App.css";
import Main from "./component/Main/Main";
import { Analytics } from "@vercel/analytics/react";

function App() {
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Update the custom properties for mouse position
    document.documentElement.style.setProperty("--pointerX", `${x}px`);
    document.documentElement.style.setProperty("--pointerY", `${y}px`);
  });
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  return (
    <div className="container">
      <LeftSideBar
        sectionsRef={[aboutRef, experienceRef, projectsRef, skillsRef]}
      />
      <Main
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
      />
      <Analytics />
    </div>
  );
}

export default App;
