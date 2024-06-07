import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          ratione laboriosam quos esse, reprehenderit saepe beatae, veritatis
          optio aut et pariatur dolorem. Eos eaque praesentium odit architecto,
          sequi in nesciunt?
        </p>
        <p>
          <a
            href="mailto:oziomajohn53@gmail.com"
            className="block mt-3 text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500">
            oziomajohn53@gmail.com
          </a>
        </p>
      </div>
      <img
        src="https://ozioma45.github.io/Myportfolio/img/comp.png"
        alt="Ozioma Pic"
        className="w-full md:w-6/12 rounded-lg object-cover h-96"
      />
    </div>
  );
};

export default About;
