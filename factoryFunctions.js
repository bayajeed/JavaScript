// function facFun(){
//     return{
//         name: "Bayajeed",
//         age: 44,
//         car: function(){
//             console.log("hello Factory Function")
//         }
//     };
// }
// let obj = facFun();
// console.log(obj)
// console.log(obj.age)

// let person = {
//     name: 'John Doe',
//     age: 99,
//     location: 'London',
//     sayHello() {
//         console.log('Hello');
//     },
// };
// console.log(person)

// let user = prompt("enter:")
// console.log(user)



// function myFun(){
//     return{
//         name: "mohammad",
//         age: 33,
//         inFun(){
//             console.log("hello Factory Function")
//         }
//     }
// }
// console.log("Welcome Factory Function")
// let obj = myFun();
// console.log(obj);
// let obj_inFun = myFun().inFun();
// console.log(obj_inFun) // this is undefined


// function myFun (name, age, ) {
//     return{
//         name: name,
//         age: age,
//         inFun(){
//             console.log("test")
//         }
//     }
// }
// let obj = myFun("mohammad", 22);
// console.log(obj)


function myFun (name, age, ) {
    return{
        name, age,
        inFunc: function(){
            console.log("test")
        }
    }
}
// let name = prompt("enter the name: ") // user input
// let age = prompt("enter the AGE: ") // user input
let obj = myFun("Mohammad", 55);
let obj1 = myFun("Mohammad", 55);
console.log(obj)
console.log(obj1)