
/* function in javascript

function is a re-usable block of code 

function parameter=>  when we declared a function and passs the variable that is called function parameter

fucntion argument=> during function call when we pass the variable or values that is called function argument 

return()=>  it returns the  function values


*/

// example

function myFunction(num1,num2){
    
    return num1+num2
}

let result=myFunction(41,47)
// console.log(result)

// function with object

const user={
    name:'arbaz khan',
    age:23,
    class:'BCA'
}

function objFunction(getAnyObject){

    return ` username =  ${getAnyObject.name} age=${getAnyObject.age} course=${getAnyObject.class} `;
}

let userdata=objFunction(user);
// console.log(userdata)


function isLoggedIn(user){

    if(!user){
        console.log(' enter username');
        return;
    }

    return `${user} just logged in`
    
}

// console.log(isLoggedIn('arbaz khan'))

function sum(num1,num2){
   return num1+num2;
}

// sum(1,2)



function addToCards(...items){

    return  items
}

 let items= addToCards(200,300,499,500,699,7869)


//  console.log(items)

  // function with array

  let array1=['arbaz khan',24,67,'salman khan']

  function myArrayFunction(getMYArray){

    return ` ${getMYArray[0]}, ${getMYArray[2]} `
  }

//   console.log(myArrayFunction(array1))


// ********* This Keyword ************************

/*
This keyword refers to current context

if we print the (This) keyword in node js enviornment then it  returns the empty object ({}) .

if we print the (This) keyword in  brower then it return the  window object

let's try some example 

*/

const thisUserObj={
    name:'arbaz khan',
    age:23,
    welcomeMsg:function(){
        // console.log(this.name,this.age);
        // console.log(this)
    }
}
thisUserObj.name='salman khan'
// console.log(this)
 thisUserObj.welcomeMsg()

 // this keyword with functions

 function one(){
    // const username='arbaz khan'
  console.log(this)
 }
 
//  one()
/* 
when we print the (This) keyword inside the normal function then it return  an object which will be unreadable form
*/

const two=function(){
    // const username='salman khan'
    console.log(this)
}
// two()

const three=()=>{

    
    console.log(this)
}

// three()

/*

when we print the (this) keyword  inside the arrow function then it returns the  empty object ( {} )
*/


/* 

implicit return means  no need to add {}  in function 
      ****example******
  */


      const addArrow=(num1,num2)=>  (num1+num2)


    //   console.log(addArrow(2,3))

      // secong

      const some=()=>{ return ({username:'arbaz khan',age:23,course:'BCA'})}

    //   console.log(some())
      /* 

explicit return means  we have to  add  {}  in function  (compulsary) 

      ****example******
  */

      const multiple=(num,num2)=>{
        return num**num2
      }

    //   console.log(multiple(2,20))


    function chai(user){

        if(user){
            return `${user} just logged in`
        }
        else{
            console.log('please enter username')
            return
        }
    }
//    console.log( chai('arbaz khan'))


const spread=(...items)=>{

    const mul=items.map((i)=>i+(i*18/100))
    return mul;
}

 const values=spread(12,12,13,13,14,14,15,15)
//  console.log('18% gst included',values)-