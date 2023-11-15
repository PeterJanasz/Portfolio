// Importing necessary dependencies from React and the 'typewriter-effect' library
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

// Functional component representing a section of text with a typewriter effect
const TypingText = () => {
  // State variable to control the visibility of additional content after typing
  const [showName, setShowName] = useState(false);

  // useEffect hook to control the timing of showing additional content
  useEffect(() => {
    // Set a timer to change the state and show additional content after a delay
    const timer = setTimeout(() => {
      setShowName(true);
    }, 19300); // Adjust the delay time as needed

    // Cleanup function to clear the timer when the component unmounts or re-renders
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  // Render the Typewriter component with options and additional content
  return (
    <>
      {/* Typewriter component with options for strings, autoStart, loop, and deleteSpeed */}
      <Typewriter
        options={{
          strings: [
            'Hello World!',
            'My Name is Peter Janasz!',
            'Welcome to my Portfolio!',
          ],
          autoStart: true,
          loop: false,
          deleteSpeed: 50,
        }}
      />
      {/* Conditional rendering of additional content based on the state */}
      {showName && <p>Peter Janasz</p>}
    </>
  );
};

// Exporting the TypingText component to make it available for use in other parts of the application
export default TypingText;
