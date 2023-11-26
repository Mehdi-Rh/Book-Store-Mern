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
    return res.status(200).json(book);
  }
};

// create a new book
const createBook = async (req, res) => {
  const { title, author, category = "Action" } = req.body;

  // add doc to db
  try {
    const newBook = await Book.create({ title, author, category });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // res.json({ message: "Post a new book" });
};

// update a book
const updateBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Book to update not found" });
  }
  const book = await Book.findOneAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true }
  );
  if (!book) {
    return res.status(400).json({ message: "Book to update not found" });
  }

  res.status(200).json(book);
};

// delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Book to delete not found" });
  }
  const book = await Book.findByIdAndDelete({ _id: id });

  if (!book) {
    return res.status(400).json({ message: "Book to delete not found" });
  }

  res.status(200).json({ message: "Book deleted successfully" });
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook,
};
