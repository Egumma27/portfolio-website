import React, { useState } from "react";
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
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      {/* Navigation */}
      <header style={{ marginBottom: "20px" }}>
        <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px 0", borderBottom: "2px solid #ddd" }}>
          <button onClick={() => setCurrentSection("home")} style={navButtonStyle}>Home</button>
          <button onClick={() => setCurrentSection("about")} style={navButtonStyle}>About</button>
          <button onClick={() => setCurrentSection("skills")} style={navButtonStyle}>Skills</button>
          <button onClick={() => setCurrentSection("experience")} style={navButtonStyle}>Experience</button>
          <button onClick={() => setCurrentSection("projects")} style={navButtonStyle}>Projects</button>
        </nav>
      </header>

      {/* Main Content */}
      <main>{renderSection()}</main>
    </div>
  );
}

const navButtonStyle = {
  background: "none",
  border: "none",
  fontSize: "1.2em",
  cursor: "pointer",
  color: "#333",
  padding: "5px 10px",
};

export default App;
