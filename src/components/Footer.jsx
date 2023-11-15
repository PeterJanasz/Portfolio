// Importing necessary dependencies from the React library and FontAwesome
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Functional component representing the Footer of the application
const Footer = () => {
  return (
    // The container div for the footer with styling classes
    <div className="bg-blue-500 text-white text-center fixed bottom-0 left-0 w-full">
      {/* Flex container for arranging content */}
      <div className="flex items-center justify-between">
        {/* Copyright information */}
        <h2 className="ml-4">Copyright © 2023</h2>
        {/* Information about the designer and developer */}
        <h2 className="ml-4">Designed and Developed by Peter Janasz</h2>
        {/* Container for social media icons */}
        <div className="flex items-center">
          {/* GitHub icon with a link to the profile */}
          <a href="https://github.com/PeterJanasz" target="_blank" className="icon-block">
            <FontAwesomeIcon icon={faGithub} className="text-2xl p-3" />
          </a>
          {/* LinkedIn icon with a link to the profile */}
          <a href="https://www.linkedin.com/in/peter-janasz-0a10b079/" target="_blank" className="icon-block">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl p-3" />
          </a>
          {/* Instagram icon with a link to the profile */}
          <a href="https://www.instagram.com/pistola415/" target="_blank" className="icon-block">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl p-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Exporting the Footer component to make it available for use in other parts of the application
export default Footer;
