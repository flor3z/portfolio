import React from 'react';
import picture from '../Images/me-portfolio-crop-removebg-colour.png';

function Introduction() {
  return (
    <div className="flex-col items-center max-w-4xl mx-auto">
      <div className="flex justify-between items-center max-sm:flex-wrap max-sm:mt-5 p-4 mt-16 animate-fade-down animate-duration-1000 animate-ease-in-out">
        <img
          width={360}
          height={360}
          src={picture}
          className=" relative max-sm:mx-auto sm:max-w-xs rounded-full shadow-xl shadow-slate-600 dark:shadow-slate-400 dark:shadow-lg "
          alt="portrait"
        />

        <div className="flex-col md:max-w-xs">
          <h2 className="text-6xl mt-8 md:mt-2 font-semibold dark:text-slate-100 max-sm:text-5xl">
            <span className="text-blue-500 dark:text-blue-400">Hello</span>{' '}
            there!
          </h2>
          <p className="text-xl md:text-2xl font-thin py-2 dark:text-slate-300 ">
            I am a visionary who's driven to bring creative ideas to life. Take
            a trip through my journey and learn more about me below!
          </p>
        </div>
      </div>

      <div className="my-4 md:my-10 flex  items-center max-md:flex-wrap p-4">
        <div className="flex-col max-w-md animate-fade-right animate-duration-1000 animate-ease-in-out">
          <h2 className="text-5xl  md:text-6xl my-2 front-semibold dark:text-slate-100">
            My Journey
          </h2>
          <div className="indent-3 text-xl  font-thin py-2 dark:text-slate-300">
            <p>
              Looking to always break through new boundaries, I have leveraged
              different resources such as Udemy & YouTube to aid in the
              development of my programmatic understanding.
            </p>

            <br />
            <p>
              With this new-found knowledge, I have taken a self-taught approach
              to creating various projects of responsive designs. Using React's
              component style of programming, I have built many applications
              that have set my development path in motion.
            </p>
          </div>
        </div>
        <div className="flex h-fit flex-wrap p-5 mt-6 animate-fade-left animate-duration-1000 animate-ease-in-out">
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            JAVASCRIPT
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            REACT
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            HTML/CSS
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            GIT
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            VISUAL STUDIO CODE
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            SEMANTIC UI
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            TAILWIND
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            SASS
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            NPM
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            BOOTSTRAP
          </div>
          <div className="border-2 hover:bg-blue-400 hover:text-white  border-blue-500 rounded-lg dark:bg-slate-600 dark:text-slate-200 dark:border-gray-800 dark:hover:bg-slate-500 m-2 p-2">
            MATERIAL UI
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
