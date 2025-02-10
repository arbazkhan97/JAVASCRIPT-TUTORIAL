
const array=[0,1,2,3,4,5,6,7,8,9];

// console.log(Array.isArray(array))


array.push(11);
// console.log(array)

// push() => push() is used to add elelment in last of an array

array.pop()
// console.log(array)

// pop()=> pop()is used to remove last  element  of an array

array.unshift(0);
// console.log(array)

// unshift()=> unshift() is used to add element in first index on an array

array.shift()
// console.log(array)

// shift()=> shift()  is used to remove first index element in the array



const array3=array.join('_')
// console.log(array3)
// console.log(typeof array3)

/* join()=> join()  This method return the new string ,

 seprated by comma's and join the specifiesd symbol
 */

 const array4=array.indexOf(3)
//  console.log(typeof array4)

// indexOf()=> indexof() returns the location of specified array element

// console.log( array.includes(1))

/* include()=> includes() returns the boolean values(true,false),

 it find the  the element which which is given by you if exist  then return true, else return false
*/



const arrSlice= array.slice(4,-10);
// console.log(arrSlice)
// console.log(array)

/*
slice()=> 1-: slice() returns the shallow copy of a portion of an array in to new array object

2-: it does not change in the original array object
3-: it does not include the last range .

*/

// const array=[0,1,2,3,4,5,6,7,8,9];

// const spliceArray=array.splice(array.length-3,11,12,13,14,15)

// console.log(spliceArray)
// console.log(array)


/*
splice()=>  splice() of array object changes the contents of array  by removing replacing and adding the element  in the array.

2-: it overwrites the original array.

3-: it is used to adding removing and replacing the element in the array.

4-: it includes the last range  

*/

//  perform CRUD operation  in  aray

// add element in array

for (let i=20;i<=30;i++){
    
    array.push(i)
   
}

// console.log(array)

//  delete element fron array

for(let j=0;j<=10;j++){
    array.pop()
}
// console.log(array)


// edit or replacing element in the array


for( let k=10;k<=20;k++){

    array.splice(array.length,0,k)
}
// console.log(array)

// read the array or show the array

for( let l=0;l<=array.length-1;l++){
    // console.log(  array[l]);
}

// console.log( typeof array)

const array2=[10,11,12,13,14,15]

//  ... spread operator is used to spread the array's element indivisually,

const array5 =[...array,...array2,array3]
// console.log(array5)

// console.log(Array.isArray(array2))

// Array.of()=> Array.of() is used to convert string object, etc in to array, but the thing is ,it  provide the only one index of on string or object

let sum=(Array.of({name:'arbaz khan',age:23,college:'aihe'}))
// console.log(sum[0].college)


 const another_Array=[1,2,3,4,5,[5,4,3,2,1,[0,9,8]],'h','g','f',[1,[12]]];

//  console.log(another_Array)

// flat()=> flat() returns a single array of mutidimentional arrays

 const modified_array=another_Array.flat(Infinity)
//  console.log(modified_array)


 //


 // Array.from()=> Array.from() is used to convert string  in to a array. but the thing is it provide the index  every single charecter in array here, we cant pass object, boolean and  number,  if we pass the these data type into this method then it return the empty array,
 
let fromArr=(Array.from('53'))
// console.log(fromArr)

console.log(Array.isArray(array3))