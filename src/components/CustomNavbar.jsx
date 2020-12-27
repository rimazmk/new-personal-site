import React, { useEffect, useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import "../css/CustomNavbar.scss";

const CustomNavbar = () => {
  const [theme, setTheme] = useState("dark");
  const [click, setClick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0 && theme === "light" && !click) {
        setTheme("dark");
      } else if (window.pageYOffset !== 0 && theme === "dark") {
        setTheme("light");
      }
    });
  }, [theme]);

  const getStyle = () =>
    click && window.innerWidth <= 600
      ? "navbar-item-responsive"
      : "navbar-item";

  return (
    <div className={"navbar " + theme}>
      <HamburgerIcon
        theme={theme}
        onClick={() => {
          setClick(!click);
          if (theme === "dark") setTheme("light");
          else if (window.pageYOffset === 0) setTheme("dark");
        }}
      />
      <a href="#education" className={getStyle()}>
        education
      </a>
      <a href="#experience" className={getStyle()}>
        experience
      </a>
      <a href="#projects" className={getStyle()}>
        projects
      </a>
    </div>
  );
};

export default CustomNavbar;
