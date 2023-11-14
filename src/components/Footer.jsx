import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-blue-500 text-white text-center fixed bottom-0 left-0 w-full">
      <div className="flex items-center justify-between">
        <h2 className="ml-4">Copyright © 2023 PJ</h2>
        <h2 className="ml-4">Designed and Developed by Peter Janasz</h2>
        <div className="flex items-center">
          <a href="https://github.com/PeterJanasz" target="_blank" className="icon-block">
            <FontAwesomeIcon icon={faGithub} className="text-2xl p-3" />
          </a>
          <a href="https://www.linkedin.com/in/peter-janasz-0a10b079/" target="_blank" className="icon-block">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl p-3" />
          </a>
          <a href="https://www.instagram.com/pistola415/" target="_blank" className="icon-block">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl p-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
