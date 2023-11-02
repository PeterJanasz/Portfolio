import React from 'react';

export default function Projects() {
    return (
        <div>
            <header className="text-2xl font-bold py-4">My Work</header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Project Card 1 */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <h1 className="font-bold text-xl mb-2">Movie Ticket Site</h1>
                    <a
                        href="https://mysterious-inlet-40074-9e2265a3da95.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./dist/assets/MovieTicketSite.gif" alt="Project Image" className="w-full h-auto" />
                    </a>
                    <div className="px-6 py-4">
                        <p className="text-gray-700 text-base">
                            Project description goes here.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <h1 className="font-bold text-xl mb-2">Recipe App</h1>
                    <a
                        href="https://peterjanasz.github.io/Recipe-Finder-App/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./dist/assets/FoodMakerApp.png" alt="Project Image" className="w-full h-auto" />
                    </a>
                    <div className="px-6 py-4">
                        <p className="text-gray-700 text-base">
                            Project description goes here.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <h1 className="font-bold text-xl mb-2">Weather App</h1>
                    <a
                        href="https://peterjanasz.github.io/Weather-Dashboard-M6/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./dist/assets/weatherApp.png" alt="Project Image" className="w-full h-auto" />
                    </a>
                    <div className="px-6 py-4">
                        <p className="text-gray-700 text-base">
                            Project description goes here.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <h1 className="font-bold text-xl mb-2">Weather App</h1>
                    <a
                        href="https://peterjanasz.github.io/Weather-Dashboard-M6/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./dist/assets/weatherApp.png" alt="Project Image" className="w-full h-auto" />
                    </a>
                    <div className="px-6 py-4">
                        
                        <p className="text-gray-700 text-base">
                            Project description goes here.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <h1 className="font-bold text-xl mb-2">Weather App</h1>
                    <a
                        href="https://peterjanasz.github.io/Weather-Dashboard-M6/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./dist/assets/weatherApp.png" alt="Project Image" className="w-full h-auto" />
                    </a>
                    <div className="px-6 py-4">
                        
                        <p className="text-gray-700 text-base">
                            Project description goes here.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <h1 className="font-bold text-xl mb-2">Weather App</h1>
                    <a
                        href="https://peterjanasz.github.io/Weather-Dashboard-M6/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./dist/assets/weatherApp.png" alt="Project Image" className="w-full h-auto" />
                    </a>
                    <div className="px-6 py-4">
                        
                        <p className="text-gray-700 text-base">
                            Project description goes here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
