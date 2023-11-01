require("dotenv").config();

const express = require("express");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "WELCOME" });
});
const bookRoutes = require("./routes/books");
app.use("/api/books/", bookRoutes);

//listen for requests

const port = process.env.PORT;
app.listen(4000, () => {
  console.log("listening for requests on port " + port);
});
