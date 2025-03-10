// Primative
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

let name = "Sameer"
const score = 100
const scoreValue = 100.9

const isLoggedIn = true
const outSideTemp = false

let earth ;
// const earth ; // error bcz const

const id = Symbol('111')
const anotherId = Symbol('111')
// console.log(id === anotherId);

const bigNumber = 56655663666633325n        // n represent bigInt
// console.log(bigNumber);

// referance DT or NonPrimative DT
// Array, Functions, Object, dates

const heros = ["IronMan", "CaptainAmerica","hulk"]
let myObj ={
    name : "Sameer",
    age : 22
}
let myFunction  = function(){
    console.log("Hello world");
    
}

console.log(heros);
console.log(myObj);
console.log(myFunction);

