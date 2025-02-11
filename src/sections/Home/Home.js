import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <img 
        src="https://via.placeholder.com/200" 
        alt="Your Profile" 
        className="profile-img" 
      />
      <h1 className="home-heading">Welcome to Emilio Gumma's Portfolio</h1>
      <p className="home-subheading">
        A passionate software engineer with a drive for excellence.
      </p>
    </div>
  );
}

export default Home;
