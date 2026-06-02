const express = require("express");
const app = express();

app.use(express.json());

// Sample Data
let books = [
  { id: 1, title: "Book One", authorId: 1 },
  { id: 2, title: "Book Two", authorId: 2 }
];

let authors = [
  { id: 1, name: "Author One" },
  { id: 2, name: "Author Two" }
];

// Routes

// Books
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  res.json(book);
});

// Authors
app.get("/authors", (req, res) => {
  res.json(authors);
});

app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  res.json(author);
});

app.listen(3000, () => console.log("Server running..."));