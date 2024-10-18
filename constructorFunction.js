// function Myfun(name, age, location){
//     this.name= name,
//     this.age= age, 
//     this.location =location
//     this.inFun = function(){
//         console.log("Hello")
//     }
// }

// let obj = new Myfun("hj",44, "fadsf")
// console.log(obj)

// function Person(name, age, location){
//     this.na = name, // this.name = name also valid
//     this.ag= age, 
//     this.lo= location
// }
// let obj = new Person("Bonny", 11, "Dhaka")
// let obj2 = new Person("Mohammad", 33, "Khulna");
// console.log(`obj: ${obj} , ${obj2}`)

// console.log(obj , obj2)


function Person(name, age, location){
    this.name = name,
    this.age= age, 
    this.location= location
    this.inFun= function(){
        console.log("inner Function")
    }
}

let obj = new Person("Bayajeed", 11, "Dhaka")
let obj2 = new Person("Mohammad", 33, "Khulna");
console.log(`obj: ${obj.name} , ${obj2.name}\n`);
console.log(obj , obj2)

obj.list = ["adfa", 34, "334"]; // new list add korar jonno
console.log(obj)