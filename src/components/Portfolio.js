import React from 'react';
import weather from '../Images/web1.png';
import score from '../Images/web2.png';
import todo from '../Images/web3.png';
import pomodoro from '../Images/web4.png';
import pokemon from '../Images/web5.png';

function Portfolio() {
  return (
    <div className="flex flex-col gap-10 p-10 lg:flex-row lg:flex-warp">
      <div className="dark:bg-gray-600 basis-1/3 flex-1 text-center shadow-2xl p-10 rounded-xl my-5 mx-auto">
        <img
          alt="portrait"
          className=" mx-auto rounded-xl"
          src={weather}
          width={300}
          height={300}
        />
        <h3 className="font-semibold text-xl dark:text-white py-2">
          Weather & Forecast
        </h3>
        <p className="dark:text-slate-300 py-2 mb-2">
          Check your local weather by searching your city and review information
          regarding humidity, real-feel temperature and more.
        </p>
        <a
          className="rounded-full bg-blue-600 text-white p-2"
          target="blank_"
          href="https://flor3z.github.io/theWeatherApp/"
        >
          Visit Page
        </a>
      </div>
      <div className="dark:bg-gray-600 basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
        <img
          alt="portrait"
          className=" mx-auto rounded-xl"
          src={score}
          width={300}
          height={300}
        />
        <h3 className="font-semibold text-xl dark:text-white py-2">
          Score Board
        </h3>
        <p className="dark:text-slate-300 py-2 mb-2">
          Designed for Volleyball enthusiasts, get a game record and keep track
          of a match between two teams. Or keep score for any game.
        </p>
        <a
          className="rounded-full bg-blue-600 text-white p-2"
          target="blank_"
          href="https://flor3z.github.io/scoreBoard-hooks/"
        >
          Visit Page
        </a>
      </div>
      <div className="dark:bg-gray-600 basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
        <img
          alt="portrait"
          className="mx-auto rounded-xl"
          src={todo}
          width={400}
          height={400}
        />
        <h3 className="font-semibold text-xl dark:text-white py-2">
          Todo List
        </h3>
        <p className="dark:text-slate-300 py-2 mb-2">
          Are you forgetting to complete daily tasks? Well keep track of chores,
          update and complete them with this simple app!
        </p>
        <a
          className="rounded-full bg-blue-600 text-white p-2"
          target="blank_"
          href="https://flor3z.github.io/newToDo/"
        >
          Visit Page
        </a>
      </div>
      <div className="dark:bg-gray-600 basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
        <img
          alt="portrait"
          className=" mx-auto rounded-xl"
          src={pomodoro}
          width={300}
          height={300}
        />
        <h3 className="font-semibold text-xl dark:text-white py-2">
          Pomodoro Timer
        </h3>
        <p className="dark:text-slate-300 py-2 mb-2">
          Maximize your time by following along a simple, yet efficient study
          method with this easy to use Pomodoro timer. Take breaks, and continue
          focusing in small intervals.
        </p>
        <a
          className="rounded-full bg-blue-600 text-white p-2"
          target="blank_"
          href="https://flor3z.github.io/Pomodoro/"
        >
          Visit Page
        </a>
      </div>
      <div className="dark:bg-gray-600 basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
        <img
          alt="portrait"
          className=" mx-auto rounded-xl"
          src={pokemon}
          width={300}
          height={300}
        />
        <h3 className="font-semibold text-xl dark:text-white py-2">
          Pokémon Search
        </h3>
        <p className="dark:text-slate-300 py-2 mb-2">
          Take a trip down memory lane and look-up some of your all time
          favourtie pokemon using this simple to use search engine. Spell the
          name and get the stats along with a fun image.
        </p>
        <a
          className="rounded-full bg-blue-600 text-white p-2"
          target="blank_"
          href="https://flor3z.github.io/pokemon-search/"
        >
          Visit Page
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
