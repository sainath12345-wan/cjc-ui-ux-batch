// Hoisting is Javascripts default behaviour of moving declarations to the top of the current scope.
// hoisting applies to variable declaration and to function declaration.
// becuase of this , javascipt functions can be called before they are declared.


// variable Hoisting

// console.log(x) //undefined
console.log(x)
var x = 10;


// console.log(y) ReferenceError: Cannot access 'y' before initialization
// let y;


// function hoisting

// normal function are hoisted 
console.log(add(10,20)) //30

function add(a,b){
    return a + b;
}

// arrow functions are not hoisted.
console.log(result(1,2))//ReferenceError: Cannot access 'result' before initialization

const result =  (a,b) => { 
    return a+b;
}

