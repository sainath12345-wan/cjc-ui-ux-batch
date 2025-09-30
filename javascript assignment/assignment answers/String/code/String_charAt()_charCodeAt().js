// Q1. Get Character at Given Index
// Problem:
// Given a string "JavaScript", take an index from the user and print the character at that index using charAt().

let index = 5;
let str = "JavaScript";
let charAtGivenIndex = str.charAt(5);
console.log(charAtGivenIndex)

// Q2. Get ASCII Code of a Character
// Problem:
// Given a string "Developer", take an index from the user and print the ASCII code of the character at that index using charCodeAt().

let inputString = "Developer";
let givenIndex = 5;
let asciiCodeAtGivenIndex = inputString.charCodeAt(givenIndex);
console.log(asciiCodeAtGivenIndex);

// Q3. First Character and Its ASCII Code
// Problem:
// Given a string, print the first character and its ASCII code.

let inputString1 = "Developer";
let firstElement = inputString1.charAt(0);
let asciiCodeAtFirstElement = inputString1.charAt(0);
console.log(asciiCodeAtFirstElement)

// Q4. Last Character and Its ASCII Code
// Problem:
// Given a string, print the last character and its ASCII code.

let inputString2 = "Developer";
let asciiCodeAtLastElement = inputString2.charAt(inputString2.length -1);
console.log(asciiCodeAtLastElement)


// Q5. Print All Characters with ASCII Codes
// Problem:
// Given a string "Code", print each character with its corresponding ASCII code using a loop.

let inputString3 = "Code";
for(let i = 0 ; i < inputString3.length ; i++){
    let asciiCodeOfChar = inputString3.charCodeAt(i);
    console.log(`The ASCII code of ${inputString3.charAt(i) } is ${inputString3.charCodeAt(i)}`)
}

// Sample Output:

// mathematica

// C - 67  
// o - 111  
// d - 100  
// e - 101  


// Q6. Find Character by ASCII Code
// Problem:
// Given an ASCII code entered by the user, print the corresponding character using String.fromCharCode().

let givenAsciiCode = 101;
let characterCorrespondingAsciiCode = String.fromCharCode(givenAsciiCode);
console.log(characterCorrespondingAsciiCode)

// Q7. Shift Each Character by +1 (Encoding)
// Problem:
// Given a string "apple", encode it by shifting each character’s ASCII code by +1 and print the encoded string.
// Example: "apple" → "bqqmf"

let givenString = "apple";
let encodedString = "";
for(let i=0 ; i < givenString.length ; i++){
    let asciiCodeAtIndex = givenString.charCodeAt(i); 
    encodedString = encodedString + String.fromCharCode(++asciiCodeAtIndex);
}
console.log("original String : " + givenString);
console.log("encoded String : " + encodedString);

// Q8. Decode a String (Shift -1)
// Problem:
// Given an encoded string "bqqmf", decode it by shifting each character’s ASCII code by -1 to get the original string.
// Example: "bqqmf" → "apple"

let givenString1 = "bqqmf";
let encodedString1 = "";
for(let i=0 ; i < givenString1.length ; i++){
    let asciiCodeAtIndex = givenString1.charCodeAt(i); 
    encodedString1 = encodedString1 + String.fromCharCode(--asciiCodeAtIndex);
}
console.log("original String : " + givenString1);
console.log("encoded String : " + encodedString1);

// Q9. Convert String to ASCII Array
// Problem:
// Given a string "Hello", create an array that contains the ASCII codes of all characters.
// Example: "Hello" → [72, 101, 108, 108, 111]

let givenString2 = "Hello";
let asciiArray = [];

for(let i = 0 ; i < givenString2.length ; i++){
    let asciiValueOfEachElement = givenString2.charCodeAt(i);
    asciiArray[i] = asciiValueOfEachElement;
}

console.log(asciiArray)

// Q10. Caesar Cipher (Shift by n)
// Problem:
// Implement a Caesar cipher function where the user enters a string and a shift value n. Shift all characters in the string by n positions in ASCII code and print the result.
// Example: "abc", shift 2 → "cde"

let givenString3 = "abc";
let encodedString3 = "";
for(let i=0 ; i < givenString3.length ; i++){
    let asciiCodeAtIndex = givenString3.charCodeAt(i); 
    encodedString3 = encodedString3 + String.fromCharCode(asciiCodeAtIndex+2);
}
console.log("original String : " + givenString3);
console.log("encoded String : " + encodedString3);







