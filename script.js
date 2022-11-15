console.log("hello world");

//query selectors
let count = 0;
let remIndex = 0;
const container = document.querySelector(".container");
const body = document.querySelector("body");
const submit = document.querySelector(".submit")
const cancel = document.querySelector(".cancel");
submit.addEventListener("click",addBookToLibrary);
cancel.addEventListener("click",resetForm);
//library record
let myLibrary = [];

function newBook(){

}

function addBookToLibrary(){
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const length = document.getElementById("length");

    if (title.value==="" || author.value==="" || length.value===""){
    return;
    }

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
    const markRead = document.createElement("button");

    //adding content
    title.textContent =  `"${myLibrary[count][0]}"` ;
    author.textContent = "Written by " + myLibrary[count][1];
    length.textContent = myLibrary[count][2] + " Pages";
    remove.textContent = "REMOVE";
    markRead.textContent = "READ";

    //adding class
    book.classList.add("book");
    book.setAttribute("id",title.textContent);

    console.log(book);

    title.classList.add("title");
    author.classList.add("author");
    length.classList.add("length");
    remove.classList.add("remove");

    remove.setAttribute("id",title.textContent);
    console.log(remove)
    
    markRead.classList.add("markRead");
    markRead.classList.add("read");

    //placing it in container
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(length);
    book.appendChild(markRead);
    book.appendChild(remove);
    container.appendChild(book);

    //enabling remove button
    remove.addEventListener("click",removeBook);

    //enabling markRead button 
    markRead.addEventListener("click",toggleButton);

}

function toggleButton(){

    console.log(this)

    if (this.textContent==="READ"){
        this.classList.remove("read");
        this.textContent="NOT READ";
        this.classList.add("unread");
    }
    else{
        this.classList.remove("unread");
        this.textContent="READ";
        this.classList.add("read");
    }
}

function removeBook(){

    remIndex = 0;
    count-=1;
    const bookToRemove = this.id;
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

    const remBook = document.getElementById(bookToRemove)
    console.log(remBook)
    container.removeChild(remBook);
}
