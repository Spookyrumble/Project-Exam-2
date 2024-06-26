import React, { useContext } from "react";
import Cards from "../../components/Cards";
import ThemeContext from "../../components/Theme";

/**
 * Renders the Home component.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-background text-secondary" : "bg-secondary text-primary"}`}
    >
      <h1 className="text-xl text-center">Featured Venues</h1>

      <Cards />
    </div>
  );
};

export default Home;
