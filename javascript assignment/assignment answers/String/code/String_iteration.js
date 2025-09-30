// Q1. Print Each Character
// Problem:
// Write a program to print each character of a given string on a new line using a for loop.
// Sample Input:
// Hello
// Sample Output:
// H
// e
// l
// l
// o


// let input = "Hello";

// console.log(`Sample Output : `);
// for(let char of input){
//     console.log(char);
// }


// Q2. Stop at Specific Character
// Problem:
// Given a string, print characters one by one until the letter 'n' is encountered, then stop the loop.
// Sample Input:

// Learning JavaScript
// Sample Output:
// L
// e
// a
// r

// let sampleInput = "Learning Javascript";
// console.log(`Sample Output : `);
// for(let char of sampleInput){
//     if(char === 'n'){
//         break;
//     }
//     console.log(char);
// }


// Q3. Count Character Occurrences
// Problem:
// Count how many times the letter 'a' appears in a string.
// Sample Input:
// Banana is amazing
// Sample Output:
// The character 'a' appears 6 times.


// let sampleInput = "Banana is amazing";
// let countA = 0;
// console.log(`Sample Output : `)
// for(let char of sampleInput){
//     if(char === 'a'){
//         countA++;
//     }
// }

// console.log(`The character 'a' appears ${countA} times.`);


// Q4. Find Index of Character
// Problem:
// Find and print the index positions of all occurrences of 'e' in a given string.
// Sample Input:
// Elephant never forgets
// Sample Output:
// Index of 'e': 0
// Index of 'e': 2
// Index of 'e': 8
// Index of 'e': 11
// Index of 'e': 15

// let sampleInput = "Elephant never forgets";

// console.log(`Sample Output : `);
// for(let i = 0 ; i < sampleInput.length ; i++){
//     if(sampleInput.toLowerCase().charAt(i) === 'e'){
//         console.log(`Index of 'e' : ${i}`);
//     }
// }



// Q5. Print Only Vowels
// Problem:
// From the given string, print only the vowels (a, e, i, o, u) using a loop.
// Sample Input:
// Beautiful Day
// Sample Output:
// e
// a
// u
// i
// u
// a

// let sampleInput = "Beautiful Day";
// let vowels = "aeiouAEIOU";

// console.log(`Sample Output : `)
// for(let char of sampleInput){
//     if(vowels.includes(char)){
//         console.log(char)
//     }
// }


// Q6. Reverse a String Using Iteration
// Problem:
// Reverse the given string using a loop (without using .reverse()).
// Sample Input:
// Iteration
// Sample Output:
// noitaretI


// let sampleInput = "Iteration";
// let reversedString = "";
// console.log(`Sample Output : `);
// for(let i = sampleInput.length - 1 ; i >= 0 ; i--){
//     reversedString = reversedString + sampleInput.charAt(i);
// }

// console.log(reversedString);


// Q7. Remove Spaces from a String
// Problem:
// From the given string, create a new string without spaces using a loop.
// Sample Input:
// JavaScript is fun
// Sample Output:
// JavaScriptisfun

// let sampleInput = "JavaScript is fun";
// let sampleOutput = "";
// console.log(`Sample Output : `);
// for(let char of sampleInput){
//     if(char === " "){
//         continue;
//     }
//     sampleOutput = sampleOutput + char;
// }

// console.log(sampleOutput)

// Q8. Replace a Character Using Iteration
// Problem:
// From the given string, replace every 'm' with '*' using a loop (without using .replace()).
// Sample Input:
// Programming
// Sample Output:

// Progra**ing

// let sampleInput = "programming";
// let output = "";
// console.log(`Sample Output : `)
// for(let i = 0 ; i < sampleInput.length ; i++){
//     if(sampleInput.charAt(i) === 'm'){
//         output = output + '*';
//     }else{
//         output = output + sampleInput.charAt(i);
//     }
// }

// console.log(output)

// Q9. Count Uppercase and Lowercase Letters
// Problem:
// Count the number of uppercase and lowercase letters in a given string.
// Sample Input:
// Hello World!
// Sample Output:
// Uppercase letters: 2
// Lowercase letters: 8

// let sampleInput = "Hello World!";
// let ucount = 0;
// let lcount = 0;
// console.log(`Sample Output : `);
// for(let char of sampleInput){
//     let charAscii = char.charCodeAt();
//     console.log(charAscii)
//     if((charAscii >= 97) && (charAscii <= 122)){
//         lcount++;
//     }else if((charAscii >= 65) && (charAscii <= 90)){
//         ucount++;
//     }else{

//     }
// }

// console.log(`Uppercase letters :  ${ucount}`)
// console.log(`lowercase letters :  ${lcount}`)

// Q10. Check Palindrome Using Iteration
// Problem:
// Check if the given string is a palindrome by manually comparing characters from both ends (without .reverse()).
// Sample Input 1:
// madam
// Sample Output 1:
// Yes, it's a palindrome.
// Sample Input 2:
// hello
// Sample Output 2:
// No, it's not a palindrome.

// let input = "madam";
// let inputReverse = "";
// for(let i = input.length-1 ; i >= 0 ; i--){
//     inputReverse = inputReverse + input.charAt(i);
// }
// if(inputReverse === input){
//     console.log(`Yes, It's a palindrome.`);
// }else{
//     console.log(`No, It's not a palindrome.`)
// }
