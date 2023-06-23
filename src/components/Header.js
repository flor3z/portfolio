import { React } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between relative bg-blue-400 dark:bg-slate-600 h-12 items-center px-4">
      <div className="text-white font-bold ">MF Matheo Florez</div>
      <div className="text-white font-bold">Envison & Create</div>
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
