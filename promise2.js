const Promise=require('promise')

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Shahun")
        },3000)
    })
}

function getNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("8848548626")
        },2000)
    })
}

// Promise.all([getName(),getNumber()]).then((result)=>{
//     console.log(result)
// })

async function getUser(){
    let name=await getName()
    console.log(name);
    let mobile= await getNumber()
    console.log(mobile);
}

getUser()