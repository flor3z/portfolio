import React from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

function Contact() {
  const animation =
    'transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300';

  return (
    <div className="mt-4 bg-blue-400 dark:bg-slate-600 flex-col items-center mx-auto p-4">
      <div className="text-4xl md:text-6xl text-white  font-bold flex justify-center p-6 text-center">
        Contact me!
      </div>
      <div className="flex justify-center p-4 font-semibold text-3xl md:text-4xl flex-wrap">
        <a
          href="https://contacts.google.com/u/1/person/c6355639877696248188"
          target="blank_"
        >
          <SiGmail
            className={`shadow-lg ${animation} text-red-500 bg-slate-200 rounded-md mx-2 md:mx-7`}
          />
        </a>
        <a href="https://github.com/flor3z" target="blank_">
          <BsGithub
            className={`shadow-lg ${animation} rounded-full dark:text-slate-50 mx-2 md:mx-7`}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/matheo-florez-060824282/"
          target="blank_"
        >
          <BsLinkedin
            className={`shadow-lg ${animation} text-blue-950 dark:text-blue-500 mx-2 md:mx-7`}
          />
        </a>
        <a
          href="https://www.freecodecamp.org/fcc2a56f848-5859-4dfa-acc6-a0bc6e53ed84"
          target="blank_"
        >
          <FaFreeCodeCamp
            className={`shadow-lg ${animation} bg-slate-900 dark:bg-slate-800 rounded-sm text-white mx-2 md:mx-7`}
          />
        </a>
      </div>
      <div className="my-2 text-center max-sm:text-sm">
        <p className="p-2 mt-3 md:mt-6 dark:text-slate-900">
          • Made in 2023 | Matheo Florez •
        </p>
      </div>
    </div>
  );
}

export default Contact;
