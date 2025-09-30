/**
 * ASYNC JS 
 * 
 * Javascript : 
 *  - Single threaded.
 *  - Synchronous language.
 * 
 * By Using Asynchrounous Javascript we can add delay , call and api and get data from api and do lot of many things. all this things are not part of js it is handled by browser.
 * 
 * - what is meant single threaded language ? 
 *   Single Threaded means execution of one thing done at a time (not execute multiple things at a time).
 * 
 *   example if make two function name as  func a and func b then if we call the func a first and then func b then first func a excute compelety and then only execution of func b starts. but according to single threaded both functions are not executed at a time or parallely.
 * 
 *  - what is meant Synchronous language ?
 *   Synchronous language means it executes (line by line) or (one by one).
 *   
 *    example if make two function name as  func a and func b then if we call the func a first and then func b then first func a excute compelety and then only execution of func b starts.
 * 
 * 
 * So from above things shows that javascript is single threaded Synchronous language.
 * 
 * 
 * *) how to achieve Asynchrounous in javascript language ?
 *  
 * Asynchrounous means something is happening in sync and some thing is happening in out of sync such behaviour is called as Asynchrounous behaviour.
 * 
 * Example : 
 * 1) clicking on button to add product into a cart.
 * 2) meeting data from database.
 * 3) meeting reasone from server.
 * 4) do something after some delay. etc.
 * 
 * 
 * 


// Example
function hello(){
    console.log("hello");
}

hello();
console.log("Bye bye ...");

// how code executed : 

// whenever the browsers encounters such type of code it brings javascript engine into action. and there inside javascript engine call stack is present which maintains the all excution calls (GEC - global execution context and FEC - functional execution context)

// whenever javascript engine encounters code it creates an execution context. for entier state (code) it will create global excution context (GEC). and if inside code hit the functional call it creates functional execution context (FEC). once the function will be executed compelety it will delete the Functional Execution context (FEC) from Execution Context (EC). and similiary one the entire state (code) will be executed then Global Execution Context (GEC) will be deleted from Execution Context (EC).

// In this Way Javascript Execution Happen In Synchronous Way.


 * 
 * 
 * - where is this Asynchrounous behvaiour coming from ?
 *  
 *  javascript engine is not responible for above Asynchrounous behaviour. Because javascript engine only responible for execution or javascript engine have only call stack and it creates Execution Context. (job of callstack is manage the all Execution Context) . job of javascript engine is only the execution of code.
 * 
 *  Asynhrounous behaviour of javascript is coming from browser. browser contains Javascript Engine (inside JE callstack is present) , provide access to database , provide access to server , provide access to timer event etc. job of js engine is only the execution of code so above all action will be handled by browser.
 * 
 *  Above all things Asynchrounous actions provides to the javascript engine through the by using Web API.
 * 
 * Extra Key Points : 
 * console window is the part of browser so javascript engine use that by using Web API like Console.
 * 
 *
 */


//         ---------Browser--------------------------------
//         |                                               |
//         |    ---JS Engine------                         |
//         |    |                 | 1)access to DB         |
//         |    |                 | 2)access to Server     |
//         |    |                 | 3)access to TimerEvent |
//         |    |                 | 4)acess to location    |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |   Call Stack    |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |    |                 |                        |
//         |     -----------------                         |
//         |                                               |
//         |                                               |
//          ------------------------------------------------
//         ---------Browser----------------------------------------------------------------------------
//         |                                                                                          |
//         |    ---JS Engine------        -------------------- Web API---------------                 |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |             1) Timer API                 |                |
//         |    |                 |       |             2) DOM API                   |                |
//         |    |                 |       |             3) HTTP Request              |                |
//         |    |                 |       |             4) Console API               |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |       |                                          |                |
//         |    |                 |        ------------------------------------------                                                         |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |   Call Stack    |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |    |                 |                                                                 |
//         |     -----------------                                                                  |
//         |                                                                                        |
//         |                                                                                        |
//          ----------------------------------------------------------------------------------------







//Asynchrounous code : 

// console.log("Let's Begin");
// setTimeout(function(){
//     console.log("Let's wait");
// },4000)
// console.log("Bye bye...")

// exection of above code in Synchronous Manner : 

// output : 
// Let's Begin
// Let's wait (its wait for 4 second)
// Bye bye..

// In situation like waiting for execution javascript most powerful comes in picture i.e. Asynchrounous Javascript.

// javascript handles above such way firstly it will log the Let's Begin and whenever it encounters setTimeout api it will start timer for 4 sec and then control goes to next line log message Bye bye...after 4sec it will push the callback function onto the callstack and then execute the callback function. and then print the message Let's wait.

//why such function is called as callback function :  we called such function as callback function we can called back again. basically in browser it callback again and push it into call stack. and execution of callback or pushing of callback into callstack is done by eventloop. eventloop is not part of js engine it is present inside the browser.


// heart of Asynchrounous javascript is eventloop.

// eventloop is basically loop of events.

// browser has javascript engine (callstack present inside js engine) , web api , event loop , callback queue.



// Example of Asynhrounous Javascript : 

console.log("Let's Start");
const promise = new Promise((resolve, reject)=>{
    console.log("done");
});
promise.then((res)=>console.log(res));
console.log("Bye Bye...")

// Event loop : is a heart of Asynchrounous Javascript . job of eventloop is to continously keep track on callstack and callback queue. if callstack is empty it check any call back in callback queue if present push it onto callstack

//There a such case we have multiple callback function in that such cases the which callback function reaches to callback queue first that will be firslty pushed to callstack (i.e. first-in-first-out (queue))

//There have two queue in callback queue. one is Task Queue and another one is MicroTask Queue. In Task Queue puts least priority Task and MicroTask Queue puts high priority Taks.


// i want to show data to the user is more important than waiting for any  operation so that promise is the high priority Taks and setTimeout, Dom api's etc is the least priority Taks.

// so the MicroTask queue have the promise in the code and Task queue contains the least priority queue.


// example on browser js visualizer 9000 there have an lot of example based on js topic.