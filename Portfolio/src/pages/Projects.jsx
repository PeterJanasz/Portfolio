import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Adjust the path based on your project structure

const Projects = () => {
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

  return (
    <div>
      <header className="text-2xl font-bold py-4">My Work</header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
