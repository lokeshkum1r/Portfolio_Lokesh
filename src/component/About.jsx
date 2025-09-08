import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4">
        {/* Section Header */}
        <div className="">
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-600">
            About
          </h2>
          <p className="py-6 text-xl">Here's a little about me</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* About Text */}
          <div className="flex flex-col">
            <p className="text-lg md:text-xl">
              I'm a passionate developer with expertise in building modern web
              applications. With a strong foundation in JavaScript, React, and
              Tailwind CSS, I create responsive, user-friendly interfaces that
              deliver exceptional experiences. My approach combines clean code
              with thoughtful design to solve real-world problems.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              I am skilled in C++, data structures, algorithms, and problem-solving, with a
              solid understanding of both Linux and Windows operating systems. I am always eager
              to learn new technologies and continuously improve
              my skills to tackle real-world challenges effectively.
            </p>

          </div>

          {/* Projects Showcase */}
          <div className="grid gap-6">
            <h3 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">
              My Projects
            </h3>

            {/* Project 1 */}
            <div className="bg-gray-700 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-600/50">
              <h4 className="text-xl font-bold text-blue-400">
                Project 1: FindmyHelper
              </h4>
              <p className="mt-2 text-gray-300">
                <span className="text-white inline border-b-2 border-blue-600/50">
                  <span className="font-bold">Tech Stack:</span> React.js, Node.js, Express.js, MongoDB
                </span>
                <br />
                FindmyHelper is a web application designed to connect users with trusted local helpers for various
                home services such as plumbing, electrician work, carpentry, and more.
              </p>
              <div className="mt-3 flex justify-between">
                <a
                  href="https://findmy-helper-9ewn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200"
                >
                  → Live Demo
                </a>
                <a
                  href="https://github.com/lokeshkum1r/FindmyHelper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200"
                >
                  → GitHub
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-700 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-600/50">
              <h4 className="text-xl font-bold text-blue-400">
                Project 2: Dynamic Spreadsheet with React & Tailwind
              </h4>
              <p className="mt-2 text-gray-300">
                <span className="text-white inline border-b-2 border-blue-600/50">
                  <span className="font-bold">Tech Stack:</span> React, Tailwind CSS
                </span>
                <br />
                A web-based spreadsheet application built with React for component management and Tailwind CSS
                for responsive styling. Supports dynamic data input, basic calculations, and a clean, responsive UI.
              </p>
              <div className="mt-3 flex justify-between">
                <a
                  href="https://assignment-1-git-main-lokeshkum1rs-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200"
                >
                  → Live Demo
                </a>
                <a
                  href="https://github.com/lokeshkum1r/Assignment.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200"
                >
                  → GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
