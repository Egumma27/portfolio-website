import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

function App() {
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
            <MenuItem component={<Link to="/" />} icon={<span>🏠</span>}>
              Home
            </MenuItem>
            <MenuItem component={<Link to="/about" />} icon={<span>🧑</span>}>
              About
            </MenuItem>
            <MenuItem component={<Link to="/skills" />} icon={<span>🛠️</span>}>
              Skills
            </MenuItem>
            <MenuItem component={<Link to="/experience" />} icon={<span>📂</span>}>
              Experience
            </MenuItem>
            <MenuItem component={<Link to="/projects" />} icon={<span>📁</span>}>
              Projects
            </MenuItem>
          </Menu>
        </Sidebar>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
