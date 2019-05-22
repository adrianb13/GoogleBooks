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
    savedList: false,
    result: [],
    savedBooks: []
  };

  componentDidMount() {
//    this.searchBooks(this.state.query);
    this.getSavedList()
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
          bookId: book.volumeInfo.industryIdentifiers[0].identifier,
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail,
          link: book.volumeInfo.canonicalVolumeLink
        }
        bookList.push(currBook);

        return (
          <div
            className="itemContainer" 
            key={currBook.bookId}
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
              id={currBook.bookId}
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

  handleSavedToList = bookInfo => {
    API.saveBook({
      bookId: bookInfo.bookId,
      title: bookInfo.title,
      author: bookInfo.author,
      description: bookInfo.description,
      image: bookInfo.image,
      link: bookInfo.link 
    })
    .then(res => this.getSavedList())
    .catch(err => console.log(err));
  }

  getSavedList = () => {
    API.getBooks() 
    .then(res => {
      this.setState({ 
      savedBooks: res.data
      })
      console.log(this.state.savedBooks)
    })
    .catch(err => console.log(err));
  }

  handleDelete = book => {
    console.log(book._id)
    API.deleteBook(book._id)
    .then(res => {
      console.log(res.data)
      this.getSavedList()
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="background">
        <NavBar
          handleSearchButton={this.handleSearchButton}
          handleSavedButton={this.handleSavedButton}
        >
        </NavBar>
        <Header />
        <div>
          {this.state.savedList ? (
            <Saved 
              savedBooks={this.state.savedBooks}
              getSavedList={this.getSavedList}
              handleDelete={this.handleDelete}/>
          ) : (
            <Search
              name="query"
              value={this.state.query}
              searchBooks={this.searchBooks}
              handleInputChange={this.handleInputChange}
              arrayResult={this.arrayResult} 
              handleSavedToList={this.handleSavedToList}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Books;