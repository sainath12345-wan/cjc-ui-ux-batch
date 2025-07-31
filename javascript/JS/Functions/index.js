// function addition(a,b){
//     console.log(a+b);
// }

// addition(10,20 );
// addition(10.20,30.10);
// addition("sainath " , "wankhede");
// addition(true,true);


// function print10numbers(){
//     for(let i = 1 ; i <= 10 ; i++){
//         console.log(i);
//     }
// }

// console.log(print10numbers)

let student = {
    name : "sainath",
    age : 19
}

let employee = {
    name : "tushar",
    age : 20
}

function printInfo(){
    console.log(this.name + " " + this.age);
}

let printInfo_student = printInfo.bind(student);
let printInfo_employee = printInfo.bind(employee);

printInfo_student();
printInfo_employee();