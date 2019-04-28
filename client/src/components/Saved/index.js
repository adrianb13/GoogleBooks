import React from "react";
import "./Saved.css";
import "../Books/Books.css"

function Saved(props) {
  return (
    <div className="container">
      <h3 className="boxHeader">Saved Books</h3>
      <div> {props.savedBooks.map(book => (
        <div className="itemContainer" key={book.bookId}>
          <div className="title" >Title: {book.title}</div>
          <div className="author" >Author(s): {book.author}</div>
          <img 
            className="bookPic"
            src={book.image} 
            alt={book.title}
          >
          </img>
          <div className="description">Description: {book.description}</div>
          <div style={{clear: "both"}}></div>
          <div>Google Books Link:  
            <a 
              href={book.link} 
              className="bookLink" 
              rel="noreferrer noopener" 
              target="_blank"
            >View
            </a>
          </div>
{/*             <button 
              className="saveBook" 
              type="submit" 
              onClick={() => this.handleSavedToList(book)}
              id={book.bookId}
              info={book}
            >Save To List</button> */}
        </div>
        ))
      }
      </div>
    </div>
  );
};

export default Saved;