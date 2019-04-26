import React from "react";
import API from "../../utils/API";
import "./Books.css";
import NavBar from "../NavBar";
import Header from "../Header";
import Search from "../Search";
import Saved from "../Saved";

class Books extends React.Component {
  state = {
    query: "",
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    savedList: false,
    result: []
  };

  componentDidMount() {
    this.searchBooks(this.state.query);
  }

  searchBooks = query => {
    API.search(this.state.query)
      .then(res => {
        this.setState({ result: res.data.items })
        console.log(this.state.result)
        console.log(this.state.savedList)

      })      
      .catch(err => console.log(err));
  }

  arrayResult = () => {
    let result = [...this.state.result]
      return result.slice(0, 5).map(book => {
        return (
          <div
            className="itemContainer" 
            key={book.volumeInfo.industryIdentifiers[0].identifier}>
            <div className="title">Title: {book.volumeInfo.title}</div>
            <div className="author">Author(s): {book.volumeInfo.authors}</div>
            <div className="description">Description: {book.volumeInfo.description}</div>
            <div>Google Books Link:  
              <a href={book.volumeInfo.canonicalVolumeLink} className="bookLink">
                {book.volumeInfo.canonicalVolumeLink}
              </a>
            </div>
{/*             <div>{book.volumeInfo.imageLinks.thumbnail}</div> */}
            <button className="saveBook">Save To List</button>
          </div>
        )
    })
  }

  handleSearchButton = event => {
    event.preventDefault();
    this.setState({ savedList: false})
  }

  handleSavedButton = event => {
    event.preventDefault();
    this.setState({ savedList: true})
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <NavBar
          handleSearchButton={this.handleSearchButton}
          handleSavedButton={this.handleSavedButton}
        >
        </NavBar>
        <Header />
        <div>
          {this.state.savedList ? (
            <Saved />
          ) : (
            <Search
              name="query"
              value={this.state.query}
              searchBooks={this.searchBooks}
              handleInputChange={this.handleInputChange}
              arrayResult={this.arrayResult} 
            />
          )}
        </div>
      </div>
    );
  }
}

export default Books;