/*
 *Arrays In Javascript : 
 * 
 * An array in Javascript is a data structure that stores an ordered list of elements. it can hold elements of any data type, including numbers, strings, objects and even other arrays. Arrays are a type of object in Javascript and have a number of built-in methods for adding, removing, and manipulating elements.
 * 
 *Array is an Sequential Data Structure. so that we can access data Sequential from an array.
 * 
 * We can Store Heterogenous (Different) type of data in arrays in javascript.
 * 
 * We want to store collection of data we use the arrays.
 * 
 *What do we need Arrays in Javascript : 

    - Grouping related data
    - Storing large amount of data
    - Improving performance
    - Ease of use
    - Better Readability.


 */


// first way to create array.
let a = [1,2,3,"sainath",false,null]
console.log(a)

// second way to create array.
// keyword variable_name = new Array(size_array);
// let a1 = new Array();
let a1 = new Array(5);
let a2 = new Array("sainath",21,true)
console.log(a1)
console.log(a2)


// Accessing Items Inside The Array.

// given Array - > [11, 21, 31, 41]
//  Index / pos - > 0   1    2  3     // first element index  : 0 and last eleement index : arr.length - 1

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[5]);
console.log(a[6]);

// Array in javascript are mutable (changable / updatable)

// change the array element value.

a[3] = "tushar";

console.log(a)