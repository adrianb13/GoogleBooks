import React from "react";
import "./Navbar.css";

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="float">Google Books Search</div>
      <a href="/" className="link" onClick={props.handleSearchButton}>Search</a>
      <a href="/" className="link" onClick={props.handleSavedButton}>Saved</a>
      <div style={{clear: "both"}}></div>
    </div>
  )
}

export default NavBar;