// function myFun(a, b){
//     let result = a + b;
//     console.log(result);
//     return result;
// }
// let r = myFun(4,5);
// console.log(r)

// let carName; // Bahir theke kno variable user korte chaile bahire dicler korte hoy
// function myFun(){
//     carName = "volvo";
//     let txt = "inside:" + typeof(carName) + " " + carName;
//     console.log(txt);
// }
// myFun();
// console.log(carName) // Bahir theke kno variable user korte chaile bahire dicler korte hoy

function myFun(num){
    for(let i = num; i > 0; i--){
        console.log(`Multiplication table for ${num}= `);
        for(let j = 1; j <= 10; j++){
            console.log(`${num} * ${j} = ` + num * j);
        }
        console.log('----------------------'); 
        num--;
    }
}
myFun(5)