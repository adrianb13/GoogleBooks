import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="headerContainer">
      <h1 className="header">(React) Google Books Search</h1>
      <h3 className="subHeader">Search for and Save books of interest!</h3>
    </div>
  )
};

export default Header;