const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: {
    type: String,
    required: true,
    unique: true
  },
  title: { 
    type: String, 
    required: true 
  },
  author: { 
    type: Array, 
    required: true 
  },
  description: { 
    type: String, 
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now
  }
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
