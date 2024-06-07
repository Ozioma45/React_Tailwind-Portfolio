# React Tailwind Portfolio

This is a simple portfolio project built with React and styled using Tailwind CSS. The project includes sections for a hero section, services, works, about, and a footer. It also includes a dark mode switcher.

## Live Preview

You can view a live preview of the project [here](https://react-tailwind-portfolio-sigma.vercel.app/).

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Theme Switcher](#theme-switcher)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v12.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-tailwind-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-tailwind-portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or if you prefer using yarn:

   ```bash
   yarn install
   ```

## Usage

To start the development server, run:

```bash
npm start
```

or with yarn:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Components

- `App.jsx`: The main component that sets up the theme switcher and includes all other components.
- `HeroSection.jsx`: The hero section of the portfolio.
- `Services.jsx`: Lists the services provided.
- `Works.jsx`: Displays a portfolio of works.
- `About.jsx`: Section to describe about yourself.
- `Footer.jsx`: The footer of the portfolio.

## Theme Switcher

The project includes a dark mode switcher that toggles between light and dark themes. The theme is set based on the user's system preferences initially and can be toggled using a button in the top-right corner.

### Theme Switcher Code Snippet

```jsx
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
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

```

Replace `"https://github.com/yourusername/react-tailwind-portfolio.git"` with the actual URL of your repository. This README file provides an overview of the project, installation instructions, usage details, a description of the components, and information about the theme switcher. Additionally, it includes a section on how to contribute to the project and the license under which the project is distributed.
```
