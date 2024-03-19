let input = document.querySelector(".input");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let wikiLink = document.querySelector(".wikiLink");
let button = document.querySelector(".click");
let result = document.querySelector(".result");

let book1 = {
input: "https://m.media-amazon.com/images/I/81UzXDy3lWL._AC_UF1000,1000_QL80_.jpg",
title: "No, David!",
author: "David Shannon",
wikiLink: "https://en.wikipedia.org/wiki/No,_David!"
};

let book2 = {
input: "https://m.media-amazon.com/images/I/819wRE-AaML._AC_UF1000,1000_QL80_.jpg",
title: "We Set the Dark on Fire",
author: "Tehlor Kay Mejia",
wikiLink: "https://en.wikipedia.org/wiki/We_Set_the_Dark_on_Fire"
};

let objects = [book1, book2];
console.log(objects);

button.onclick = function(){
let inputValue = input.value;
let titleValue = title.value;
let authorValue = author.value;
let wikiLinkValue = wikiLink.value;

let userBook = {
input: inputValue,
title: titleValue,
author: authorValue,
wikiLink: wikiLinkValue
};
    
objects.push(userBook);
    
result.innerHTML = " ";
    
objects.forEach(function(userBooks){
result.insertAdjacentHTML('beforeend', `<img src="${userBooks.input}"></img> <li> Title: ${userBooks.title} </li> <li> Author: ${userBooks.author}</li> <li>Wiki Link: ${userBooks.wikiLink} </li>`);
});
};