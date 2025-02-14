import React from "react";
import "./Home.css";
import profileImage from "./assets/IMG_1092.png";

function Home() {
  return (
    <div className="home-container">
      <img src={profileImage} alt="Profile" className="profile-img" />
      <h1 className="home-heading">Welcome to Emilio Gumma's Portfolio</h1>
      <p className="home-subheading">
        A passionate software engineer with a drive for excellence.
      </p>
    </div>
  );
}

export default Home;
