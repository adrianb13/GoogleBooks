import React from "react";
//import Search from "../Search";
//import Saved from "../Saved";
import API from "../../utils/API";

class Books extends React.Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    result: []
  };

  componentDidMount() {
    this.searchBooks("game of thrones");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => {
        this.setState({ result: res.data.items })
        console.log(this.state.result)
        console.log(this.state.result[0].volumeInfo)
        console.log("Book Title:" + this.state.result[0].volumeInfo.title)
        console.log("Author(s):" + this.state.result[0].volumeInfo.authors)
        console.log("Description:" + this.state.result[0].volumeInfo.description)
        console.log("Image Link:" + this.state.result[0].volumeInfo.imageLinks.thumbnail)
        console.log("Book Link:" + this.state.result[0].volumeInfo.canonicalVolumeLink)})      
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
{/*         {this.state.result.map(book => (
          <div>{this.state.result.volumeInfo.title}</div>
        ))} */}
      </div>
    );
  }
}

export default Books;