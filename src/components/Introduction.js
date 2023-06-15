import React from 'react';
import picture from '../Images/me-portfolio-crop-removebg-colour.png';

function Introduction() {
  return (
    <div className="flex-col items-center sm:max-w-4xl mx-auto">
      <div className="flex mx-auto gap-24 max-sm:flex-wrap max-sm:mt-4 p-4 mt-10">
        <img
          src={picture}
          className="max-sm:max-w-xs sm:max-w-sm border-spacing-10 rounded-xl shadow-gray-400 shadow-xl"
          alt="portrait"
        />
        <div className="flex-col">
          <h2 className="text-6xl mb-2 font-semibold dark:text-slate-100">
            Hello there!
          </h2>
          <div className="text-2xl font-thin py-2 dark:text-slate-300">
            Powered by the curiosity to learn, I have the resiliance to move
            past challenges and transform conceptual ideas into realization.
            Take a trip through my journey and learn more about me below!
          </div>
        </div>
      </div>

      <div className=" my-10 flex justify-between max-sm:flex-wrap p-4">
        <div className="flex-col">
          <h2 className="text-6xl my-2 front-semibold dark:text-slate-100">
            My Journey Until Now
          </h2>
          <p className="text-xl font-thin py-2 dark:text-slate-300">
            Looking to always break through new boundries, I have leveraged
            different resources such as Udemey & YouTube to aid in the
            development of my programatic understanding. With this new-found
            knowledge, I have taken a self-taught approach to creating various
            projects of responsive designs. Using React's component style of
            programming I have built many applications that have set my
            development path in motion.
          </p>
        </div>
        <div className="flex h-fit flex-wrap p-2 mt-4">
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            JAVASCRIPT
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            REACT
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            HTML/CSS
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            GIT
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            VERSION CONTROL
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            API USAGE
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            DEBUGGING
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            SEMANTIC UI
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            TAILWIND
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            SASS
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            NPM
          </div>
          <div className="border rounded-lg dark:bg-slate-600 dark:text-slate-200 border-gray-800 m-2 p-2">
            BOOTSTRAP
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
