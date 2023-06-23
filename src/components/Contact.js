import React from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

function Contact() {
  const animation =
    'transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300';

  return (
    <div className="sm:max-w-4xl mt-4 max-sm:mx-4 border border-solid rounded-xl border-gray-700 shadow-xl flex-col items-center mx-auto p-4">
      <div className="text-6xl font-bold flex justify-center p-6 text-center dark:text-white">
        Contact me using these platforms!
      </div>
      <div className="flex justify-evenly p-2 font-semibold text-4xl flex-wrap">
        <SiGmail className={`shadow-lg ${animation} text-red-500 `} />
        <BsGithub
          className={`shadow-lg ${animation} rounded-full dark:text-slate-50`}
        />
        <BsLinkedin className={`shadow-lg ${animation} text-blue-500`} />
        <FaFreeCodeCamp
          className={`shadow-lg ${animation} bg-slate-900 dark:bg-slate-800 rounded-sm text-white`}
        />
      </div>
      <div className="my-2 text-center max-sm:text-sm">
        <p className="p-2  dark:text-slate-300">• mflorez1993@gmail.com •</p>
        <p className="p-2 dark:text-slate-300">• https://github.com/flor3z •</p>
        <p className="p-2 dark:text-slate-300">
          • www.linkedin.matheoflorez.com •
        </p>
        <p className="p-2 dark:text-slate-300">
          • https://www.freecodecamp.org/fcc2a56f848-5859-4dfa-acc6-a0bc6e53ed84
          •
        </p>
      </div>
    </div>
  );
}

export default Contact;
