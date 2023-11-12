import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const TypingText = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 19300); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
      {showName && <p>Peter Janasz</p>}
    </>
  );
};

export default TypingText;
