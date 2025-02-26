
// about promises

/*

promis()=> promises is a javascript object which is represent the eventually completion or failure of asynchronous operation

.then().catch().finally();


*/


// new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log('arbaz khan ')
//         resolve()
//     },1000)


// }).then(()=>{
//     console.log('resolved')
// }).catch((error)=>{
//     console.log(error)
// })



// new Promise((resolve,reject)=>{

//     resolve({username:'arbaz khan',age:19,gender:'male',email:'arbaz@gmail.com',password:'12345'})


// }).then((userData)=>{

//   return  {username,age}=userData;
   
  
// })

// .then((data)=>{
//     console.log(data.username,data.age,data.gender)
// })


// .catch((error)=>{
//     console.log(error)
// })


// const apiUrl='https://randomuser.me/api/'

// fetch(apiUrl)
// .then((response)=>{

//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


// using try catch and async and await


const apiUrl='https://randomuser.me/api/'


async function requestApi(){

    try {

       const response=   await fetch(apiUrl);
       
       
       result= await response.json()
       console.log( result)

        
    } catch (error) {

        console.log(error)
        
    }
}
console.log('arbaz khamn ')
requestApi()