const router = require("express").Router();
const bookRoutes = require("./booksRoutes");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
