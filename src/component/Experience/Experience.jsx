import React from "react";
import "./Experience.css";
import Chip from "../Chip/Chip";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "MuleSoft Intern",
      company: "Capgemini",
      date: "Jan 2020",
      location: "Remote",
      skills: ["MuleSoft", "Dell Boomi", "API Integration", "Spring Boot"],
      description:
        "Started my tech journey here! Got trained in MuleSoft and Dell Boomi.",
      details:
        "This internship helped me build a solid foundation in API integration and enterprise middleware. I also became certified in Dell Boomi, enhancing my understanding of cloud-based integration technologies.",
    },
    {
      id: 2,
      title: "Developer",
      company: "Capgemini",
      date: "2020 - 2022",
      location: "India",
      skills: ["Java", "Spring Boot", "AngularJS", "MySQL", "Liquibase Script"],
      description:
        "Worked on developing and maintaining enterprise applications.",
      details:
        "Built and optimized RESTful APIs, improved application performance, and collaborated with cross-functional teams to deliver scalable software solutions.",
    },
    {
      id: 3,
      title: "Apple Repair Technician",
      company: "Tbooth Wireless",
      date: "2022",
      location: "Canada",
      skills: ["Hardware Repair", "Customer Service", "Diagnostics"],
      description: "Performed diagnostics and repairs on Apple devices.",
      details:
        "Provided high-quality repair services while ensuring excellent customer experience and technical support.",
    },
    {
      id: 4,
      title: "Geek Squad Technician",
      company: "Best Buy",
      date: "2023 - Present",
      location: "Canada",
      skills: ["Technical Support", "Diagnostics", "Customer Service"],
      description: "Delivering expert repair services and technical solutions.",
      details:
        "Assisting customers with troubleshooting, repairs, and installations while ensuring optimal device performance and security.",
    },
  ];

  return (
    <div className="experience-list">
      {experienceData.map((item) => (
        <div key={item.id} className="experience-card">
          <div className="card-header">
            <span className="card-date">{item.date}</span>
            <div className="job-info">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-company">{item.company} ↗</p>
            </div>
          </div>
          <p className="card-location">{item.location}</p>
          <p className="card-description">{item.description}</p>
          <p className="card-details">{item.details}</p>
          <div className="skills-container">
            {item.skills.map((skill, index) => (
              <Chip key={index} tech={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
