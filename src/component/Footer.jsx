import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:2xl font-semibold">
        Ozioma Egole
      </a>
      <a
        href="mailto:oziomajohn53@gmail.com"
        className=" text-sm md:text-md hover:text-indigo-500">
        oziomaegole@gmail.com
      </a>
      <p className="text-xscfont mt-2 text-gray-500">
        @ Ozioma Egole {new Date().getFullYear()}. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
