// Importing React library and the ProjectCard component
import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Functional component representing a section to display a list of projects
const Projects = () => {
  // Array of project data, each containing title, image source, project link, and description
  const projectData = [
    {
      title: 'Movie Ticket Site',
      imageSrc: '/images/MovieApp.png',
      projectLink: 'https://mysterious-inlet-40074-9e2265a3da95.herokuapp.com/',
      description: 'Project description goes here.',
    },
    {
      title: 'Recipe App',
      imageSrc: '/images/FoodMakerApp.png',
      projectLink: 'https://peterjanasz.github.io/Recipe-Finder-App/',
      description: 'Project description goes here.',
    },
    {
      title: 'Weather App',
      imageSrc: '/images/weatherApp.png',
      projectLink: 'https://peterjanasz.github.io/Weather-Dashboard-M6/',
      description: 'Project description goes here.',
    },
    {
      title: 'Weather App',
      imageSrc: '/images/weatherApp.png',
      projectLink: 'https://peterjanasz.github.io/Weather-Dashboard-M6/',
      description: 'Project description goes here.',
    },
    {
      title: 'Weather App',
      imageSrc: '/images/weatherApp.png',
      projectLink: 'https://peterjanasz.github.io/Weather-Dashboard-M6/',
      description: 'Project description goes here.',
    },
    {
      title: 'Weather App',
      imageSrc: '/images/weatherApp.png',
      projectLink: 'https://peterjanasz.github.io/Weather-Dashboard-M6/',
      description: 'Project description goes here.',
    },
    // Add more project data as needed
  ];

   // Rendering the Projects component
   return (
    <div>
      {/* Header for the section */}
      <header className="text-2xl font-bold py-4">My Work</header>
      
      {/* Grid for displaying projects in a responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Mapping over the projectData array and rendering ProjectCard for each project */}
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

// Exporting the Projects component to make it available for use in other parts of the application
export default Projects;
