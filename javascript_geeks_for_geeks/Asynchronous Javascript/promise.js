
/**
 * Promise - Promise is an object that has the status of an async operation, and its corresponding value.
 * 
 * 
 */

// why was promise required : promise used to solve the problem of callback hell (pyramid of doom and inversion of control).


/*
bookHotelAPI(hotelId, function(){
    paymentAPI(hotelId , userId, function(){
        showStatusAPI();
    })
})

*/


// By using the callback hell the code base increasing horizontally but ideally the code base should increase vertically. the code base increase horizontally it becomes diffcult to manage the code and also the code readability lost this creates problems like callback hell, pyramid of doom, inversion of control etc.

// to solve the above problem we uses promises.

/*
let promise1 = bookHotelAPI(hotelId){

    stateRequest ---> pending / fulfilled / rejected

    response --> value / error.

}
*/

// promise nothning but is an object it have state of the request. state of request initially it is pending. when we got response from the server state of request fulfilled or rejected. if api link is correct --> state of request is fulfilled and if api link is not correct then state of request is rejected.

// based on state of request we got response. as response we got value or error if the api link is proper we got value as response otherwise error as response

//fetchApi


// fetch api : api used to get data from server or api is called as fetch api. which is present in web api. it takes parameter as a http request / url and returns request status / response.
 
// console.log(promise) ---> it gives promise object.

// pending : it not fulfilled and not rejected it working phase. and by default state of promise is pending.
// fulfilled : there is not any issue it returs reponse.
// rejected : there is a issue it returns error.


// when the promise is resolved (state of request is fulfilled ) then in how to handle that reponse i can use this .then() method. .then() method have callback function which is exected when promise will be resolved / fulfilled .

// when the promise is rejected (state of request is rejected) then in how to handle that error i can use this .catch() method. .catch() method have callback function which is executed when promise will be rejected.

//to convert into json format to data fetch from api is done by using return response.json() . it will returns the promise object so that to handle it we have to apply another one then() which have also one callback function to get data in the form of json fromat.

// writing continously calling of .then().then().catch() such type of method calling is called as method chainning.

// when ever we return from .then() always returns a promise so handle that promise we have to use another .then() method for that new promise.

const URL = "https://dummyjson.com/user";

let promise = fetch(URL);
console.log(promise)

promise.then(function(response){
    // console.log(promise)
    // console.log(response)
    //  return response.json();
 })
 .then(function(data){
    
     console.log(data.users);
 })
 .catch(function(error){
    //  console.log(promise)
    //  console.log("Error Occured")
    })
