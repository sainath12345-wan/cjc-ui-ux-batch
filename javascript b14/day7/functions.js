console.log(`******************** Parametrized function ********************`);

function addition(a,b){
    return a + b;
}

console.log(`addition function - ${addition(40,20)}`)
console.log(`addition function - ${addition(10,30)}`)

function multiplication(x,y){
    return x * y;
}

console.log(`multiplication function - ${multiplication(10,3)}`)
console.log(`multiplication function - ${multiplication(10,10)}`)


function substraction(a,b){
    return a - b;
}

console.log(`substraction function - ${substraction(50,30)}`)
console.log(`substraction function - ${substraction(100,50)}`)

console.log(`********************* Non-Parametrized Function *****************`);

function callMyName(){
    console.log(`I am Sainath Wankhede`)
}

callMyName();


function addition1(){
    let a = 20;
    let b = 30;
    let result = a + b;
    console.log(`addition function - ${result}`);
}

addition1();


console.log(`******************************** Nameless function *************************************`)

const msg = function(){
    console.log(`I am Nameless Function`)
}
msg()

const multiply = function (a,b){
    return a * b;
}

console.log(`Multiply Function  -  ${multiply(25,2)}`)

const fullname = function(){
    let firstname = 'Sainath';
    let lastname = ' Wankhede';
    let myName = firstname + lastname;
    console.log(myName);
}

fullname();

console.log(`******************** Arrow Function *******************`);

// simple function(pure javascript function - parametrized function)

function add(a,b){
    let result = a + b;
    console.log(`Addition Function : ${a} + ${b} = ${result}`)
}

add(50,25);

// arrow function

const sum = (a,b)=>{
    let result = a + b;
    console.log(`Sum function using arrow function : ${a} + ${b} = ${result}`)
}

sum(10,20);

// arrow function can we write in single line as follow as.

const addition2 = (a,b) => a + b;
console.log(`Addition function : ${addition2(30,50)}`)


const substraction1 = (m,n) => m - n;
console.log(`substraction function : ${substraction1(100,50)}`);

// simple function

function myName(){
    console.log(`Hello , I am Sainath Wankhede.`);
}

myName();

// Arrow Function.

const fullName = ()=>{
    console.log(`Hello, I am sainath Wankhede.`)
}

fullName();

console.log(`********************* Variable Hoisting **************`)

// Variable Hoisting (only var will be hoisted)

console.log(a); // undefined
var a = 25
console.log(a); //25

console.log(`******************** Function Hoisting ***************`)

// function Hoisting (only simple function will be hoisted , arrow function is not hoisted)

// In function hoisting the we can call the function before function declaration.


myName(); // my name is sainath wankhede.

function myName(){
    console.log(`my name is sainath wankhede.`)
}