import { React } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import resume from '../Resume/Resume.pdf';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between relative bg-blue-400 dark:bg-slate-600 h-8 md:h-10 items-center px-4">
      <div className="text-white text-md font-thin md:font-bold  md:pl-10 md:text-lg tracking-wide cursor-pointer hover:animate-jump animate-once animate-ease-in-out">
        Matheo Florez
      </div>
      <Link
        className="text-white text-md font-thin md:font-bold md:text-lg cursor-pointer tracking-wide hover:animate-jump animate-once animate-ease-in-out"
        to="projects"
        smooth={true}
        duration={1000}
      >
        Projects
      </Link>
      <Link
        className="text-white text-md font-thin md:font-bold md:text-lg cursor-pointer tracking-wide hover:animate-jump animate-once animate-ease-in-out"
        to="contact"
        smooth={true}
        duration={1000}
      >
        Contact
      </Link>
      <a href={resume} download="Matheo-Florez-Resume">
        <div className="text-white text-md font-thin tracking-wide md:font-bold  md:text-lg  md:pr-10 hover:animate-jump animate-once animate-ease-in-out">
          Resume
        </div>
      </a>
      <div className="md:text-2xl absolute top-14 right-2 text-gray-300 z-50">
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
      <div className="text-2xl lg:text-4xl fixed top-auto right-2 bottom-2 p-1  text-slate-800 z-50 dark:text-slate-200">
        <button
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpCircleFill className="hover:animate-bounce animate-infinite animate-ease-out animate-fill-forwards" />
        </button>
      </div>
    </div>
  );
}

export default Header;
