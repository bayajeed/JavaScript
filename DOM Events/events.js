const h = document.querySelector('h1');
const dbl = document.getElementById('dbl');
const mypara = document.getElementById('mypara')
const listItems = document.querySelectorAll('li')
const tc = document.querySelector('span')

// 1st way
// h.addEventListener('click', ()=>{
//     h.textContent = "Welcome to JS"
// })

// 2nd way
// h.addEventListener('click', myFun) // myFun() eivabe invok kora lagena. direct myFun likhle e hoy
// function myFun(){
//     h.textContent = "new JS"
// }

// // onclick
// function change(){
//     h.textContent = "use Onclick"
// }

// double click, bdlclick
// dbl.addEventListener('dblclick', ()=>{
//     h.textContent = "Double Click Applied"
// })

// // Mouseover
// h.addEventListener('mouseover', ()=>{
//     h.style.color = 'red';
// })
// // MouseOut
// h.addEventListener('mouseout', ()=>{
//     h.style.color = 'green';
// })


// Use on Attribue Paramiter

// html a 17 no line a attribute diya onclick use with function diya this use kore
// we use `THIS` invok within myFun
// function myFun1(pra){
//     pra.textContent = 'Nothing'
//     pra.style.color = 'red';
// }
// function myFun2(pra){
//     pra.style.color = 'green';
// }
// function myFun2(e){
//     e.style.color = 'green';
// }

//with selector
// mypara.addEventListener('click', (event)=>{
//     console.log(event.type) // event.type, event.target
// })
// // // 2nd way without selector. eita 'target' er moto kaj kore, jeta html er moddhe theke function invok kore
// function myFun3(event){
//     console.log(event)
//     event.textContent = 'text Content Change then color '
//     event.style.color='red'
// }



for(let item of listItems){
    item.addEventListener('click', function (e){
        item.textContent = 'hello'
        
        // function fun(e){
        //     e.style.color = 'red'
        // }
        // uporer fun use na kore eivabe paramiter use kore select korte pari, "Target"
        console.log(e.target)
        e.target.style.color = 'red'
    });
}

// keydown
document.addEventListener('keydown', (e)=>{
    console.log(e.keyCode)
    tc.textContent = e.keyCode
})




//# naste neme ghomta porar sujog nai 
//# amader nobi bolechen. tomar hate jodi akta gas thake and oisomay jodi israfil er shingay fu dey prithibi kompon dey tokhono jeno gasta lagaio
