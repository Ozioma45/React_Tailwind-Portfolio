import React from "react";

const HeroSection = () => {
  return (
    <div
      className="flex items-center justify-center
    flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold">
          Hi, This is Ozioma
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          veritatis.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white md:text-md hover:bg-indigo-700 bg-indigo-600">
          See Works
        </a>
      </div>
    </div>
  );
};

export default HeroSection;