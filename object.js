// let person = {
//     name: "mohammad",
//     age: 22,
//     location: "khulna"
// }
// person.phone = 55; // bahir theke ono object dite chaile
// console.log(typeof(person))
// console.log(person)

// let person = {
//     name: "mohammad",
//     age: 22,
//     location: "khulna",
//     arr: ["bonny", "barisal", 30],
//     sum: function(a, b){
//         console.log(a+b);
//     }
// }
// console.log(typeof(person.arr))
// console.log(person.arr)
// console.log(person)
// person.sum(2, 4);

// let person = {
//     name: "Mohammad",
//     age: 23,
//     myFun(){
//         console.log(`My Name is: ${this.name}`)

//     }
// }
// person.myFun()

// let arr = [33, 44, 44, "Mohamdda", "hossain",33];
// arr.forEach(function(arr) {
//     console.log(arr)
// });

// let number = [3, 4, 2];
// let sum = 1;
// number.forEach((number)=>{
//     sum = sum * number;
//     console.log(sum)
// })


// let person = {
//     name: "Mohammad",
//     age: 33,
//     interset: ["name", "age", "location", 123, {name: "bonny", location: "Barisal", age: 33,
//         objFun: function (el){
//             console.log("hello Object in Object Function")
//         }
//     }],
// }
// delete person.age;
// person.interset.forEach((el)=>{
//     console.log(el);
// })
// console.log(person.interset[4].name) // object er moddhe object use korar jonno 
// person.interset[4].objFun(); // object object er moddhe jodi function likhi


//      this
let person = {
    name: "Mohammad",
    interset: ['JavaScript', 'python', 'c'],
    showInterset: function(){
        this.interset.forEach(function(el){ // use function
            console.log(`My Name is: ${this.name}`); // option 1
        }, this)
    },

    showInterset2(){
        this.interset.forEach(()=>{ // use arrow function
            console.log(`My name is 2nd: ${this.name}`) // option 2
        })
    }
}
person.showInterset();
person.showInterset2();
function my(){
    console.log(this)
}
my()


