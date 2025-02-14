
// here we talk abot map() ans filter() methos

/*
 map() is used  to preform operation in expression and array, but it return a new array


 ****** examples**********
*/

let number=[1,2,3,4,5,6,7,8,9,10]

const newNumbers=number.map(  (num)=>(num+2) )

// console.log(newNumbers)

// chaining of map()

let chaining=number.map((num)=>(num+10))
.map((num)=>(num+1)).filter((num)=>(num>15 && num<=20))
// console.log(chaining)

/*
filter() is used to filter element from an array with true or false  condition

*****some examples*******
*/

let books=[
    {
    name:'science',
    price:2990,
    publish:2100,
    author:'anuj'
    },
    {
    name:'history',
    price:156,
    publish:2012,
    author:'faizan khan'
    },
    {
    name:'story',
    price:199,
    publish:2000,
    author:'salman khan'
    },
    {
    name:'history',
    price:1230,
    publish:1980,
    author:'amna sharma'
    },
    {
    name:'maths',
    price:200,
    publish:2019,
    author:'arbaz khan'
    },

]



// filter() is used to filter the value on basis of true or false condition

let myBook= books.filter((bk)=>{
    return    bk.name==='science' && bk.price>200
   
   }
   )
// console.log(myBook)

/*
reduce()=> reduce() is used to add all element of an array 

it take accumulator, and current value and initial value
it take a call back () function
*/

let cardItems=[1,2,3,4,5,6,7,8,9,10]

let grantTotal= cardItems.reduce( (acc,curVal)=>{
    return acc+curVal;
},55 )

console.log(grantTotal)