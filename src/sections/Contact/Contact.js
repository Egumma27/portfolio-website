import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <p>
        Email:{" "}
        <a className="email-link" href="mailto:gummae@icloud.com">
          gummae@icloud.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a className="phone-link" href="tel:2489545898">
          248-954-5898
        </a>
      </p>
      <div className="linkedin-container">
        <a
          className="linkedin-logo-link"
          href="https://www.linkedin.com/in/emilio-gumma-165630254/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn Logo"
            className="linkedin-logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/emilio-gumma-165630254/"target="_blank" rel="noopener noreferrer"className="linkedin-text">Connect with me on LinkedIn</a>
      </div>
    </div>
  );
}

export default Contact;
