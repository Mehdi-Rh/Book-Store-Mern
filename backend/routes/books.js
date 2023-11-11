const express = require("express");

const router = express.Router();

const Book = require("../models/bookModel");

// Get all books
router.get("/", (req, res) => {
  res.json({ message: "Get Books" });
});

// Get a single book
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single book" });
});

// POST a new book
router.post("/", async (req, res) => {
  const { title, author } = req.body;

  try {
    const newBook = await Book.create({ title, author });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  res.json({ message: "Post a new book" });
});

// Update a book
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a  book" });
});

// Delete a book
router.delete("/:id", (req, res) => {
  res.json({ message: "Remove a book" });
});

module.exports = router;
