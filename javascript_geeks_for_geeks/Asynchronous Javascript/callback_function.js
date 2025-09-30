/**
 * Callback Functions : 
 * 
 * //Javascript Functions Called as "First Class Citizen's".
 * 
 *Q.) Why Javascript Functions Called as "First Class Citizen's" ?
 *  
 *      Because Of following three reasons 
 *      1)Assign function to a variale.
 *      2)We can pass the function as a arugument to the another function. (callback function)
 *      3)We can also return the function from another function.
 * 
 *      Because of above all reasons javascript functions are First Class Citizen.
 * 
 * 
 * 
 * Q.) What is callback function?
 * 
 *  The function is passed as arugument of another function such function are called callback function.
 * 
 *  The execution of callback is starts after the execution of function where you passed the callback function.
 * 
 *  The callback function are very useful.
 * 
 * The callback function makes Asynchrounous javascript easy.
 * 
 *  without using callback :
 *  
        function a(){
            console.log("hello")
        }

        function b(){
            console.log("bye");
        }

        a(); // hello
        b(); // bye

    By using callback :
    
        function a(wrapper){
            console.log("Hello"); //hello
            wrapper(); //bye
        }
        
        function b(){
            console.log("bye");
        }
        
        // here b is callback function 
        a(b); 

    Asynhrounous Javascript : 

    - In Asynchrounous javascript Happens Asynchrounous means something is happen in later. 

    for example : 

    1) when click on button then will be done after some time.
    2) waiting data from user / server. 
    delay, timer, counter this all are Asynchrounous Actions.
    such type of situtatios will be handled by Asynchrounous Javascript.

 * 
 */

    // example of callback function 

    // setTimeout

    // this is async function used to created delay and execute something after someamount of time.
    // setTimeout(cb,delay)

    console.log("hello")
    // it will executed after 5 sec
    setTimeout(function callback(){
        console.log("Executed after a delay.");
    },4000)




    // fetch()

    fetch("http://.....")
        .then(function(){
            //reponse logic.
        })

    //addEventListener();
    const btn = document.querySelector("#btn");
    console.log(btn)

    
    btn.addEventListener("click",()=>{
        console.log("button clicked");
    })

    

