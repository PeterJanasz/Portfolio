import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="flex space-x-4">
      <li className="nav-item">
        <Link
          to="/"
          className={`py-2 px-4 ${
            currentPage === '/' ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={`py-2 px-4 ${
            currentPage === '/About' ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={`py-2 px-4 ${
            currentPage === '/Projects' ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={`py-2 px-4 ${
            currentPage === '/Contact' ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
