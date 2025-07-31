/*

Creating an Array :

1) Javascript Array Literal

var student = ["Ram","sham","sainath","tushar"]
console.log(student)

// Access Element From Array Using index
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[3]);

2)Javascript array directly (new keyword)

var student = new Array();

student[0] = "Ram";
student[1] = "sham";
student[2] = "sainath";
student[3] = "tushar";

console.log(student)

console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[3]);
console.log(student[4]); // undefined
// Array's index range is from 0 until array length-1 (if array length = 10 then index starts with 0 and end with 9)

3) Javascript array constructor (new keyword)

var student = new Array("Ram" , "Sham" , "Sainath" , "Tushar");
console.log(student)

console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[3]);

#) Accessing Array Element

let car = ["maruti","BMW" ,"Swift" , "fortuner"];

console.log(car[0])
console.log(car[1])
console.log(car[2])
console.log(car[3])

Access The Full Array by referring to the array name

let vehicle = car;
console.log(vehicle)

###########################################################

Array Methods & Properties : 

1) Length of an Array : 

const fruits = ["Banana" , "Orange" , "Apple" , "Mango"];
let length = fruits.length;
console.log(length) //4

2) push()

const fruits = ["Banana" , "Orange" , "Apple" , "Mango"];

fruits.push("kiwi");
console.log(fruits)  //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

3) pop()

fruits.pop();
console.log(fruits)  //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

4) unshift()

fruits.unshift("kiwi");
console.log(fruits)  //[ 'kiwi', 'Banana', 'Orange', 'Apple', 'Mango' ]

5) shift()

fruits.shift();
console.log(fruits) //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

6) concat()

let fruits1 = ["Pineapple" , "Grapes" , "Watermelon"];
let newFruits = fruits.concat(fruits1);
console.log(newFruits); //[ 'Banana','Orange','Apple','Mango','Pineapple','Grapes','Watermelon' ]

7) sort()

let sortedFruits = newFruits.sort();
console.log(sortedFruits) //[ 'Apple', 'Banana', 'Grapes', 'Mango', 'Orange', 'Pineapple', 'Watermelon' ]

8) isArray()

let fruit = "Mango";
console.log(Array.isArray(fruit)) // false because fruit is not a array it is string.
console.log(Array.isArray(sortedFruits)) // true because sortedFruits is an array.

9) indexOf()

sortedFruits.push("Banana");
let bananaIndex = sortedFruits.indexOf("Banana");
console.log(bananaIndex); //1

########################################################################################

#) Looping Array Elements 

1) By using for loop

let arr = ["Apple","Orange","Pear"];

for(let i = 0 ; i < arr.length ; i++){
     console.log(arr[i]);
}
        
// Apple
// Orange
// Pear

2) By using forEach()

let fruits = ["Apple","Orange","Pear"];

for(let fruit of fruits){
    console.log(fruit)
}

// Apple
// Orange
// Pear

*/
    
    

   