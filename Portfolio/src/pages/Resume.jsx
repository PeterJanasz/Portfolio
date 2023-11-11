import React from 'react';
import { FaGithub, FaFilePdf } from 'react-icons/fa';

const TechCard = ({ title, techList }) => (
  <div className="max-w-xs bg-transparent rounded overflow-hidden shadow-md mx-2">
    <div className="px-6 py-4 bg-white bg-opacity-0 backdrop-blur-md">
      <div className="font-bold text-xl mb-2">{title}</div>
      <ul className="list-disc space-y-1 flex flex-col items-center">
        {techList.map((tech, index) => (
          <li key={index} className="flex items-center">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Resume = () => {
  const frontEndTech = ["HTML5", "CSS", "JavaScript", "APIs", "Bootstrap", "GIT"];
  const backEndTech = ["Node.Js", "Jest", "Express.js", "MySQL", "Sequelize", "Object-Relational Mapping(ORM)", "Model-View-Controller (MVC)"];
  const performanceTech = ["NoSQL", "Progressive Web Applications (PWA)", "MongoDB", "Mongoose", "GraphQL", "React", "MERN", "State"];

  const handleDownload = () => {
    // Replace the 'PeterJanaszResume.pdf' with your actual resume file name
    const resumeFileName = 'PeterJanaszResume.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = `/images/${resumeFileName}`;
    link.download = resumeFileName; // Set the desired download file name

    // Append the link to the document and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };


  return (
    <div>
      <h1 className="text-2xl font-bold py-4">Resume</h1>
      <div className="flex flex-col items-center">
        {/* PDF Icon */}
        <a href="/images/PeterJanaszResume.pdf" download="PeterJanaszResume.pdf" className="w-8 h-8 text-red-500">
          <FaFilePdf className="w-full h-full" />
        </a>

        {/* Download Button */}
        <button onClick={handleDownload} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Resume
        </button>

        {/* GitHub Link */}
        <a
          href="https://github.com/PeterJanasz?tab=repositories" // Replace with your GitHub repo URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center flex-col text-gray-500 hover:text-gray-700 mb-5"
        >
          <FaGithub className="w-6 h-6" />
          <p className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">GitHub Repository</p>
        </a>

      </div>

      <section id="home-page-body" className="resume-body mb-4">
        <div className="flex space-x-4 justify-center">
          {/* Front-End Tech Card */}
          <TechCard title="Front-End Tech" techList={frontEndTech} />

          {/* Back-End Tech Card */}
          <TechCard title="Back-End Tech" techList={backEndTech} />

          {/* Performance Tech Card */}
          <TechCard title="Performance Tech" techList={performanceTech} />
        </div>
      </section>
    </div>
  );
};

export default Resume;
