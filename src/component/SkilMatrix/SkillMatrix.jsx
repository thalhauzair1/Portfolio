import React from "react";
import "./SkillMatrix.css";
import htmlIcon from "../../assets/icons/html5.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/javascript.svg";
import reactIcon from "../../assets/icons/react.svg";
import springIcon from "../../assets/icons/spring.svg";
import mongoIcon from "../../assets/icons/mongodb.svg";
import firebaseIcon from "../../assets/icons/firebase.svg";
import mulesoftIcon from "../../assets/icons/mulesoft.svg";
import gitIcon from "../../assets/icons/github.svg";
import figmaIcon from "../../assets/icons/figma.svg";
import javaIcon from "../../assets/icons/java-icon.svg";
import mysqlIcon from "../../assets/icons/mysql.svg";
import nodeIcon from "../../assets/icons/nodedotjs.svg";
import expressIcon from "../../assets/icons/express.svg";

const skills = [
  { name: "HTML", src: htmlIcon },
  { name: "CSS", src: cssIcon },
  { name: "JavaScript", src: jsIcon },
  { name: "React", src: reactIcon },
  { name: "Spring", src: springIcon },
  { name: "MongoDB", src: mongoIcon },
  { name: "Firebase", src: firebaseIcon },
  { name: "MuleSoft", src: mulesoftIcon },
  { name: "Git", src: gitIcon },
  { name: "Figma", src: figmaIcon },
  { name: "Java", src: javaIcon },
  { name: "MySQL", src: mysqlIcon },
  { name: "Node.js", src: nodeIcon },
  { name: "Express", src: expressIcon },
];

function SkillMatrix() {
  return (
    <section className="skill-matrix">
      {/* <h2>Technical Skills</h2> */}
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <img src={skill.src} alt={skill.name} title={skill.name} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillMatrix;
