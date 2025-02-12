
/* function in javascript

function is a re-usable block of code 

function parameter=>  when we declared a function and passs the variable that is called function parameter

fucntion argument=> during function we pass the values that is called function argument 

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

  console.log(myArrayFunction(array1))