import React from "react";
import icon from "../images/hamburger.png";
import "../css/CustomNavbar.scss";

const HamburgerIcon = ({ onClick, theme }) => {
  let color = theme === "dark" ? "invert(1)" : "invert(0)";

  return (
    <img
      src={icon}
      className="image-icon"
      onClick={onClick}
      alt="hamburger-icon"
      style={{ filter: color }}
    />
  );
};

export default HamburgerIcon;
