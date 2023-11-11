import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="bg-blue-500 py-1 flex space-x-4">
      <li className="nav-item">
        <Link to="/About" className="py-2 px-4 text-white hover:bg-blue-700 rounded">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Projects" className="py-2 px-4 text-white hover:bg-blue-700 rounded">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className="py-2 px-4 text-white hover:bg-blue-700 rounded">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Resume" className="py-2 px-4 text-white hover:bg-blue-700 rounded">
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
