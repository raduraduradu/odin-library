const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//dummy content
myLibrary.push(new Book("1984", "George Orwell", 328, false));

function addBookToLibrary() {
  
}
