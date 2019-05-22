import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="headerContainer">
      <h1 className="header">
        <span className="teal">(React) </span> 
        <span className="ltblue">G</span>
        <span className="red">o</span>
        <span className="yellow">o</span>
        <span className="ltblue">g</span>
        <span className="green">l</span>
        <span className="red">e</span> 
        <span> </span>
        Books Search</h1>
      <h3 className="subHeader">Search for and Save books of interest!</h3>
    </div>
  )
};

export default Header;