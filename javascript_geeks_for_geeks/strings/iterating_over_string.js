/*

Iterating Over a String : 

When Iterating over a string, you often need to perform taks such as searching for a character, counting occurrences, or manipulating individual characters.




*/


// Exmaple 1 : printing Each Character.
// Here We print each character of a string on a new line.
// In this example, the for loop iterates over each character of the string message using its index.
let message = "I am learning Javascript";

for(let i=0; i<message.length ; i++){
    console.log(message[i])
}

// Example 2 : Breaking the Loop on a specific character.
// Here we want to stop iterating when we encounter the character 'n'.
// This loop prints each character until it encounters 'n', at which point it breaks out of the loop.


for(let i=0 ; i<message.length ; i++){
    if(message[i] === 'n'){
        break;
    }
    console.log(message[i])
}

// Example 3 : Counting Occurrences of a character.
// Here We count how many times the character 'a' appears in the string.
// This loop increments the count variable each time it encounters 'a'.

let count = 0;

for(let i = 0; i<message.length ; i++){
    if(message[i] === 'a'){
        count++;
    }
}

console.log(`The Character 'a' appears ${count} times.`)

//Example 4 : Using index to print specific characters.
// Here we use the index to print specific characters. We will print the character at index 1,2, and 3.
console.log(message[0]); //I
console.log(message[1]); // 
console.log(message[2]); //a
console.log(message[3]); //m
console.log(message[4]); //
console.log(message[5]); //l
console.log(message[6]); //e
console.log(message[7]); //a

// The for...of loop is a cleaner and more readable way to iterate over the elements of an iterable object, such as a string.
// Example 5 : Using for...of to print Each Character.
// This loop automatically iterates over each character in the string.
for(let char of message){
    console.log(char)
}


/*

Practical Use Case

Use Case 1 : Finding the index of a character.
            
            We want to find the position of a character within a string.

            This loop prints the index each time it encounters 'a'.

            Example : 
            for(let i = 0 ; i<message.length ; i++){
                if(message[i] === 'a'){
                    console.log(`Index Of a : ${i}`);
                }
            }
Use Case 2 : Filtering Characters 
            
            We want to create a new string containing only the vowels from the original string.

            This code creates a new stirng with only the vowels from the original string.
             
*/

let vowels = '';

const vowelSet = new Set(['a','e','i','o','u','A','E','I','O','U']);

for(let char of message){
    if(vowelSet.has(char)){
        vowels += char;
    }
}


console.log(vowels)