/**
 * Promise
 * 
 * - to create new promise we use new Promise() constructor.
 * - promise have excuecor callback function which takes two parameter's like resolve and reject. this resolve and reject are callback functions used show message when request is fulfilled then resolve shows particular message for fulfilled and reject callback function show particular message for request rejected.
 * 
 - we have error by create Error object  by using new Error() contructor to throw and error object which error message.
 */

const isRequestSuccessful = true;

const db = [
    {id:1,name:"prakash"},
    {id:2,name:"ashish"},
]

let promise = new Promise((resolve , reject) =>{
    if(isRequestSuccessful){
        // resolve("promise resolved");
        // setTimeout(()=> resolve("promise resolved"),10000)
        setTimeout(()=>resolve(db),3000)
    }else{
        const error = new Error("something went wrong");
        // reject(error);
        // reject(error.message)
        setTimeout(()=>reject(error.message),3000)
    }
})

console.log(promise);

promise
    .then((response) => {
        console.log(response);
        console.log(promise);
    })
    .catch(function(err){
        console.log(err);
        console.log(promise)
    });