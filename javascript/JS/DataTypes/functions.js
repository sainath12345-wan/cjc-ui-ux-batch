// Non-parametrized functions

function add(){
    let a = 10;
    let b = 20;
    let result = a+b;
    console.log(result)
}

add() //30


//  also example of 
let a1 = 20;

function square(){
    // let a1 = 10
    let square = a1 * a1;
    console.log(square)
}

square()
square()
square()
square()


function sum(a,b,c){
    return a+b+c;
}

console.log(sum(10,20,30)) //60
console.log(sum(10,10,10)) //30


function sqr(x){
    console.log(x * x)
}

sqr(5) //25
sqr(25)  //625
sqr(5,2) //25 (here only first arument is used becuase the function declaration have only one parameter.)


function myFullName(fname, mname, lname){
    return `My Name is ${fname} ${mname} ${lname}`
}

console.log(myFullName('Rohit' , 'Gurunath' , 'sharma'));
console.log(myFullName('sainath' ,'dasa','wankhede'))

// Arrow Function

const addition = (a,b) => {
    return a+b
}


console.log(addition(10,20))

// arrow function with single line
const multiply = (a,b) => a*b
console.log(multiply(30,5))

const cube = (a) => a*a*a
console.log(cube(3))

//callback function

setTimeout((a,b)=>{
    return console.log(a*b)
},5000,10,20)

setTimeout(()=>{
    console.log("Hello Good Morning Everyone.")
},3000)

nums = [10,20,30,40,50]

nums.forEach((a)=>{
    console.log(a)
})

nums.forEach((a)=>{
    console.log(`${a} - callback`)
})

// nameless function or anonymous function
nums.forEach(function (a){
    console.log(`${a} - nameless function`)
})




