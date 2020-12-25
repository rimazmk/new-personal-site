import React, { useEffect, useState } from "react";
import "../css/CustomNavbar.scss";

const CustomNavbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.pageYOffset, theme);
      if (window.pageYOffset === 0 && theme === "light") {
        setTheme("dark");
      } else if (window.pageYOffset !== 0 && theme === "dark") {
        // console.log("here", theme);
        setTheme("light");
      }
    });
  }, [theme]);

  return (
    <div className={"navbar " + theme}>
      <div className="navbar-item">education</div>
      <div className="navbar-item">experience</div>
      <div className="navbar-item">projects</div>
    </div>
  );
};

export default CustomNavbar;
