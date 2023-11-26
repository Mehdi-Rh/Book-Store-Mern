import { useState } from "react";

const baseUrl = "http://localhost:4000/api/books/";
const useGetAllBooks = async () => {
  const [books, setBooks] = useState([]);
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

export { useGetAllBooks };
