import { createAsyncThunk } from "@reduxjs/toolkit";

// Action types
const addBook = "addBook";
const removeBook = "removeBook";
const getBooks = "getBooks";

// const baseUrl = ("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi");
const apiId = "JUWUUSwLtCmHou4Ag9hk";

const initialState = {
  books: [],
  status: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getBooks/fulfilled":
      return {
        books: action.payload,
        status: "Fetch book list succeded",
      };
    case "addBook/fulfilled":
      return {
        books: [...state.books, action.payload],
        status: "Add book succeded",
      };

    case "removeBook/fulfilled":
      return {
        books: state.books.filter((item) => item.item_id !== action.payload),
        status: "Delete book succeded",
      };
    default:
      return state;
  }
};

const baseUrl = "http://localhost:4000/api/books/";

export const getBooksAction = createAsyncThunk(getBooks, async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
  console.log("data", data);
  // const keys = Object.keys(data);
  // const arrayData = [];
  // keys.map((key) =>
  //   arrayData.push({
  //     item_id: key,
  //     title: data[key][0].title,
  //     author: data[key][0].author,
  //     category: data[key][0].category,
  //   })
  // );
  // return arrayData || [];
});

export const addBookAction = createAsyncThunk(addBook, async (book) => {
  await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return book;
});

export const removeBookAction = createAsyncThunk(removeBook, async (id) => {
  await fetch(`${baseUrl}/apps/${apiId}/books/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      item_id: id,
    }),
  });

  return id;
});

export default bookReducer;
