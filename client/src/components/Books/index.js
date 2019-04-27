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
    id: "",
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    savedList: false,
    result: [],
    save: {}
  };

  componentDidMount() {
    this.searchBooks(this.state.query);
  }

  searchBooks = query => {
    API.search(this.state.query)
      .then(res => {
        this.setState({ 
          result: res.data.items
        })
      })      
      .catch(err => console.log(err));
  }

  arrayResult = () => {
    let result = [...this.state.result]
    let bookList = [];
      return result.slice(0, 5).map(book => {
        let currBook = {
          id: book.volumeInfo.industryIdentifiers[0].identifier,
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail,
          link: book.volumeInfo.canonicalVolumeLink
        }
        bookList.push(currBook);
        console.log(currBook);
        console.log(bookList)
        return (
          <div
            className="itemContainer" 
            key={currBook.id}
            onClick={this.handleInputChange}
            >
            <div className="title" >Title: {currBook.title}</div>
            <div className="author" >Author(s): {currBook.author}</div>
            <img 
              className="bookPic"
              src={currBook.image} 
              alt={currBook.title}
            >
            </img>
            <div className="description">Description: {currBook.description}</div>
            <div style={{clear: "both"}}></div>
            <div>Google Books Link:  
              <a 
                href={currBook.link} 
                className="bookLink" 
                rel="noreferrer noopener" 
                target="_blank"
              >View
              </a>
            </div>
            <button 
              className="saveBook" 
              type="submit" 
              onClick={() => this.handleSavedToList(currBook)}
              id={currBook.id}
              info={currBook}
            >Save To List</button>
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

  handleSavedToList = event => {
    const info = event.target.info;
    this.setState({
      save: info
    })
/*     API.saveBook({
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      image: this.state.image,
      link: this.state.link
    })
    .then(res => console.log(res))
    .catch(err => console.log(err)); */
    console.log("-----------------")
    console.log(this.state.save)
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