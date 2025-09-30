/**
 * 
 * ECMA Script 6  Feature : Spread Operator.
 * 
 * it is used with arrays or objects 
 * it is used to combine two or more arrays or objects in together.
 * 
 */


const num1 = [1,2,3,4]
const num2 = [5,6,7,8,9]

const joinedArray = num1.concat(num2) // normal way (without spread operator.)
console.log(joinedArray)

//sperad operator also used with strings.
const myName = "Anurag"

//spread operator used by ... (triplet of dots)
const joinedArrayUsingSpread = [...num1,...num2 , ...myName]
console.log(joinedArrayUsingSpread)

//spread operator with object

const user = {
    name : 'sainath',
    age : 22,
}

