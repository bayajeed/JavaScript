// selecet by ID
// const title = document.getElementById("title")

// selecet by Class
// const para = document.getElementsByClassName('para')
// para[1].style.color = "red";

// single item seletct in class
// const para = document.getElementsByClassName("para")
// for(let item of para){
//     item.style.color = "red";
// }

// use for loop
// let para = document.getElementsByClassName("para")
// for(let i = 0; para.length; i++){
//     para[i].style.color = 'green'
// }

// Tag
// const listItem = document.getElementsByTagName("li")
// for(let item of listItem){
//     item.style.color = 'red'
// }

// ---------------Query Selector------------------------
// // querySelectior ---> single element
// const para = document.querySelector('.para')
// para.style.color = 'green'

// const para = document.querySelectorAll('.para')
// for(let item of para){
//     item.style.color = 'red'
// }

// forEach Method
// const para = document.querySelectorAll('.para')
// para.forEach((el) => {
//     el.style.color = "blue"
// })

// textContent er kaj
// const text = document.querySelector('h1')
// let age = Number(prompt("Enter your Name"))
// if(age > 18){
//     text.textContent = "Welcom"
// }else{
//     text.textContent = "getOut"
// }


// Attribute
//get attribute
// const text = document.querySelector('h1');
// document.write(text.getAttribute('class'));
// console.log(text.getAttribute('class'));

//set attribute
// const text = document.querySelector('h1');
// document.write(text.setAttribute('class', 'newHeader newheader2'));
// console.log(text.getAttribute('class'));

// classList
// const h = document.querySelector('h1')
// h.classList.add('Text3');
// h.classList.remove('Text1');
// document.write(h.classList)

// Toggle
// const h = document.querySelector('h1');
// h.addEventListener('click', function(){
//     h.classList.toggle('red')
// })

// const h = document.querySelector('h1');
// const btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{
//     h.classList.toggle('red')
//     console.log(h)
// })

// const main = document.querySelector('h1');
// //main.nextElementSibling.textContent = "Nothing" // porer Element gula emn kore o nite pari
// main.parentElement.nextElementSibling.children[0].style.color = "blue"// prothome h1 theke back kore parent element a asbe.then porer sibling a jabe. then oikhantheke tar child[2] ke select korbe
// main.parentElement.nextElementSibling.nextElementSibling.style.color = 'red'

// Create new Element
const body = document.querySelector('header')
const newItem = document.createElement("h1");
newItem.textContent = "Hello New Create Content";
body.append(newItem);

