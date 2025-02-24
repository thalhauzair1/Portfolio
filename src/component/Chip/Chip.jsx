import React from "react";
import "./Chip.css"; // Assuming you store the CSS in this file

const Chip = ({ tech }) => {
  return <span className="tech-chip">{tech}</span>;
};

export default Chip;
