import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0 auto", maxWidth: "800px", padding: "20px", lineHeight: "1.6" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5em", color: "#333" }}>Emilio Gumma</h1>
        <p style={{ fontSize: "1.2em", color: "#555" }}>Farmington Hills, MI | gummae@icloud.com | 248-954-5898</p>
      </header>
      
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ borderBottom: "2px solid #555", paddingBottom: "5px" }}>Experience</h2>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ margin: "0", color: "#222" }}>Rocket Mortgage, Detroit, MI</h3>
          <p style={{ margin: "0", fontStyle: "italic" }}>Software Engineering Intern (Jun. 2024 – Aug. 2024)</p>
          <ul>
            <li>Designed, tested, and implemented software solutions using CircleCI, AWS, and Python.</li>
            <li>Resolved bugs to enhance system performance and participated in agile development cycles.</li>
          </ul>
        </div>
        <div>
          <h3 style={{ margin: "0", color: "#222" }}>Kelly’s Beverages, Eastpointe, MI</h3>
          <p style={{ margin: "0", fontStyle: "italic" }}>Retail Store Manager (Jul. 2020 – Present)</p>
          <ul>
            <li>Managed daily store operations, inventory, and team coordination.</li>
            <li>Provided exceptional customer service and optimized store efficiency.</li>
          </ul>
        </div>
      </section>
      
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ borderBottom: "2px solid #555", paddingBottom: "5px" }}>Projects</h2>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ margin: "0", color: "#222" }}>WSU Rideshare</h3>
          <ul>
            <li>Developed an iOS/Android app using Flutter and integrated Google Maps API.</li>
            <li>Designed a matching algorithm in Python to pair riders and drivers efficiently.</li>
          </ul>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ margin: "0", color: "#222" }}>Pokémon Battle Simulator</h3>
          <ul>
            <li>Created a turn-based battle game simulating Pokémon mechanics.</li>
            <li>Integrated AI for opponent behavior to enhance user engagement.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ borderBottom: "2px solid #555", paddingBottom: "5px" }}>Skills</h2>
        <p><strong>Programming Languages:</strong> Python, C, C++, Java, Dart, SQL</p>
        <p><strong>Software Experience:</strong> HTML, CSS, Firebase, Flutter, AWS, CircleCI</p>
      </section>

      <section>
        <h2 style={{ borderBottom: "2px solid #555", paddingBottom: "5px" }}>Education</h2>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ margin: "0", color: "#222" }}>Wayne State University, Detroit, MI</h3>
          <p style={{ margin: "0", fontStyle: "italic" }}>Bachelor of Science in Computer Science (Jan. 2023 – Dec. 2024)</p>
        </div>
        <div>
          <h3 style={{ margin: "0", color: "#222" }}>Oakland Community College, Farmington Hills, MI</h3>
          <p style={{ margin: "0", fontStyle: "italic" }}>Completed coursework in Computer Science (Aug. 2020 – Dec. 2022)</p>
        </div>
      </section>
    </div>
  );
}

export default App;
