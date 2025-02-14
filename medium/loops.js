

const arr1=['arbaz khan','salman khan','faizan khan','adnan khan','aman raza ']

/*

for of loop iterate at single element
we can use in array
*/

// for (const arr of arr1) {
//     console.log(arr)
    
// }

/*
for in loop is not iterable it is mosty used in object 
*/

// for (const key in arr1) {
//     console.log(arr1[key])
// }


const myMAp=new Map()

myMAp.set('1','monday');

myMAp.set('2','teusday');

myMAp.set('3','wednesday');

myMAp.set('4','Thursday');

for (const [key,value] of myMAp) {
    // console.log(key,value);
    
    
}


const myObject={
    name:'arbaz khan',
    age:23,
    course:'BCA'

}

for (const element in myObject) {
    // console.log(myObject[element])
    
}

// for Each loop{ it is mostly used in array }



const arr2=['arbaz khan','salman khan','faizan khan','adnan khan','aman raza ']

const myFn=(items,index,allArray)=>{

    // console.log(` index=${index} -: items= ${items} -: allArray= ${allArray} `)

}

arr2.forEach( myFn )


let Array_With_Object=[
    {name:'arbaz khan',age:23,course:"BCA", project:"ecommerse"},
    {name:'salman khan',age:20,course:"BBA", project:"crypto based project"},
    {name:'anuj kumar',age:22,course:"MCA", project:"React ecommerse"},
    {name:'aman chaurasiya',age:33,course:"Btech", project:"airbnb clone"}
]

// apply for each loop


// for each loop mostly used in array which
//  take call bacj function and it hold the all array, array inde, and items

let getDataFromArrayWithObject=(items)=>{

    console.log(items.name)
}



Array_With_Object.forEach( getDataFromArrayWithObject );