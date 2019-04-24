import React from "react";
import Search from "../Search";
import Saved from "../Saved";

class Books extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Saved />
      </div>
    );
  }
}

export default Books;