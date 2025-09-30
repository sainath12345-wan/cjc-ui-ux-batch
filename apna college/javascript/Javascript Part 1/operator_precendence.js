// Operator Precendence 

/**

  Operator Precendence (priority)

    Math Operation Rule: 
      BO - bracket opens 
      D - Division 
      M - Multiplication 
      A - Addition 
      S - Substraction

    This is the general order of solving an expression.

      () 
      ** ---> (mutliple powers) right to left
      *,/,% ---> left to right
      +,- ---> Left to right
 */

let result =  (5+3) / 2 + 1
console.log("Result : " + result) //Result : 5


// some more example 

let res1 = (2+1) * 3
let res2 = 3/1+2**2
let res3 = 4+1*6/2

console.log(res1) //9
console.log(res2) //7
console.log(res3) //7