import React from 'react';
import TypingText from '../components/TypingText';

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold py-4">About Me</h1>
      <img
        src="images/PeterJanaszPortrait.jpg"
        alt="Portrait"
        className="w-40 h-auto rounded-full"
      />
      <TypingText />
      <div className="max-w-screen-xl bg-transparent rounded overflow-hidden shadow-xl mx-10 bg-blue-500 shadow-blue-500/50">
        <div className="px-6 py-4 bg-white bg-opacity-0">
          <p className="text-gray-700">
            I am a first-generation American, born in Chicago, IL. Raised by parents who migrated from Poland in 1980,
            I developed a global perspective from an early age. My summers were spent visiting family in Poland and
            exploring diverse regions of Europe, fostering a deep appreciation for different cultures.

            Over the past 18 years, my professional journey has been dedicated to the Mayo Clinic of Arizona. Recognizing
            the evolving landscape, I made a strategic shift. Leveraging my extensive healthcare background, I transitioned
            to a full-stack software development career. Skills honed in healthcare, including problem-solving,
            prioritization, multitasking, and stress management, seamlessly contribute to my success in this new endeavor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
