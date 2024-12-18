// Create and access object 

let books = {
    Title: "Harry potter",
    Author: "J.K Rowling",
    Year: 2007
}
console.log(books.Title, books.Author, books.Year);
let { Title: BookName } = books;
console.log(BookName);
books.Title = "Harry Potter and the Chamber of Secrets";
console.log(books.Title);
books.Year = 2008;
console.log(books.Year);


// Object Methods

let  book={
    Title:"Harry Potter",
    Year:2008,
    Author:"JK Rowling",
    Summery:function(){
            return (`The book Title is ${this.Title} And Author Name is ${this.Author}`);
    }
}
console.log(book.Summery());

// object destructuring

let news={
    Title:"Harry Potter",
    Year:2008,
    Author:"JK Rowling",
    Summery:function(){
            return (`The book Title is ${this.Title} And Author Name is ${this.Author}`);
    }
}
const{Title,Year}=news;
console.log(news.Title);
console.log(news.Year);
console.log(news.Summery());

// object spread

let person={
    name:"yogesh",
    age:34,
}
console.log(person.name);

let backpersons={...person,city:"newyork"}
console.log(backpersons);
console.log(person);

// Iternate properities.

let nests={
    Title:"Harry Potter",
    Year:2008,
    Author:"JK Rowling",
    Summery:function(){
            return (`The book Title is ${this.Title} And Author Name is ${this.Author}`);
    }
}
for (const key in nests) {
    console.log(key);
    console.log(nests[key]);
}
