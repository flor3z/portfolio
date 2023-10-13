import React from 'react';
import weather from '../Images/web1.png';
import score from '../Images/web2.png';
import todo from '../Images/web3.png';
import pomodoro from '../Images/web4.png';
import pokemon from '../Images/web5.png';
import galleria from '../Images/web6.png';
import { useInView } from 'react-intersection-observer';

function Portfolio() {
  const { ref, inView } = useInView();

  return (
    <div id="projects">
      <div className="dark:text-white flex justify-center text-6xl my-8 font-semibold items-center">
        Projects
      </div>
      <div
        ref={ref}
        className="grid md:grid-cols-2 gap-10 p-10 max-w-6xl mx-auto"
      >
        <div
          className={`${
            inView
              ? 'dark:bg-gray-600 text-center shadow-xl p-10 rounded-xl my-5 mx-auto animate-fade-right animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out'
              : ''
          }`}
        >
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
            Check your local weather by searching your city and review
            information regarding humidity, real-feel temperature and more.
          </p>
          <a
            className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2  dark:bg-slate-900  dark:hover:bg-slate-800"
            target="blank_"
            href="https://flor3z.github.io/theWeatherApp/"
          >
            Visit Page
          </a>
        </div>
        <div
          className={`${
            inView
              ? 'dark:bg-gray-600 text-center shadow-xl p-10 rounded-xl my-5 mx-auto animate-fade-left animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out'
              : ''
          }`}
        >
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
            Designed for Volleyball enthusiasts, get a game record and keep
            track of a match between two teams. Or keep score for any game.
          </p>
          <a
            className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2 dark:bg-slate-900  dark:hover:bg-slate-700"
            target="blank_"
            href="https://flor3z.github.io/scoreBoard-hooks/"
          >
            Visit Page
          </a>
        </div>
        <div
          ref={ref}
          className={`${
            inView
              ? 'dark:bg-gray-600 text-center shadow-xl p-10 rounded-xl my-5 mx-auto animate-fade-right animate-once animate-duration-1000 animate-delay-700 animate-ease-in-out'
              : ''
          }`}
        >
          <img
            alt="portrait"
            className="mx-auto rounded-xl"
            src={todo}
            width={300}
            height={300}
          />
          <h3 className="font-semibold text-xl dark:text-white py-2">
            Todo List
          </h3>
          <p className="dark:text-slate-300 py-2 mb-2">
            Are you forgetting to complete daily tasks? In that case, keep track
            of chores, update and complete them with this simple app!
          </p>
          <a
            className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2 dark:bg-slate-900  dark:hover:bg-slate-700"
            target="blank_"
            href="https://flor3z.github.io/newToDo/"
          >
            Visit Page
          </a>
        </div>
        <div
          className={`${
            inView
              ? 'dark:bg-gray-600 text-center shadow-xl p-10 rounded-xl my-5 mx-auto animate-fade-left animate-once animate-duration-1000 animate-delay-1000 animate-ease-in-out'
              : ''
          }`}
        >
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
            method with this easy to use Pomodoro timer. Take breaks, and
            continue focusing in small intervals.
          </p>
          <a
            className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2 dark:bg-slate-900  dark:hover:bg-slate-700"
            target="blank_"
            href="https://flor3z.github.io/Pomodoro/"
          >
            Visit Page
          </a>
        </div>
        {/* <div className="flex justify-center col-span-full"> */}
        <div
          ref={ref}
          className={`${
            inView
              ? 'dark:bg-gray-600 text-center shadow-xl p-10 rounded-xl my-5 animate-fade-right animate-once animate-duration-1000 animate-delay-[1200ms] animate-ease-in-out'
              : ''
          }`}
        >
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
            favourite pokémon using this simple to use search engine. Spell the
            name and get the stats along with a fun image.
          </p>
          <a
            className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2 dark:bg-slate-900  dark:hover:bg-slate-700"
            target="blank_"
            href="https://flor3z.github.io/pokemon-search/"
          >
            Visit Page
          </a>
        </div>
        <div
          ref={ref}
          className={`${
            inView
              ? 'dark:bg-gray-600 text-center shadow-xl p-10 rounded-xl my-5 animate-fade-left animate-once animate-duration-1000 animate-delay-[1300ms] animate-ease-in-out'
              : ''
          }`}
        >
          <img
            alt="portrait"
            className=" mx-auto rounded-xl"
            src={galleria}
            width={300}
            height={300}
          />
          <h3 className="font-semibold text-xl dark:text-white py-2">
            Galleria
          </h3>
          <p className="dark:text-slate-300 py-2 mb-2">
            Do you enjoy well taken, high quality photos? Enjoy this free to use
            image search engine powered by the Unsplash API. Find the creative
            photographer listed on each photo and the ability to download as
            well.
          </p>
          <a
            className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2 dark:bg-slate-900  dark:hover:bg-slate-700"
            target="blank_"
            href="https://flor3z.github.io/galleria/"
          >
            Visit Page
          </a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Portfolio;
