/**
 * Concatenation
 * Template Strings / Template Literals.
 */

let userName = "prakash";
let age = 99;


//My name is Prakash and I am 99 years old.


// +  is used to concate two or more strings.
let message = "My Name is " + userName + " and I am " + age + " years old.";
console.log(message)

// template literals / template string are used backtics to concate two or more string.
let message1 = `My Name is ${userName} and I am ${age} years old.`;
console.log(message1)


let multipleLineText = `my name is ${userName} and
I am ${age} years old.
I Love to code 
I love to eat
I love to sing
`;
console.log(multipleLineText)


