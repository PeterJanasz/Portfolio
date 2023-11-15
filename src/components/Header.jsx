// Importing React library and the Navigation component
import React from "react";
import Navigation from './Navigation';

// Importing external styles from 'App.css'
import '../App.css';

// Functional component representing the Header of the application
const Header = () => {
    return (
        // Container div for the header with styling classes
        <div className="fixed top-0 left-0 bg-white w-full z-10">
            {/* Header section containing the Navigation component */}
            <header>
                <Navigation />
            </header>
        </div>
    );
};

// Exporting the Header component to make it available for use in other parts of the application
export default Header;
