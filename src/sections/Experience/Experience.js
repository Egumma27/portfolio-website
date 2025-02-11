import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      <h2 className="experience-heading">Experience</h2>

      <div className="experience-item">
        <h3 className="experience-company">Rocket Mortgage</h3>
        <p className="experience-position">
          <i>Software Engineering Intern (Jun. 2024 – Aug. 2024)</i>
        </p>
        <ul className="experience-list">
          <li>
            Designed, tested, and implemented software solutions using CircleCI,
            AWS, and Python.
          </li>
          <li>
            Enhanced system performance by resolving bugs and collaborating in
            Agile sprints.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3 className="experience-company">Kelly’s Beverages</h3>
        <p className="experience-position">
          <i>Retail Store Manager (Jul. 2020 – Present)</i>
        </p>
        <ul className="experience-list">
          <li>
            Managed daily store operations, inventory, and team coordination.
          </li>
          <li>
            Optimized store efficiency and ensured excellent customer service.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
