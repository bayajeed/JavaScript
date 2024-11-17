const form = document.querySelector('form');
const inputs = document.querySelectorAll('input'); // inputs er jonno all korte hobe
const a = document.querySelector('a');
const span = document.querySelectorAll('span');
const select = document.querySelector('select');

// form.addEventListener('submit', function(e){
//     e.preventDefault(); // data gula stay korar jonno
//     console.log("Demo Text")
// })


a.addEventListener('click', (e)=>{
    e.preventDefault(); // ei method er kaj hocche pura jinistake hold kore rakha
})

inputs[0].style.color = 'red'
form.addEventListener('submit', (e)=>{
    e.preventDefault(); // datagulake hold kore rakhar jonno
    inputs[0].style.color = 'blue';
    let values = inputs[0].value;
    //let color = inputs[1].value;
    let chk = inputs[2].checked; // true/fauls 
    console.log(chk);
    console.log(values); // browser er console a print howar jonno
    span[0].textContent = values; // for output
    //span.textContent = color;
    let opt = select.value;
    console.log(opt) // browser a dekhar jonno
    span[1].textContent = opt;
                                            
    //span.parentElement.nextElementSibling.textContent = opt; //  when use no index span, on querySelectior
})


