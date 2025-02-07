
const  str1='arbaz khan';

const str2='salman khan';

// const str3=str2.concat( str1);
// console.log(str3)

// concat() method is used to join two or more strings. This method does not change the existing strings, but returns a new string containing the text of the joined strings.

// console.log(str1.charAt(4))
// console.log(str2.indexOf('al'))

// charAt() method returns the character at the specified index (position) in a string.

//indexOf() method returns the position of the first occurrence of a specified value in a string.

// console.log(str1.slice(-7,-2))
// console.log(str1.substring(2,11))

// slice() extracts a part of a string and returns the extracted part in a new string.

// substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.

const str3= '   faizan khan          '
// console.log(str3)
// console.log(str3.trim())

// trim() method removes whitespace from both sides of a string.
// console.log(str3)
// console.log(str3.replace('khan','mirza'))

// replace() method replaces a specified value with another value in a string.

let str4=str1.includes('b')
// console.log(str4)

// console.log(str2.split('a',2))

// let url='https://www.google.com/search?q=javascript'
//  console.log(str1.split(" "))

// split() method is used to split a string into an array of substrings, and returns the new array.

let mood="happy! ";

// console.log(mood.repeat(5)) ;

// repeat() method returns a new string with a specified number of copies of the string it was called on.


// reverse a string using loop

let randomName="arbaz khan";

for( let i=randomName.length-1;i>=0;i--){
    let reverse=randomName[i];

    if(reverse=='k'){
        continue;
    }
    console.log(reverse)
    
}

    
    
    