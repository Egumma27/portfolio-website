import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import "./App.css";
import profileImage from "./assets/IMG_1092.png";

// Theme objects
const lightTheme = {
  primaryColor: "#f0f2f5",
  secondaryColor: "#d1d1d1",
  textColor: "#000000",
  accentColor: "#1a1a2e",
  sidebarHover: "#767676",
};

const darkTheme = {
  primaryColor: "#1e1e1e",
  secondaryColor: "#121212",
  textColor: "#ffffff",
  accentColor: "#10a37f",
  sidebarHover: "#0c7a60",
};

const blueTheme = {
  primaryColor: "#e8f0fe",
  secondaryColor: "#a3c1da",
  textColor: "#333",
  accentColor: "#1a73e8",
  sidebarHover: "#0f5fcf",
};

const greenTheme = {
  primaryColor: "#e8f5e9",
  secondaryColor: "#a5d6a7",
  textColor: "#333",
  accentColor: "#43a047",
  sidebarHover: "#2c7c3d",
};

// Helper function for theme switching
function getThemeName(themeObj) {
  if (themeObj === lightTheme) return "light";
  if (themeObj === darkTheme) return "dark";
  if (themeObj === blueTheme) return "blue";
  if (themeObj === greenTheme) return "green";
  return "light";
}

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [theme, setTheme] = useState(lightTheme);
  const [showSidebar, setShowSidebar] = useState(true); // Always visible on PC, toggle on mobile
  const [isMobile, setIsMobile] = useState(false);
  const [showThemeSettings, setShowThemeSettings] = useState(false); // Toggle for settings

  // Detect screen size and update sidebar visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setShowSidebar(false); // Hide sidebar on mobile initially
      } else {
        setIsMobile(false);
        setShowSidebar(true); // Show sidebar on PC
      }
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const toggleThemeSettings = () => {
    setShowThemeSettings((prev) => !prev);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setShowThemeSettings(false); // Close settings after selecting a theme
  };

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
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app-container" data-theme={getThemeName(theme)}>
          {/* 📌 Mobile Sidebar Toggle Button (Only Visible on Mobile) */}
          {isMobile && (
            <button className="mobile-toggle" onClick={toggleSidebar}>
              {showSidebar ? "✖ Close" : "☰ Menu"}
            </button>
          )}

          <div className={`content-wrapper ${showSidebar ? "sidebar-open" : "sidebar-closed"}`}>
            {showSidebar && (
              <Sidebar className="app-sidebar">
                <div className="sidebar-profile">
                  <img src={profileImage} alt="Profile" className="profile-img" />
                  <h2 className="profile-name">Emilio Gumma</h2>
                  <p className="profile-title">Software Engineer</p>
                </div>

                <div className="sidebar-menu">
                  <Menu>
                    <MenuItem onClick={() => setCurrentSection("home")}>Home</MenuItem>
                    <MenuItem onClick={() => setCurrentSection("about")}>About</MenuItem>
                    <MenuItem onClick={() => setCurrentSection("skills")}>Skills</MenuItem>
                    <MenuItem onClick={() => setCurrentSection("experience")}>Experience</MenuItem>
                    <MenuItem onClick={() => setCurrentSection("projects")}>Projects</MenuItem>
                    <MenuItem onClick={() => setCurrentSection("contact")}>Contact</MenuItem>
                  </Menu>
                </div>

                {/* 🛠️ Settings Section */}
                <div className="sidebar-settings">
                  <button className="settings-toggle" onClick={toggleThemeSettings}>
                    ⚙️ Settings
                  </button>
                  {showThemeSettings && (
                    <div className="theme-settings">
                      <button onClick={() => handleThemeChange(lightTheme)}>Light</button>
                      <button onClick={() => handleThemeChange(darkTheme)}>Dark</button>
                      <button onClick={() => handleThemeChange(blueTheme)}>Blue</button>
                      <button onClick={() => handleThemeChange(greenTheme)}>Green</button>
                    </div>
                  )}
                </div>
              </Sidebar>
            )}

            <main className="main-content">{renderSection()}</main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
