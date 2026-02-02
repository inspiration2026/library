const myLibrary = [];

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
  // the constructor...
}


function addBookToLibrary(title,author,pages) {
    let book = new Book (title,author,pages);
    myLibrary.push (book);
}

function createTable() {
    const div = document.createElement("div");
    div.classList.add ("table_container");
    const table = document.createElement("table");
    table.classList.add ("table_books");
    const caption = document.createElement("caption");
    caption.textContent = ("Books in the Library")
    const title_row = document.createElement("tr");
    const head1 = document.createElement("th");
    const head2 = document.createElement("th");
    const head3 = document.createElement("th");
    const head4 = document.createElement("th");
    head1.textContent = ("Title")
    head2.textContent = ("Author")
    head3.textContent = ("Pages")
    head4.textContent = ("ID #")

    document.body.appendChild(div);
    div.appendChild(table);
    table.appendChild(caption);
    table.appendChild(title_row);
    title_row.appendChild(head1);
    title_row.appendChild(head2);
    title_row.appendChild(head3);
    title_row.appendChild(head4);
}

function displayBook(book) {
    const row = document.createElement("tr")
    const data1 = document.createElement("td");
    const data2 = document.createElement("td");
    const data3 = document.createElement("td");
    const data4 = document.createElement("td");
    const table = document.querySelector("table");

    data1.textContent = (book.title)
    data2.textContent = (book.author)
    data3.textContent = (book.pages)
    data4.textContent = (book.id)

    table.appendChild (row);
    row.appendChild (data1);
    row.appendChild (data2);
    row.appendChild (data3);
    row.appendChild (data4);
}

addBookToLibrary("Fourth Wing", "Rebecca Yarros", "517");
addBookToLibrary("The Secret History", "Donna Tartt", "559");
addBookToLibrary("Martyr!", "Kaveh Akbar", "352");
addBookToLibrary("Project Hail Mary", "Andy Weir", "496");
console.table(myLibrary);

createTable();
myLibrary.forEach (displayBook);

// User involvement
const button_container = document.createElement ("div");
document.body.appendChild(button_container);
const button = document.createElement("button");
button.classList.add = ("button");
button_container.appendChild(button);

Object.assign(button_container.style, {
    display: "flex",
    justifyContent: "center",
});


Object.assign(button.style, {
    width: "150px",
    height: "40px",
    borderRadius: "15px",
    border: "1px solid #a4a2a2",
    backgroundColor: "#d2d2d2"
});
button.textContent = ("New Book");










// Styling (Should be in the end of JS file)
const table = document.querySelector("table");
table.style.borderCollapse = "collapse";
table.style.border = "1px solid #ccc";
table.style.width = "90%";
table.style.margin = "20px auto";
table.style.fontFamily = "Arial, sans-serif";

const caption = document.querySelector ("caption");
caption.style.padding = "12px 15px";


document.querySelectorAll("th").forEach (th => {
    th.style.padding = "12px 15px";
    th.style.border = "1px solid #ccc";
})
document.querySelectorAll("td").forEach (td => {
    td.style.padding = "12px 15px";
    td.style.border = "1px solid #ccc";
})
document.querySelectorAll("tr").forEach (tr => {
    tr.style.borderBottom = "3px solid #ddd";
})

