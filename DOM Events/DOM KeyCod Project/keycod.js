const h = document.querySelector('h1');

document.addEventListener('keydown', (e)=>{
    h.style.textAlign = 'center'
    switch(e.keyCode){
        case 65:
            h.textContent = "A";
            break;
        case 66:
            h.textContent = "B";
            break;
        case 67:
            h.textContent = "C";
            break;
    }
})
    



     