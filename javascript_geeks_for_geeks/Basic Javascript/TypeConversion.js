/**
 * 
 * Type Conversion
 * to String..
 * to Number..
 * to Boolean..
 * 
 */

const a = "3";
const b = "10";

console.log(`value of a = ${a}
value of b = ${b}
addition of ${a} + ${b} = ${a+b}`);

// here we convert string to number.

console.log("\nstring to number conversion")
console.log(`value of a = ${Number(a)}
value of b = ${Number(b) }
addition of ${Number(a)} + ${Number(b)} = ${Number(a) + Number(b)}`)

const c = Number(a);
const d = Number(b);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

console.log(`\nconversion of number to string`)
const e = 3;
const f = 10;

const g = String(e);
const h = String(f);

console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)

// conversion of any data type to boolean is done according to truthy and falsy value

/*
Falsy Values:

    Falsy values are those that are considered false when evaluated in a Boolean context. There are a specific, limited set of falsy values in JavaScript: 
    
    false: The Boolean primitive false.
    0: The number zero.
    -0: The negative number zero.
    0n: The BigInt zero.
    "": An empty string.
    null: Represents the intentional absence of any object value.
    undefined: Represents a variable that has been declared but not yet assigned a value, or a non-existent property.
    NaN: "Not-a-Number," a special numeric value representing an undefined or unrepresentable numerical result.
    document.all: (Legacy, non-standard, and generally discouraged) This object, when present in browsers, is also falsy.
    
Truthy Values:

    Truthy values are all values that are not falsy. Essentially, any value that is not explicitly defined as falsy will be considered true when evaluated in a Boolean context. This includes:

    true: The Boolean primitive true.
    Any non-zero number: 1, -10, 3.14, etc.
    Any non-empty string: "hello", "false", "0", etc.
    Objects: Including empty objects ({}) and arrays ([]).
    Functions.
    Dates.
    Symbols.

*/

const k = "king"

console.log(Boolean(k)); // true

const l = 0;

console.log(Boolean(l)); //false