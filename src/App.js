import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <ProSidebar style={{ minHeight: "100vh", backgroundColor: "#333" }}>
        <Menu iconShape="square">
          <MenuItem style={{ color: "#fff" }} onClick={() => setCurrentSection("home")}>
            Home
          </MenuItem>
          <MenuItem style={{ color: "#fff" }} onClick={() => setCurrentSection("about")}>
            About
          </MenuItem>
          <MenuItem style={{ color: "#fff" }} onClick={() => setCurrentSection("skills")}>
            Skills
          </MenuItem>
          <MenuItem style={{ color: "#fff" }} onClick={() => setCurrentSection("experience")}>
            Experience
          </MenuItem>
          <MenuItem style={{ color: "#fff" }} onClick={() => setCurrentSection("projects")}>
            Projects
          </MenuItem>
        </Menu>
      </ProSidebar>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>{renderSection()}</div>
    </div>
  );
}

export default App;
