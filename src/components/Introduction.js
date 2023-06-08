import React from 'react';
import picture from '../Images/me-portfolio-crop2.png';

function Introduction() {
  return (
    <div className="flex-col relative h-96 mx-auto max-w-[1240px] p-4 mt-10">
      <div className="absolute -top-6 right-1 text-gray-300">
        <button className="rounded-md shadow-sm bg-slate-700 p-1 hover:bg-slate-600">
          Dark Mode 🌙
        </button>
      </div>
      <div className="flex justify-center items-center ">
        <img
          src={picture}
          className="h-40 border-spacing-10 rounded-md shadow-gray-400 shadow-md"
          alt="portrait"
        />
        <div className="flex-col p-4">
          <h2 className="text-5xl mb-2 font-semibold">Hello there!</h2>
          <div className="text-lg font-thin">
            Powered by the curiosity to learn, I have the resiliance to move
            past challenges and transform conceptual ideas into realization.
            Take a trip through my journey and learn more about me below!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
