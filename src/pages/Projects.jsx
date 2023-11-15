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
      description: 'MVC web app managing content and user interactions. Users can create profiles, select multiple seats, and receive personalized QR codes containing ticket information.',
    },
    {
      title: 'Recipe App',
      imageSrc: '/images/FoodMakerApp.png',
      projectLink: 'https://peterjanasz.github.io/Recipe-Finder-App/',
      description: 'Recipe Finder App that pulls recipes based off of user input selection using third party APIs.',
    },
    {
      title: 'Weather App',
      imageSrc: '/images/weatherApp.png',
      projectLink: 'https://peterjanasz.github.io/Weather-Dashboard-M6/',
      description: 'Weather App using third party APIs to retrieve current weather and 5-day forecast for a certain city',
    },
    {
      title: 'Social Network API',
      imageSrc: '/images/SocialNetworkAPI.png',
      projectLink: 'https://github.com/PeterJanasz/Social-Network-API',
      description: 'The Social Network API is a robust and flexible backend application built with Node.js, Express.js, and MongoDB using Mongoose.',
    },
    {
      title: 'Note Taker App',
      imageSrc: '/images/NoteTakerApp.png',
      projectLink: 'https://desolate-waters-39093-3c9b8d4cd640.herokuapp.com/',
      description: 'Note-Taker app that allows you to create, read, update, and delete notes. This app was built with express.js using JSON to save and retrieve data.',
    },
    {
      title: 'E-Commerce App',
      imageSrc: '/images/E-CommerceApp.png',
      projectLink: 'https://github.com/PeterJanasz/E-commerce-Back-End',
      description: 'This project provides a functional Express.js API that allows users to connect to a MySQL database using Sequelize.',
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
