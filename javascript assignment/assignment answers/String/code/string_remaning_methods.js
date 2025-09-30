// . indexOf() Practice Questions
// ________________________________________
// Q1. First Occurrence of Character
// Problem:
// Find the first occurrence of 'a' in the string "I am a JavaScript developer" and print its index.
// Sample Input:
// I am a JavaScript developer
// Sample Output:
// First occurrence of 'a' is at index 2

let inputString = "I am a Javascript developer";
let firstOccuranceOfA = inputString.indexOf('a');
console.log(`First Occurrence of 'a' is at index ${firstOccuranceOfA}`);



// ________________________________________
// Q2. Find from a Specific Index
// Problem:
// Find the first occurrence of 'Java' in "I am a JavaScript developer" starting from index 5.
// Sample Input:
// I am a JavaScript developer
// Sample Output:
// Found 'Java' at index 7

let inputString2 =  "I am a Javascript developer";
let firstOccuranceOfJava = inputString2.indexOf('Java');
console.log(`Found 'Java' at index ${firstOccuranceOfJava}`)
// ________________________________________
// Q3. Email Validation
// Problem:
// Check if a given email contains '@' using indexOf() and print "Valid email" or "Invalid email".
// Sample Input:
// sainath@gmail.com
// Sample Output:
// Valid email

let inputString3 = "sainath@gmail.com";
let isValid = inputString3.indexOf('@');
if(isValid === -1){
    console.log("Invalid email");
}else{
    console.log("Valid email");
}

// ________________________________________
// Q4. Second Occurrence of a Letter
// Problem:
// Given a sentence, find the index of the second occurrence of the letter 'o'.
// Sample Input:
// Hello World
// Sample Output:
// Second occurrence of 'o' is at index 7

let inputString4 = "Hello World";
let firstOccuranceOfO = inputString4.indexOf('o');
let secondOccuranceOfO = inputString4.indexOf('o' , firstOccuranceOfO+1);
console.log(`Second occurrence of 'o' is at indext ${secondOccuranceOfO}`)
// ________________________________________
// Q5. Search Word in a Sentence
// Problem:
// Given "apple banana orange", find the index of 'banana' without using .includes().
// If found, print "Found at index X", otherwise "Not found".
// Sample Input:
// apple banana orange
// Sample Output:

// Found at index 6

let inputString5 = "apple banana orange";
let indexOfBanana = inputString5.indexOf('banana');
if(indexOfBanana === -1){
    console.log(`Not Found`);
}else{
    console.log(`Found at index ${indexOfBanana}`)
}

// ________________________________________
// 2. includes() Practice Questions
// ________________________________________
// Q1. Check Word in String
// Problem:
// Check if the string "I love JavaScript" contains "love".
// Sample Input:

// I love JavaScript
// Sample Output:
// Yes, contains 'love'


let inputString6 = "I love Javascript";
let loveIsPresent = inputString6.includes('love');
if(loveIsPresent){
    console.log(`Yes, contains 'love'`);
}else{
    console.log(`No, contains 'love'`);
}




// ________________________________________
// Q2. Search and Respond
// Problem:
// Check if the sentence "Coding is fun" contains the word "boring" and print "Yes" or "No".
// Sample Input:
// Coding is fun
// Sample Output:
// No

let inputString7 = "Coding is fun";
let isIncludeBoring = inputString7.includes('boring');
if(isIncludeBoring){
    console.log("Yes")
}else{
    console.log("No")
}

// ________________________________________
// Q3. Mode Preference
// Problem:
// Given "I like dark mode", check if it contains "dark" or "light" and print the mode.
// Sample Input:
// I like dark mode
// Sample Output:
// User prefers dark mode

let inputString8 = "I like dark mode";
let isIncludeDark = inputString8.includes('dark');
if(isIncludeDark){
    console.log(``)
}
// ________________________________________
// Q4. Check All Vowels
// Problem:
// From "I love to code in JavaScript", check if it contains all vowels (a, e, i, o, u).
// Sample Input:
// I love to code in JavaScript
// Sample Output:
// Contains all vowels


let inputString9 = "I love to code in Javascript";
let vowels = "aeiou";
let countVowelPresent = 0;
for(let char of vowels){
    if(inputString9.toLowerCase().includes(char)){
        countVowelPresent++;
    }
}

if(countVowelPresent === 5){
    console.log("Contains all vowels.")
}else{
    console.log("It not contains all vowels.")
}


// ________________________________________
// Q5. Banned Words Check
// Problem:
// Create a function that checks if a string contains any banned word from ["bad", "ugly", "hate"].
// Sample Input:
// This is a bad idea
// Sample Output:
// Contains banned word: bad

let bannedWords = ["bad","ugly","hate"];
let inputString10 = "This is a bad idea";
 let newWord = "";

for(let char of inputString10){
   
    if(char === " "){
        // console.log(char)
        if(bannedWords.includes(newWord)){
            console.log(`Contains banned word : ${newWord}`)
            break;
        }

        newWord = "";
    }else{
        newWord = newWord + char;
        // console.log(newWord)
    } 
}



// ________________________________________
// 3. substring() Practice Questions
// ________________________________________
// Q1. Extract First Characters
// Problem:
// Extract the first 4 characters of "JavaScript" using substring().
// Sample Input:
// JavaScript
// Sample Output:
// Java
// ________________________________________
// Q2. Extract Last Characters
// Problem:
// Extract the last 5 characters of "Programming" using substring().
// Sample Input:
// Programming
// Sample Output:
// mming
// ________________________________________
// Q3. Extract Specific Word
// Problem:
// From "Frontend Developer", extract the word "Developer".
// Sample Input:
// Frontend Developer
// Sample Output:
// Developer
// ________________________________________
// Q4. Shorten Long Name
// Problem:
// Shorten "AlexanderTheGreat" to "Alexander..." using substring().
// Sample Input:

// AlexanderTheGreat
// Sample Output:
// Alexander...
// ________________________________________
// Q5. First Half of Sentence
// Problem:
// Take a sentence and return only the first half using substring().
// Sample Input:
// Hello JavaScript World
// Sample Output:
// Hello JavaS
// ________________________________________
// 4. toUpperCase() / toLowerCase() Practice Questions
// ________________________________________
// Q1. Convert to Uppercase
// Problem:
// Convert "hello world" to uppercase.
// Sample Input:
// hello world
// Sample Output:
// HELLO WORLD
// ________________________________________
// Q2. Convert to Lowercase
// Problem:
// Convert "HELLO WORLD" to lowercase.
// Sample Input:
// HELLO WORLD
// Sample Output:
// hello world
// ________________________________________
// Q3. Mixed Case Conversion
// Problem:
// Given "JavaScript", convert the first 4 letters to uppercase and the rest to lowercase.
// Sample Input:

// JavaScript
// Sample Output:
// JAVAscript
// ________________________________________
// Q4. Case-Insensitive Comparison
// Problem:
// Make a function that checks if two strings are equal ignoring case sensitivity.
// Sample Input:
// Hello
// hello
// Sample Output:
// Strings are equal
// ________________________________________
// Q5. Title Case Conversion
// Problem:
// Given "i aM leaRNiNg jS", convert it into "I Am Learning Js".
// Sample Input:
// i aM leaRNiNg jS
// Sample Output:
// I Am Learning Js
// ________________________________________
// 5. trim() Practice Questions
// ________________________________________
// Q1. Remove Extra Spaces
// Problem:
// Remove leading and trailing spaces from " Hello " and print the result.
// Sample Input:

//    Hello   
// Sample Output:
// Hello
// ________________________________________
// Q2. Check Length Before and After Trim
// Problem:
// Trim spaces from " JavaScript " and print its length before and after trimming.
// Sample Input:
//     JavaScript   
// Sample Output:
// Before trim: 17
// After trim: 10
// ________________________________________
// Q3. Trim and Extract Word
// Problem:
// Given " Code with me ", remove spaces and extract only "Code".
// Sample Input:

//    Code with me   
// Sample Output:
// Code
// ________________________________________
// Q4. Trim Multiple Strings in Array
// Problem:
// Take an array of strings and trim spaces from each one.
// Sample Input:
//  ["   Apple  ", "  Banana ", " Cherry  "]
// Sample Output:
//  ["Apple", "Banana", "Cherry"]
// ________________________________________
// Q5. Validate Trimmed String
// Problem:
// Given " hello world ", trim spaces, convert to lowercase, and check if it equals "hello world".
// Sample Input:
//      hello world    
// Sample Output:
// Valid: true
// ________________________________________


