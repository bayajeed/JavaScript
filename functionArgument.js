// function add(num1, num2){
//     console.log(arguments); // arrow function argument ke alow korena
// }
// add(11,33,77,99, "Mohammad")

// let arr = [1,2,3,4,5];
// let arr2 = arr; // it's change, refrence shoho change hocche
// arr[0] = 8;
// console.log(arr2)

// let arr = [1,2,3,4,5];
// let arr2 = [...arr] // no chage, only value copy hocche
// arr[0] = 8;
// console.log(arr2)

// function add(...num){
//     console.log(...num); // arrow function argument ke alow korena
// }
// add(11,33,77,99, "adfka")

// function add(...num){
//     let result = 0;
//     for(let i = 0; i < num.length; i++){
//         result = result + num[i];
        
//         console.log(`inx ${i} = ` + num[i])
//     }
//     console.log(`Total is: ${result}\n`)
// }

// add(3,4,5,7,8)


function add(...argu){ // Rest pramiter // ... single value gulake array banaw
    let result = 0;
    for(let i = 0; i < argu.length; i++){
        result += argu[i]
    }
    console.log(result)
}
let array = [ 2,4,5,6,7];
let arr2 = [4,3]
add(...array, ...arr2) // Spread pramiter //... Array take single value banaw // ... spread operator use when i use extra array

