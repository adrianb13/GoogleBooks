import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=" + process.env.REACT_APP_GOOGLE_API_KEY;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
