import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="flex items-center justify-center
    flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
          Hi, This is Ozioma
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          An advancing self-taught FrontEnd developer. I design and code
          beautifully web solutions, and I love what I do.
        </p>
        <a
          href="#works"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white md:text-md hover:bg-indigo-700 bg-indigo-600">
          See Works
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
