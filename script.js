console.log("hello world");

//query selectors
let count = 0;
let remIndex = 0;
const container = document.querySelector(".container");
const body = document.querySelector("body");
const submit = document.querySelector(".submit")
submit.addEventListener("click",addBookToLibrary);

//library record
let myLibrary = [];

function newBook(){

}

function addBookToLibrary(){
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const length = document.getElementById("length");

    const newBook = [title.value,author.value,+length.value];
    myLibrary.push(newBook);

    console.log(newBook)
    console.log(myLibrary)
    
    addBooktoPage(count);
    
    count+=1

    resetForm();



}

function resetForm(){

    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const length = document.getElementById("length");

    title.value="";
    author.value="";
    length.value="";

}

function addBooktoPage(count){
    
    //creating the book
    const book = document.createElement("div");
    const title = document.createElement("h4");
    const author = document.createElement("p");
    const length = document.createElement("p");
    const remove = document.createElement("button");

    //adding content
    title.textContent =  `"${myLibrary[count][0]}"` ;
    author.textContent = myLibrary[count][1];
    length.textContent = myLibrary[count][2];
    remove.textContent = "REMOVE";

    //adding class
    book.classList.add(title.textContent);
    title.classList.add("title");
    author.classList.add("author");
    length.classList.add("length");
    remove.classList.add("remove");
    remove.classList.add(title.textContent);


    //placing it in container
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(length);
    book.appendChild(remove)
    container.appendChild(book);

    //enabling remove button
    remove.addEventListener("click",removeBook);

}

function removeBook(){

    remIndex = 0;
    count-=1;
    const bookToRemove = this.classList[1];
    console.log(bookToRemove);

    for(const book of myLibrary){
        if (`"${book[0]}"`===bookToRemove){
            break;
        }
        remIndex+=1;
    }

    myLibrary.splice(remIndex,1);
    console.log(remIndex);
    console.log(myLibrary);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }