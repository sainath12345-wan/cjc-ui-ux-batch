// Q1. Alphabetical Sorting
// Problem: Sort the given array of fruits in alphabetical order.
// Input: ["Banana", "Apple", "Mango", "Cherry"]
// Output: ["Apple", "Banana", "Cherry", "Mango"]



// let fruits = [];

// let len = prompt('Enter The Number Of Fruits : ');

// for(let i=0; i<len; i++){
//     let y = prompt('Enter Fruit Name : ');
//     fruits[i] = y;
// }

// document.writeln(`Before Sorted Fruits Array : ${fruits} <br><br>`)

// let sortedFruitsInAlphOrder = fruits.sort((a,b)=>a.localeCompare(b));
// document.writeln("After Sorted Fruits Array : " + sortedFruitsInAlphOrder)



// Q2. Default Sort of Numbers
// Problem: Apply sort() directly on a number array and observe the result.
// Input: [100, 30, 4, 21, 1]
// Output: [1, 100, 21, 30, 4]
// (Explain why this happens due to string conversion)


// let input = [100,30,4,21,1]
// document.writeln(`The Array Before the Sorted : ${input} <br><br>`)
// let output = input.sort();
// document.writeln(`The Array After the Sorted : ${output}`)

// ❓ Why this happens:
// In JavaScript, when Array.prototype.sort() is called without a compare function, it converts the elements to strings and sorts them lexicographically (i.e., based on Unicode code point values).

// So the array:


// [100, 30, 4, 21, 1]
// is internally converted to:


// ["100", "30", "4", "21", "1"]
// Then it is sorted as strings:

// "1" comes before "100" because "1" < "1" followed by any other digit.

// "100" < "21" because "1" < "2".

// "21" < "30" because "2" < "3".

// "30" < "4" because "3" < "4".

// Thus, the final sorted string array becomes:


// ["1", "100", "21", "30", "4"]

// And is returned as:

// [1, 100, 21, 30, 4]


// Q3. Sort Names Ignoring Case
// Problem: Sort names alphabetically, ignoring case sensitivity.
// Input: ["zebra", "Apple", "apple", "Mango"]
// Output: ["Apple", "Mango", "apple", "zebra"]

// let input = ['Zebra','Apple','apple','Mango'];
// document.writeln(`Before Sorting Array : ${input} <br><br>`)
// let output = input.sort()
// document.writeln(`After Sorting Array : ${output}`)

// If We want to sort string array with ignoring case sesitivity then we use sort() method without call back.

// Q4. Ascending Order of Marks
// Problem: Sort student marks in ascending order.
// Input: [45, 87, 32, 67, 91, 53]
// Output: [32, 45, 53, 67, 87, 91]

// let input = [45,87,32,67,91,53]
// document.writeln(`The Student Marks Before Sorting : ${input}<br><br>`)
// let output = input.sort((a,b)=> a-b);
// document.writeln(`The Students Marks after Sorting : ${output}`)


// Q5. Sort with Duplicates
// Problem: Sort an array containing duplicate numbers.
// Input: [4, 5, 2, 4, 1, 3]
// Output: [1, 2, 3, 4, 4, 5]

// let input = [4,5,2,4,1,3]
// document.writeln(`The Array With Duplicates Before Sorting : ${input} <br><br><br>`)
// let output = input.sort();
// document.writeln(`The Array With Duplicates After Sorting : ${output}`)

// Q6. Ascending Order with Negatives
// Problem: Sort an array with both negative and positive numbers.
// Input: [3, -1, -7, 4, 2, 0]
// Output: [-7, -1, 0, 2, 3, 4]

// let input = [3,-1,-7,4,2,0]
// document.writeln(`The Array With Negative Number Before Sorting : ${input} <br><br><br>`)
// let output = input.sort((a,b)=>a-b);
// document.writeln(`The Array With Negative Numbers After the Sorting : ${output}`)

// Q7. Reverse Days of the Week
// Problem: Reverse the array of weekdays.
// Input: ["Mon", "Tue", "Wed", "Thu", "Fri"]
// Output: ["Fri", "Thu", "Wed", "Tue", "Mon"]


// let input = ['Mon','Tue','Wed','Thu','Fri']
// document.writeln(`The Array of WeekDays Before Reverse ${input} <br><br>`)
// let output =  input.reverse();
// document.writeln(`The Array of WeekDays After Reverse : ${output}`)

// Q8. Reverse Sorted Numbers
// Problem: Sort numbers in descending order using sort() + reverse().
// Input: [10, 50, 30, 20, 40]
// Output: [50, 40, 30, 20, 10]

// let input = [10, 50, 30, 20, 40]
// document.writeln(`The Array With Number Before Reverse Sorted : ${input} <br><br><br>`)
// let output = input.sort().reverse();
// document.writeln(`The Array With Number After Reverse Sorted : ${output}`)

// Q9. Reverse Names
// Problem: Reverse the list of names entered by user.
// Input: ["Ravi", "Sita", "Aman", "Neha"]
// Output: ["Neha", "Aman", "Sita", "Ravi"]

// let input = ['Ravi' , 'Sita', 'Aman', 'Neha'];
// document.writeln(`The Array Before the reverse operation : ${input} <br><br><br>`)
// let output = input.reverse();
// document.writeln(`The Array After the reverse operation : ${output}`)


Q10. New Sorted Copy
Problem: Get a sorted version of the original numbers array.
Input: let nums = [5, 3, 1, 4, 2];
Output: Sorted Copy: [1, 2, 3, 4, 5], Original: [5, 3, 1, 4, 2]



