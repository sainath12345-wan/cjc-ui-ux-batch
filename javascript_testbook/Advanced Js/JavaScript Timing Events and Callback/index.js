/*

JS Timing Events :

setTimeout() :

 - At specified time intervals, the window object allows code execution.

 - Timing Events are nothing but these time intervals.

 - The two key methods are
        - setTimeout(function, milliseconds)
        - setInterval(function, milliseconds)
    
 - The functions is executed after waiting for certain milliseconds.
    syntax : window.setTimeout(function ,  milliseconds);

 - window prefix can be omitted.

 - The first parameter has the function to be executed.

 - The second parameter has the wait time before execution in milliseconds.

 - Example:

   <button onclick="setTimeout(myFunction, 3000)" >Try it </button>

   <script>
        function myFunction(){
            alert('hello');
        }
    </script>

 - How to stop the execution ?
    
    - To stop the function execution use the clearTimeout().
    - Syntax : window.clearTimeout(timeoutVariable)
    - The window prefix can be omitted.
    - The variable returned from setTimeout() method is used in the clearTimeout() method.

        Example : 
        myVar = setTimeout(function, milliseconds);
        clearTimeout(myVar);

setInterval() : 
 - The functions is executed repeatedly after a given time interval.
 - Syntax : window.setInterval(function , milliseconds);
 - window prefix can be omitted.
 - The first parameter has the function to be executed.
 - The second parameter has the time interval between each execution.
 - Example : 
   <button onclick="setInterval(myFunction , 1000);">Try it </button>

   <script>
    function myFunction(){
        alert('Hello');
    }
   </script>


 - How to stop the execution ?

    - To stop the function execution use the clearInterval().
    - Syntax : window.clearInterval(timerVariable)
    - The window prefix can be omitted.
    - The variable returned from setInterval() method is used in the clearInterval() Method.
    - Example :
      let myVar = setInterval(function, milliseconds);
      clearInterval(myVar);

Function Sequence :
 - The functions in javascript are executed in the Sequence they are called.
    
    Example : 

    function myFirst(){
        myDisplayer("hello");
    }

    function mySecond(){
        myDisplayer("good bye");
    }

    mySecond();
    myFirst();

    (irrespective of order of definition of method our methods are called according to in which order method calls will be done.)

 - It is better to have control over the function execution.

 - To control the Sequence of function execution, we go for javascript callbacks.

Javascript CallBack : 

 - when a function is passed as an argument to another function. it is called a callback.

 - callback functions are used in the case of asynchronous function. where one function waits for another function.

 -Example :
  
 function myDisplayer(sum){
    document.getElementById('demo').innerHTML = some;
 }

 function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
 }

 myCalculator(5,5,myDisplayer)

 Example 2: 

 function main(next){
    console.log("Main is called");
    next(10);
 }


 function next1(count){
    console.log("Next1 is called " + count);
 }

 function next2(count){
    console.log("Next2 is called " + count);
 }

 main(next1);
 main(next2);

*/


var counter = 0;

function count(){
    console.log(counter++);
    if(counter > 6){
        clearInterval(timer)
    }
}

// setTimeout(count, 3000)

console.log('Set timeout is started'); 

// to setTimeout
// let timer = setTimeout(count, 5000);

// to stop timeout
// clearTimeout(timer)


// to setInterval ---> make repetative.
// let timer = setInterval(count,1000);

// to stop setInterval
// clearInterval(timer);
let timer;
timer = setInterval(count,1000);





