const Book = require("../models/bookModel");
const mongoose = require("mongoose");

// get all books
const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(books);
};

// get a single book
const getBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Book not found" });
  }

  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  } else {
    res.status(200).json(book);
  }
};

// create a new book
const createBook = async (req, res) => {
  const { title, author } = req.body;

  // add doc to db
  try {
    const newBook = await Book.create({ title, author });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  res.json({ message: "Post a new book" });
};

// update a book

// delete a book

module.exports = {
  createBook,
  getBooks,
  getBook,
};
