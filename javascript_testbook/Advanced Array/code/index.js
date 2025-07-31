/*

Multi-Dimensional Array : 

#) Create a Multi-Dimensional Array. 

var student1 = ['sainath wankhed' , 'V' , 80 , 90 , 'pass']
var student2 = ['tushar mirase' , 'VI' , 60 , 80 , 'fail']
var student3 = ['shubham patil' , 'VII' , 50 , 70 , 'pass']

var student_info = [student1 , student2 , student3];

console.log(student_info)

// [
//   [ 'sainath wankhed', 'V', 80, 90, 'pass' ],
//   [ 'tushar mirase', 'VI', 60, 80, 'fail' ],
//   [ 'shubham patil', 'VII', 50, 70, 'pass' ]
// ]

#) Accessing Multi-Dimensional Array Elements :

1) Simple index-based notation


var student1 = ['sainath wankhed' , 'V' , 80 , 90 , 'pass']
var student2 = ['tushar mirase' , 'VI' , 60 , 80 , 'fail']
var student3 = ['shubham patil' , 'VII' , 50 , 70 , 'pass']

var student_info = [student1 , student2 , student3];

console.log("first row third element : " + student_info [0][2]); //first row third element : 80
console.log("second row fourth element : " + student_info [0][3]); //second row fourth element : 90
console.log("third row first element : " + student_info [2][0]); //third row first element : shubham patil

2) For Many Iterations

var student1 = ['sainath wankhed' , 'V' , 80 , 90 , 'pass']
var student2 = ['tushar mirase' , 'VI' , 60 , 80 , 'fail']
var student3 = ['shubham patil' , 'VII' , 50 , 70 , 'pass']

var student_info = [student1 , student2 , student3];


//This loop is for outer array
for(var i=0 , l1 = student_info.length; i < l1 ; i++){
    
// This loop is for inner arrays
for(var j=0 , l2 = student_info[i].length ; j < l2 ; j++){
    
//Accessing Each element of inner-array
document.writeln(student_info[i][j] + " ");
// console.log(student_info [i] [j] + " ")
}
document.writeln("</br>")
    // console.log("\n")
}

for(let i = 0 ; i < student_info.length ; i++){
    for(let j = 0 ; j < student_info[i].length ; j++){
        console.log(student_info[i][j]);
    }
    console.log("***************************************")
}

################################ Adding element in multidimensional Array #####################################


#) Adding Elements To The Inner Array

var student1 = ['sainath wankhed' , 'V' , 80 , 90 , 'pass']
var student2 = ['tushar mirase' , 'VI' , 60 , 80 , 'fail']
var student3 = ['shubham patil' , 'VII' , 50 , 70 , 'pass']

var student_info = [student1 , student2 , student3];


// 1) Square Bracket Notation 

// adding element in the second row at index 5

student_info[1][5] = "this is a note for parents";

console.log(student_info)

// 2) push() Method 

// we can use push method is also to add element in multidimensional array

student_info[2].push("this is a note for parents");
console.log(student_info)




2) Adding elements to the outer array

var student1 = ['sainath wankhed' , 'V' , 80 , 90 , 'pass']
var student2 = ['tushar mirase' , 'VI' , 60 , 80 , 'pass']
var student3 = ['shubham patil' , 'VII' , 50 , 70 , 'fail']

var student_info = [student1 , student2 , student3];

student_info.push(["sanket wattamwar" , 'VIII' , 90 , 90 , 'pass']);

console.log(student_info)

################################### Removing Elements in Multi Dimnesional Array ##############

Removing Elements in Multi Dimensional Array.

1) Remove From The inner Array

var student1 = ['sainath wankhed' , 'V' , 80 , 90 , 'pass']
var student2 = ['tushar mirase' , 'VI' , 60 , 80 , 'pass']
var student3 = ['shubham patil' , 'VII' , 50 , 70 , 'fail']

var student_info = [student1 , student2 , student3];

// We want to remove the last element of 2nd row

student_info[1].pop();
console.log(student_info)

// [
//     [ 'sainath wankhed', 'V', 80, 90, 'pass' ],
//     [ 'tushar mirase', 'VI', 60, 80 ],
//     [ 'shubham patil', 'VII', 50, 70, 'fail' ]
// ]

2) Remove From The Outer Array

var student1 = ['sainath wankhed' , 'V' , 80 , 90 , 'pass']
var student2 = ['tushar mirase' , 'VI' , 60 , 80 , 'pass']
var student3 = ['shubham patil' , 'VII' , 50 , 70 , 'fail']

var student_info = [student1 , student2 , student3];

// remove last element from the outer array.

student_info.pop();

console.log(student_info);

// [
//     [ 'sainath wankhed', 'V', 80, 90, 'pass' ],
//     [ 'tushar mirase', 'VI', 60, 80, 'pass' ]
// ]

*/

/*

################################################## Referential Array ##############################################################

# ) Array as Objects 


let student = new Array();

student['Nitesh'] = 'VI';

console.log(student) // [ Nitesh: 'VI' ]
console.log(student.Nitesh) // VI

//


*/


myArray = [];

myArray[0] = Date.now;
myArray[1] = function(){console.log("inside function")}
car = {
    name : "Audi",
    year : "2020"
}
myArray[2] = car;

console.log(myArray)

// [
//     [Function: now],
//     [Function (anonymous)],
//     { name: 'Audi', year: '2020' }
// ]

myArray[1](); //inside function
console.log(myArray[0]()) //1745744724893
console.log(myArray[2]) //{ name: 'Audi', year: '2020' }
