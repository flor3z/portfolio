import { React } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import resume from '../Resume/Resume.pdf';

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between relative bg-blue-400 dark:bg-slate-600 h-6 md:h-10 items-center px-4">
      <div className="text-white font-bold pl-2 md:pl-10 flex">
        Matheo Florez
      </div>
      <a href={resume} download="Matheo-Florez-Resume">
        <div className="text-white font-bold pr-2 md:pr-10 hover:animate-jump animate-once animate-duration-1000 animate-ease-in-out">
          My Resume
        </div>
      </a>
      <div className="md:text-2xl  absolute top-14 right-2 text-gray-300">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-md shadow-sm bg-slate-800 p-1 hover:bg-slate-600"
        >
          {darkMode ? (
            <BsSunFill className="fill-yellow-500" />
          ) : (
            <BsFillMoonStarsFill className="fill-yellow-200" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
