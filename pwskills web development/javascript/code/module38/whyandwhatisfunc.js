function greet(){
    console.log("Hi there");
    console.log("how are you");
}

greet();

function sqr(x){ //x --> parameter
    console.log(x*x);
    return x*x;
}

let a = sqr(8); //8 --> arguments

console.log(a)