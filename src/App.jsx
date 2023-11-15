// Importing necessary styles and dependencies
import './App.css'
import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Main functional component representing the entire application
function App() {
  // Rendering the main structure of the application
  return (
    <>
      {/* Main content area with left and right margin of 3 units, bottom padding of 16 units */}
      <main className="mx-3 pb-16">
        {/* Header component displaying the navigation */}
        <Header />
        
        {/* Outlet component for rendering child components based on the current route */}
        <Outlet />

        {/* Footer component at the bottom of the page */}
        <Footer />
      </main>
    </>
  );
}

// Exporting the App component to make it available for use in other parts of the application
export default App;
