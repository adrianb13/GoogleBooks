import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyD4B-z3moGwAhvCfJcmUHXFdjgn46JQMMg";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  getBooks: function() {
    return axios.get("/api/books")
  },
  saveBook: function(book) {
    return axios.post("/api/books", book)
  }
};
