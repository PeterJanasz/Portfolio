// Importing necessary dependencies from react-router-dom library
import { Link, useLocation } from 'react-router-dom';

// Functional component representing navigation tabs for the application
function NavTabs() {
  // Using the useLocation hook to get the current page's pathname
  const currentPage = useLocation().pathname;

  // Rendering a list of navigation links with associated routes
  return (
    // Unordered list with styling classes for the navigation tabs
    <ul className="bg-blue-500 py-1 flex space-x-4">
      {/* Individual navigation item for the "About" page */}
      <li className="nav-item">
        {/* Link to the "/About" route with styling classes */}
        <Link to="/About" className="py-2 px-4 text-white hover:bg-blue-700 rounded">
          About
        </Link>
      </li>
      {/* Individual navigation item for the "Projects" page */}
      <li className="nav-item">
        {/* Link to the "/Projects" route with styling classes */}
        <Link to="/Projects" className="py-2 px-4 text-white hover:bg-blue-700 rounded">
          Projects
        </Link>
      </li>
      {/* Individual navigation item for the "Resume" page */}
      <li className="nav-item">
        {/* Link to the "/Resume" route with styling classes */}
        <Link to="/Resume" className="py-2 px-4 text-white hover:bg-blue-700 rounded">
          Resume
        </Link>
      </li>
      {/* Individual navigation item for the "Contact" page */}
      <li className="nav-item">
        {/* Link to the "/Contact" route with styling classes */}
        <Link to="/Contact" className="py-2 px-4 text-white hover:bg-blue-700 rounded">
          Contact
        </Link>
      </li>
    </ul>
  );
}

// Exporting the NavTabs component to make it available for use in other parts of the application
export default NavTabs;
