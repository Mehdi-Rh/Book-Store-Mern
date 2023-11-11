const express = require("express");

const router = express.Router();

const {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

// Get all books
router.get("/", getBooks);

// Get a single book
router.get("/:id", getBook);

// POST a new book
router.post("/", createBook);

// Update a book
router.patch("/:id", updateBook);

// Delete a book
router.delete("/:id", deleteBook);

module.exports = router;
