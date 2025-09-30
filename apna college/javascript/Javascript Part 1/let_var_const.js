/*
 let , var , const keyword :

 let keyword  : 
  
 - let keyword is used to define javascript variables.
 - let a;   // variable declaration.
   a = 10;  // variable initialization / value assignment to variable.
   let a = 10; // variable declaration with initialization.
  
  - always write (;) after completion of statement in javascript.
  - at the creation of variable it's initialization is optional.

  syntax of declaring variables 
  
  let age = 23;
  age = age + 1; //24

  let cgpa;
  cgpa = 8.9

  let num1 = 1;
  let num2 = 2;
  let sum = num1 + num2;

const keyword : 
 
  - values of constants can't be changed with re-assignment & they can't be re-declared.

  - Example

    const year = 2025;
    const year ; //  Error (constant are not redecalred)
    year = 2026 // Error (constant are not reassiged)
    year = year + 1 // Error

    const pi = 3.14
    const g = 9.8

  var keyword : 

  - old syntax of writing variables.



 */

  // let keyword
  let age = 23;
  console.log(age) //23

  age = age + 1;
  console.log(age) //24

  age = age - 1;
  console.log(age) //23

  let cgpa = 8.9;
  console.log(cgpa); //8.9

  cgpa = cgpa * 10;
  console.log(cgpa); //89

  let side = 4;
  console.log("side of square " + side) //side of square 4

  let area = side ** 2;
  console.log("area of square " + area) //area of square 16

  let num1 = 1;
  let num2 = 2;
  let finalSum = num1 + num2;
  console.log(`sum of ${num1} and ${num2} is ${finalSum}`)


  // const keyword 

  // constant (non-changable)
  const pi = 3.14;
  
  // non-constant (changable)
  let radius = 4;

  let areaCircle = pi * radius * radius;

  console.log(areaCircle) //50.24

// var keyword

var a = 10;

var b = 20;

var sum = a + b;

console.log(sum) //30


 
