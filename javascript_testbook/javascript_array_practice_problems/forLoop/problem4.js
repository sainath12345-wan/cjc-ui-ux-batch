// Count the number of even numbers.

const arr = [21,2,22,31,54,56,244,554,754,345,544,3];

let evenCount = 0;

arr.forEach(function(element){
    if(element%2 === 0){
        evenCount++;
    }
})

console.log("Total Even Number In " + arr + " are  : " + evenCount)