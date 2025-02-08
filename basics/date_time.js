
let myDate=new Date()
// console.log(myDate);

// Date is an object in javascript

// console.log(myDate.toDateString())

// toDateString=> it returns the date with date in proper formate 

const date=new Date()
// console.log(date.getMonth()+1);
// console.log(date.toLocaleString("default",{
//     formate:"jkhsdk"
// }))

// console.log(date.getFullYear())

// console.log(date.toLocaleString());

// toLocaleString()=> it returns the date and time with proper formate 


// console.log(date.getDate())

// getDate() => it returns the only date 
// get day()=> it returns the only day
// getFullYear() => it reurns the only years

const newDate=new Date(2025,1,4, 7,9,56);

// console.log(newDate.toLocaleString())

// console.log(newDate.getMilliseconds())

let oneMoreDate= Date.now()/1000+1;

// console.log(Math.floor(oneMoreDate));

let curDate_time=new Date()
console.log(curDate_time.toLocaleString())
   
console.log("all date month and years");

// current date using getdate() method
console.log(`current date is=> ${curDate_time.getDate()}`)


// curreen date using getDate() method

console.log(` cuurret month is=>${curDate_time.getMonth()+1}`)

// currnet year usug getFullYear() 

console.log( `curent year is=>${curDate_time.getFullYear()}` )




