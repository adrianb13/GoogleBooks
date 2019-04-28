const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// "/api" from index.js in routes folder
// "/books" from index.js in api folder which is inside routes folder
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove)
//  .get(booksController.findById)
//  .put(booksController.update);

module.exports = router;
