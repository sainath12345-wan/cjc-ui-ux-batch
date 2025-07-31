// it gives error

// nums = [10,20,30,40,50]

// nums.forEach((function (b){
//     console.log(`${b} - nameless func`)
// }))

// (function (){
//     console.log("Hello..")
// })()

// it is proper way always write iief function on the top of all function or code.
(function (){
    console.log("Hello..")
})()

nums = [10,20,30,40,50]

nums.forEach((function (b){
    console.log(`${b} - nameless func`)
}))

