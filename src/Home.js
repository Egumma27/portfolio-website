import React from "react";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img 
        src="https://via.placeholder.com/200" 
        alt="Your Profile" 
        style={{ borderRadius: "50%", marginBottom: "20px" }} 
      />
      <h1 style={{ fontSize: "2.5em", color: "#333" }}>Welcome to Emilio Gumma's Portfolio</h1>
      <p style={{ fontSize: "1.2em", color: "#555" }}>A passionate software engineer with a drive for excellence.</p>
    </div>
  );
}

export default Home;
