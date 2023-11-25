require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

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

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests

    const port = process.env.PORT;
    app.listen(port, () => {
      console.log("connecting to db & listening for requests on port " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
