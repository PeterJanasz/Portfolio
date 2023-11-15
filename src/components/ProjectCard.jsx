// Importing React library
import React from 'react';

// Functional component representing a card for displaying project information
const ProjectCard = ({ title, imageSrc, projectLink, description }) => (
  // Card container with styling classes
  <div className="max-w-sm rounded overflow-hidden shadow-xl mx-10 shadow-blue-500/50 transform transition-transform hover:scale-105">
    {/* Project title */}
    <h1 className="font-bold text-xl mb-2">{title}</h1>
    
    {/* Link to the project with target="_blank" for opening in a new tab */}
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      {/* Image for the project */}
      <img src={imageSrc} alt="Project Image" className="w-full h-auto" />
    </a>
    
    {/* Description of the project */}
    <div className="px-6 py-4">
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

// Exporting the ProjectCard component to make it available for use in other parts of the application
export default ProjectCard;
