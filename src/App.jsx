import React, { useEffect, useState } from "react";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Works from "./component/Works";
import About from "./component/About";
import Footer from "./component/Footer";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg
    p-1 rounded-md">
        {theme === "dark" ? "🌙" : "🌞"}
      </button>
      <div className="font-inter bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <HeroSection />
          <Services />
          <Works />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
