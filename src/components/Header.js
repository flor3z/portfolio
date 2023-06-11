import { React } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function Header() {
  return (
    <div className="flex justify-between relative bg-blue-400 h-12 items-center px-4">
      <div className="text-white font-bold ">MF Matheo Florez</div>
      <div className="text-white font-bold">Envison & Create</div>
      <div className="absolute top-16 right-6 text-gray-300">
        <button className="rounded-md shadow-sm bg-slate-700 p-1 hover:bg-slate-600">
          <BsFillMoonStarsFill />
        </button>
      </div>
    </div>
  );
}

export default Header;
