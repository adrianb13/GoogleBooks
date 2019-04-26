import React from "react";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="searchHead">Book Search</div>
          <input className="search" name="query" onChange={this.props.handleInputChange}></input>
          <button className="searchButton" name="bookSearch" onClick={this.props.searchBooks}>Search</button>
        </div>
        <div className="container">
          <h3 className="boxHeader">Search Results</h3>
          <div>{this.props.arrayResult()}</div>
        </div>
      </div>
    );
  }
}

export default Search;