import React, { useState } from "react";
import "./Projects.css";

// A ProjectCard component modeled after your SkillCard.
const ProjectCard = ({ title, details, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <h3 className="project-title">{title}</h3>
      </div>
      {isModalOpen && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{title}</h2>
            <ul>
              {details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <div className="modal-buttons">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              )}
              <button onClick={closeModal} className="close-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function Projects() {
  const projectsData = [
    {
      title: "Resume Analyzer",
      details: [
        "Designed and developed a full‑stack application integrating a C# (.NET) backend, a React frontend, and a Python Flask microservice for advanced resume-job matching.",
        "Implemented a robust .NET API for handling resume uploads and extraction, with comprehensive endpoints documented and testable via Swagger.",
        "Built an intuitive React user interface that allows users to upload resumes, input job descriptions, and view real‑time match scores.",
        "Created a Python Flask service that runs a Sentence‑BERT model, enabling sophisticated natural language processing to evaluate resume relevance.",
        "Structured the project with a clear separation of concerns: backend services in C#, frontend interactions in React, and machine learning tasks in Python.",
        "Developed detailed documentation and setup guides covering prerequisites, environment configuration, and step‑by‑step instructions for running each service.",
        "Ensured seamless integration between components by managing cross‑service communication and maintaining data consistency across the application."
      ],
      link: "https://github.com/Egumma27/ResumeAnalyzer",
    },
    {
      title: "WSU Rideshare",
      details: [
        "Developed an iOS/Android app using Flutter and integrated Google Maps API.",
        "Created a Python algorithm to match riders and drivers efficiently.",
      ],
      link: "https://github.com/Egumma27/WSU-Rideshare",
    },
    {
      title: "Pokémon Battle Simulator",
      details: [
        "Built a turn-based battle game simulating Pokémon mechanics.",
        "Implemented logic for battling against a computer.",
      ],
      link: "https://github.com/Egumma27/Pokemon-Showdown-main",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            details={project.details}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
