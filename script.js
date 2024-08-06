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
    <p class="index">id: ${id}</p><button type="" class="del-button">X</button>
  </div>
</div>`;
  
  container.insertAdjacentHTML('beforeend', card);
}

loadBook(0);

function addBookToLibrary() {
  
}

document.querySelectorAll(".read-button").forEach((button) =>
  button.addEventListener("click", (e) => {
    e.target.classList.toggle("read");
    e.target.classList.toggle("not-read");
    
    if(e.target.textContent === "Not read") {
      e.target.textContent = "Read";
    }
    else {
      e.target.textContent = "Not read";
    }

    let index = Number(e.target.parentElement.querySelector(".index").textContent.match(/\d+/)[0]); 
    myLibrary[index].read = !myLibrary[index].read;
  })
);
