const express = require("express");

const router = express.Router();

const {
  createBook,
  getBooks,
  getBook,
} = require("../controllers/bookController");

// Get all books
router.get("/", getBooks);

// Get a single book
router.get("/:id", getBook);

// POST a new book
router.post("/", createBook);

// Update a book
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a  book" });
});

// Delete a book
router.delete("/:id", (req, res) => {
  res.json({ message: "Remove a book" });
});

module.exports = router;
