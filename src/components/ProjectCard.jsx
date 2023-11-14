import React from 'react';

const ProjectCard = ({ title, imageSrc, projectLink, description }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-xl mx-10 shadow-blue-500/50 transform transition-transform hover:scale-105">
    <h1 className="font-bold text-xl mb-2">{title}</h1>
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      <img src={imageSrc} alt="Project Image" className="w-full h-auto" />
    </a>
    <div className="px-6 py-4">
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

export default ProjectCard;
