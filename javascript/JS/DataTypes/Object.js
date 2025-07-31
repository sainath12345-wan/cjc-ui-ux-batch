const person = {
    name : 'virat',
    city : 'pune',
    age : 35,
    isEmp : true,
    hobbies : ['cooking', 'singing'],
    address : {
        area : 'karvenagar',
        pincode : 431704
    }
}

console.log("Name = " + person.name)
console.log("City = " + person.city)
console.log("Age = " + person.age)
console.log("Is Employee = " + person.isEmp)
console.log("Hobbies = " + person.hobbies)
console.log("Address = " + person.address.area +  " Pincode =  " + person.address.pincode)

const Employee = [
    {jursey_no : 57 , name : 'rohit' , city : 'mumbai' , hobbies : ['playing','singing'] , address : {area : 'pune', pincode : 431603}},
    {jursey_no : 18 , name : 'virat' , city : 'delhi' , hobbies : ['playing','gym'] , address : {area : 'aurangabad', pincode : 431604}},
    {jursey_no : 1 , name : 'k l rahul' , city : 'banglore' , hobbies : ['playing','singing'] , address : {area : 'nanded', pincode : 421603}}
]

console.log(Employee[0])