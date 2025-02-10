// singleton
// whe we create an object with constructor then it create otherwise no

// syntex=> Object.create()


// literals
// syntex=> const user={}

 
const mySymbol=Symbol()  // create symbol literals

// console.log( mySymbol)

// Behind the schene  every key in object trated as string  and you cann also write a key as a string

const user={
    name:'arbaz khan',
    age:23,
    location:'kanpur',
    "email":"arbazkhan@gmail.com",
    [mySymbol]:'key01' ,

    greeting2: function(){
        console.log(`hello ${this.email} welcome to js lecture`)
    }
   
}


 // add symbol literals in ibjects using [] brackets

// we acces the element using . & [] in object 



user.email='salmankhan@gmail.com';

// Object.freeze(user)  

// freeze()=> is used to freez an object thats mean we can't change anything in object

user.age=30; // not ovwrwrite because object is freeze
// console.log(user)


user.greeting= function(){

    console.log(`good morning ${this.name}`)
}

// console.log(user.greeting());
// console.log(user.greeting2())


const obj1={1:'a',2:'b',3:'c'}

const obj2={4:'a',5:'b',6:'c'}

const obj3={   7:'a',8:'b',9:'c'}

const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

// object.assign()=> it is used to combine to or more object in to single object

const obj5={...obj1,...obj2,...obj3}
// console.log(obj5)


// console.log(Object.keys(obj5))

// object.key()=> it is returns the only keys of given object

// Object.values()=> it returns the all values of an  object in the form of array

const user2={
    name:'salman khan',
    email:'salman@gamil.com'

}

// hasOwnProperty()=> is useg to check property is exist or not in ant object


console.log(user2.hasOwnProperty('email'))


// destructuring in js

const appUser={

    course:'js',
    instructure:'chai or code',
    courseFee:'free'
}

const { instructure:ins,courseFee:fee,course:crs}=appUser

console.log(ins)
console.log(fee)
console.log(crs)