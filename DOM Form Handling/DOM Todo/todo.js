const form = document.querySelector("form");
const input = document.querySelectorAll('input');
const div = document.querySelector('div');
//const ul = document.querySelector('ul')

// ul create kore then oitake selector banaiya li or vitore rakhtachi
const ul = document.createElement('ul');
div.append(ul); // div er moddhe ul add  korar jonno

form.addEventListener('submit', (e)=>{
    e.preventDefault();// Prevent the default form submission behavior

    let inputValue = input[0].value.toUpperCase();

    if (!inputValue.trim() == ''){ // Ensure input is not Emty or just whiteSpace
        let list = document.createElement('li'); // li create korar jonno
        list.textContent = inputValue;
        ul.append(list) // ul er moddhe li gula append korche ba vitore dhukche
        ul.classList.add('no-bullets');
        

        input[0].value = ''; // Clear the input field
    }

})