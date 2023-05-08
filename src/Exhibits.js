import React, { useState, useEffect } from "react";
import exhibitionImage from "./assets/exhibition.jpg";

const Exhibits = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    // Set the exhibition date to be two weeks from the current date
    const exhibitionDate = new Date();
    exhibitionDate.setDate(exhibitionDate.getDate() + 14);

    // Calculate the time difference between now and the exhibition date
    const timeDiff = exhibitionDate.getTime() - new Date().getTime();

    // Set up a countdown timer to display the time remaining until the exhibition
    const countdownInterval = setInterval(() => {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    // Clean up the interval timer when the component unmounts
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Welcome to our Online Museum Exhibit
        </h1>
        <p className="mt-2 text-xl text-gray-600">
          Discover the rich and diverse food cultures of Houston, Texas in our
          virtual exhibition. Our exhibit showcases the history and evolution of
          Houston's culinary scene, from Tex-Mex to Louisiana Creole, and
          everything in between.
        </p>
        <p className="mt-4 text-xl text-gray-600">
          From farm-to-table to fusion cuisine, our exhibit celebrates the
          city's vibrant food scene and the people who have shaped it over the
          years.
        </p>

        <div className="flex -mt-5 gap-12 justify-center">
          <div className="mt-8 flex">
            <img
              src="https://s.hdnux.com/photos/53/27/34/11368233/4/1200x0.jpg"
              alt="Upcoming Exhibition"
              className="max-w-lg rounded-lg"
            />
          </div>

          <div class="flex mt-2 flex-col justify-between items-center">
            <div>
              <p class="flex mt-4 text-xl text-gray-600">
                Don't miss our virtual exhibition:
              </p>
              <span class="text-xl text-gray-600 flex flex-col font-bold">
                "Houston's Food Cultures: A Celebration"
              </span>
              <p class="flex mt-2 text-xl text-gray-600">Opening in:</p>
              <span class="flex text-2xl text-gray-700  font-bold">
                {countdown}
              </span>
            </div>
            <div class="flex items-center w-full">
              <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Book Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibits;
