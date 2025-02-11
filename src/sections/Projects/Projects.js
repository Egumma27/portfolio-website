import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>

      <div className="project-item">
        <h3 className="project-title">WSU Rideshare</h3>
        <ul className="project-list">
          <li>
            Developed an iOS/Android app using Flutter and integrated Google Maps API.
          </li>
          <li>
            Created a Python algorithm to match riders and drivers efficiently.
          </li>
        </ul>
      </div>

      <div className="project-item">
        <h3 className="project-title">Pokémon Battle Simulator</h3>
        <ul className="project-list">
          <li>
            Built a turn-based battle game simulating Pokémon mechanics.
          </li>
          <li>
            Implemented AI to enhance opponent interactions and improve engagement.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
