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

// Creating request form 
    const form_container = document.createElement ("div");
    Object.assign(form_container.style, {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        border: "2px solid purple"
    });
    const bookForm = document.createElement ("form");
    document.body.appendChild(form_container);
    form_container.appendChild(bookForm);

    Object.assign(bookForm.style, {
        display: "grid",
        gridTeamplateColumn: "1fr 2fr",
        columnGap: "10px",
        rowGap: "10px",
        // flexDirection: "column",
        // justifyContent: "center",
        // marginTop: "20px",
        border: "2px solid red"
    });

    const labelOne = document.createElement ("label");
    const labelTwo = document.createElement ("label");
    const labelThree = document.createElement ("label");

  

    const inputOne = document.createElement ("input");
    const inputTwo = document.createElement ("input");
    const inputThree = document.createElement ("input");

    bookForm.appendChild(labelOne);
    bookForm.appendChild(inputOne); 
    bookForm.appendChild(labelTwo);
    bookForm.appendChild(inputTwo);
    bookForm.appendChild(labelThree);
    bookForm.appendChild(inputThree);

    labelOne.textContent = ("Title: ");
    labelTwo.textContent = ("Author: ");
    labelThree.textContent = ("Pages: ");

    inputOne.type = "text";
    inputOne.id = "title";
    inputOne.name = "title";
    inputOne.placeholder = "Book title";
    inputOne.required = "requared";
 
    labelOne.htmlFor = "title";

    inputTwo.type = "text";
    inputTwo.id = "author";
    inputTwo.name = "author";
    inputTwo.placeholder = "Book author";
    inputTwo.required = "requared";
 
    labelTwo.htmlFor = "author";

    inputThree.type = "number";
    inputThree.id = "pages";
    inputThree.name = "pages";
    inputThree.placeholder = "123";
    inputThree.required = "requared";
 
    labelThree.htmlFor = "pages";

    labelOne.style.gridColumn = "1/2";
    inputOne.style.gridColumn = "2/3";

    const readCheckbox = document.createElement('input');
    readCheckbox.type = 'checkbox';
    readCheckbox.name = 'read';
    readCheckbox.id = 'read';

    const readLabel = document.createElement('label');
    readLabel.htmlFor = 'read';
    readLabel.textContent = 'I have read this book';

    bookForm.appendChild(readLabel);
    bookForm.appendChild(readCheckbox);

    const submit = document.createElement ("button")
    const cancel = document.createElement ("button")

    submit.type = "submit";
    submit.textContent = "Add Book";
    cancel.type = "button";
    cancel.textContent = "Cancel";

    bookForm.appendChild(submit);
    bookForm.appendChild(cancel);

    Object.assign(submit.style, {
        width: "100px",
        height: "30px",
        backgroundColor: "#e2e1e1"
    });

    Object.assign(cancel.style, {
        width: "100px",
        height: "30px",
        backgroundColor: "#e2e1e1"
    });














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

