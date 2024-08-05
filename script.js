const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const container = document.querySelector(".container");

//dummy content
myLibrary.push(new Book("1984", "George Orwell", 328, false));

function loadBook(id) {
  //let card = document.createElement(div);
  //card.classList.add("book-card");
  let book = myLibrary[id];
  let card =`<div class="book-card">
  <div>
    <h2>${book.title}</h2>
    <h3>by ${book.author}</h3>
  </div>
  <p>${book.pages} pages</p>
  <button type="" class="read-button ${book.read ? 'read' : 'not-read'}">${book.read ? 'Read' : 'Not read'}</button>
  <div class="bottom-div">
    <p>id: ${id}</p><button type="" class="del-button">X</button>
  </div>
</div>`;
  
  container.insertAdjacentHTML('beforeend', card);
}

loadBook(0);

function addBookToLibrary() {
  
}
