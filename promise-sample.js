// function add(num1,num2,callback){
//     let err=false
//     if(num1==0){
//         err=true
//     }
//     callback(num1+num2,err)
// }

// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }
// function divi(num1,num2,callback){
//     callback(num1/num2)
// }

// add(10,20,(sum,err)=>{
//     if(err){
//         console.log("ERROR")
//     }else{
//     console.log(sum)
//     multiply(sum,10,(product)=>{
//     console.log(product)
//     divi(product,10,(result)=>{
//     console.log(result)})})
// }})

const promise = require('promise')

function add(num1, num2) {
    return new promise((resolve, reject) => {
        if (num1 == 0) {
            reject("Nee cheythath thett")
        }
        resolve(num1 + num2)
    })
}
function multiply(num1, num2) {
    return new promise((resolve, reject) => {
        if (num1 == 0) {
            reject("Nee cheythath thett")
        }
        resolve(num1 * num2)
    })
}
function div(num1, num2) {
    return new promise((resolve, reject) => {
        if (num1 == 0) {
            reject("Nee cheythath thett")
        }
        resolve(num1 / num2)
    })
}

add(10, 20).then((sum) => {
    console.log(sum)
    return multiply(sum, 10)
}).then((product) => {
    console.log(product)
    return div(product, 10)
}).then((result) => {
    console.log(result)
})
    .catch((err) => {
        console.log(err)
    })