import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

function App() {
  const [currentSection, setCurrentSection] = useState("home"); // Default is "home"

  // Function to render the current section dynamically
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
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar
          backgroundColor="#1a1a2e"
          rootStyles={{
            color: "#fff",
          }}
        >
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: "#0f3460",
                  color: "#e94560",
                },
                color: "#fff",
                padding: "10px 15px",
              },
            }}
          >
            <MenuItem
              icon={<span>🏠</span>}
              onClick={() => setCurrentSection("home")}
            >
              Home
            </MenuItem>
            <MenuItem
              icon={<span>🧑</span>}
              onClick={() => setCurrentSection("about")}
            >
              About
            </MenuItem>
            <MenuItem
              icon={<span>🛠️</span>}
              onClick={() => setCurrentSection("skills")}
            >
              Skills
            </MenuItem>
            <MenuItem
              icon={<span>📂</span>}
              onClick={() => setCurrentSection("experience")}
            >
              Experience
            </MenuItem>
            <MenuItem
              icon={<span>📁</span>}
              onClick={() => setCurrentSection("projects")}
            >
              Projects
            </MenuItem>
          </Menu>
        </Sidebar>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "20px" }}>{renderSection()}</main>
      </div>
    </Router>
  );
}

export default App;
