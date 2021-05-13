import React, { useEffect, useState } from "react";
import "../css/CustomNavbar.scss";

const CustomNavbar = () => {
  const [theme, setTheme] = useState("dark navbar-dark");
  const [click, setClick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0 && theme === "light navbar-light") {
        setTheme("dark navbar-dark");
      } else if (window.pageYOffset !== 0 && theme === "dark navbar-dark") {
        setTheme("light navbar-light");
      }
    });
  }, [theme]);

  const getStyle = () =>
    click && window.innerWidth <= 600
      ? "navbar-item-responsive"
      : "navbar-item";

  return (
    <nav
      className={"navbar navbar-custom fixed-top navbar-expand-sm " + theme}
      id="navbar"
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item navbar-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item navbar-item">
            <a className="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item navbar-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
