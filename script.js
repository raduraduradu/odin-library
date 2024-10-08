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
  let book = myLibrary[id];
  let card =`
  <div class="book-card" id="card${id}">
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

  //event listener for "read" buttons
  document.querySelector(`.container #card${id} .read-button`).addEventListener("click", (e) => {
    e.target.classList.toggle("read");
    e.target.classList.toggle("not-read");
    
    if(e.target.textContent === "Not read") {
      e.target.textContent = "Read";
    }
    else {
      e.target.textContent = "Not read";
    }

    myLibrary[id].read = !myLibrary[id].read;
  })

  //event listener for X buttons
  document.querySelector(`.container #card${id} .del-button`).addEventListener("click", (e) => {
    if(confirm("Book entry will be deleted permanently. Are you sure you want to continue?") == true){
      document.querySelector(`#card${id}`).remove();
      myLibrary[id] = undefined;
    }
  })
}

loadBook(0);


const addBookBtn = document.querySelector("#add-book");
const dialog = document.querySelector("#modal");

function addBookToLibrary(book) {
  //encoding < and > characters so html doesn't break
  book.title = book.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  book.author = book.author.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  myLibrary.push(book);
  loadBook(myLibrary.length - 1);
}

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector("#modal #form-cancel").addEventListener("click", () => {
  dialog.close();
})

let strToBool = (string) => {
  if(string === "true"){
    return true;
  }
  else if(string === "false"){
    return false;
  }
}

//handle form submission
const form = document.querySelector("dialog form");
form.addEventListener("submit", (e) => {
  
  if(isNaN(Number(form["pages"].value))) {
    e.preventDefault()
    alert("Input in pages field must be a number");
  }
  else {
    let newBook = new Book(form["book-title"].value, form["author"].value, form["pages"].value, strToBool(form["read"].value));
    addBookToLibrary(newBook);
  }
});
