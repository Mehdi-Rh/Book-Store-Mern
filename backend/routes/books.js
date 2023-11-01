const express = require("express");

const router = express.Router();

// Get all books
router.get("/", (req, res) => {
  res.json({ message: "Get Books" });
});

// Get a single book
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single book" });
});

// POST a new book
router.post("/", (req, res) => {
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
