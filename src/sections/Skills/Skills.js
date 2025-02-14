import React, { useState } from "react";
import "./Skills.css";

// A component for an individual skill card that opens a pop-up modal with details.
const SkillCard = ({ skill, proficiency, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    // Prevent closing the modal when clicking inside the content area.
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="skill-card" onClick={openModal}>
        <div className="skill-card-header">{skill}</div>
        <div className="skill-card-proficiency">{proficiency}</div>
      </div>
      {isModalOpen && (
        <div className="skill-modal-overlay" onClick={closeModal}>
          <div className="skill-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{skill}</h2>
            <p>{details}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

function Skills() {
  // Sample data; add more skills as needed.
  const skillsData = [
    {
      skill: "Python",
      proficiency: "Advanced",
      details:
        "3 years experience working on backend development, data analysis, and automation.",
    },
    {
      skill: "C++",
      proficiency: "Intermediate",
      details: "Experience with object-oriented programming and systems development.",
    },
    {
      skill: "JavaScript",
      proficiency: "Advanced",
      details: "Extensive experience in web development using modern frameworks.",
    },
    {
      skill: "React",
      proficiency: "Advanced",
      details: "Extensive experience in web development using modern frameworks.",
    },
    {
      skill: "C#",
      proficiency: "Intermediate",
      details: "Extensive experience in web development using modern frameworks.",
    },
    // Add additional skills here...
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((item, index) => (
          <SkillCard
            key={index}
            skill={item.skill}
            proficiency={item.proficiency}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
