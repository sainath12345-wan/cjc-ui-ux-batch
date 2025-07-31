/*

let student = {
    name : "Nitesh",
    class : "V",
    status : "Pass",
    totalMarks : 100
};

case 1 : pass by value.

let original  = 0;
function updateVariable(x){
    x=10
}

console.log("Original Value : " + original);
updateVariable(original)
console.log("Updated Value : " + original);

// Original Value : 0
// Updated Value : 0


case 2 : pass by reference (so that object is reference data type)

let original  = 0;

function updateVariable(x){
    x.totalMarks = 10;
}

console.log("Original Value = " + student.totalMarks);
updateVariable(student);
console.log("Updated Value = " + student.totalMarks);

Original Value = 100
Updated Value = 10

###########################################################

Object Properties And Methods

Example 1 : 

let school = {
    name : "vivekanande school",
    location : "Delhi",
    establised : "1971",
    displayInfo : function (){
      console.log(`${school.name} was establised in ${school.establised} at ${school.location}`);              
    }
}

school.displayInfo(); //vivekanande school was establised in 1971 at Delhi

// In above school object have properties are name , location , established and object method is displayInfo()

Example 2

let studetnt = {
    name : "nitesh",
    class : "V",
    status : "pass",
    totalMarks : 100,
    displayInfo : function(){
        console.log(`Student Name is ${this.name} of class ${this.class} has marks ${this.totalMarks} `)
    }
}



let original = 0;

updateVariable = function(x){
    x.totalMarks = 10;
    }
    
    studetnt.displayInfo(); //Student Name is nitesh of class V has marks 100 
    updateVariable(studetnt);
    studetnt.displayInfo(); //Student Name is nitesh of class V has marks 10
    
    ###################################################################################

*) If Property names are numbers , it can be accessed using the bracket notation as follows.

let school = {
    name : "Vivekananda School",
    location : "Delhi",
    established : "1971",
    20 : 1000,
    displayInfo : function(){
        console.log(`The Value of the key 20 is ${school['20']}`); //The  Value of the key 20 is 1000  
        console.log(`The Value of the key name is ${school['name']}`); // The Value of the key name is Vivekananda School
        
        console.log(`The Value of the key 20 is ${this['20']}`); //The  Value of the key 20 is 1000  
        console.log(`The Value of the key name is ${this['name']}`); // The Value of the key name is Vivekananda School

        // console.log(`The Value of the key 20 is ${school.20}`); //it give error  
        console.log(`The Value of the key name is ${school.name}`); // The Value of the key name is Vivekananda School
        
        
        }
        }

        school.displayInfo(); 

########################################################################################
        
        
Object Properties that are inherited from an Object's prototype are known as inherited properties of that object. hasOwnProperty method 
can be used to check whether that property is the Object's own property.


let studetnt = {
    name : "nitesh",
    class : "V",
    status : "pass",
    totalMarks : 100,
    displayInfo : function(){
        console.log(`Student Name is ${this.name} of class ${this.class} has marks ${this.totalMarks} `)
    }
}


// name property is present inside the studetnt object so that it is its own property.
console.log(studetnt.name); 

// hasOwnProperty() is property of Global Object which checks the property is present inside the object or not if present it
// returns the true otherwise it returns the false.

let isStudetntHasName = studetnt.hasOwnProperty('name');
console.log(isStudetntHasName) // true

let isStudentHasAge = studetnt.hasOwnProperty('age');
console.log(isStudentHasAge) // false

console.log(studetnt.age); // undefined because their is no age property so that its value is undefined.

studetnt.age = "10";
let isStudentHasAge1 = studetnt.hasOwnProperty('age');
console.log(isStudentHasAge1) // true


###########################################  Accessing Object Methods ############################################

Accessing Object Methods.

let studetnt = {
    name : "nitesh",
    class : "V",
    status : "pass",
    totalMarks : 100,
    displayInfo : function(){
        console.log(`Student Name is ${this.name} of class ${this.class} has marks ${this.totalMarks} `)
    }
}

// Object's method when invoked with () the method will be executed.

console.log(studetnt.displayInfo()); //Student Name is nitesh of class V has marks 100 

// Object's method when accessed without () the method definition will be returned.

console.log(studetnt.displayInfo) //[Function: displayInfo]


######################################################## this keyword ##############################################

const person = {
    fistName : "john",
    lastName : "doe",
    id : 5566,
    fullName : function(){
        return this.fistName + " " + this.lastName;
        }
}

let person_full_name = person.fullName();
console.log(person_full_name) //john doe

################################################ Object Constructor And Maps ########################






let student = {
    name : "nitesh",
    class : "V",
    status : "pass",
    totalMarks : 100,
    displayInfo : function(){
        console.log(this.name);
    }
}

// Object Consturctor function
function StudentStructure(name , className , status , totalmarks){
    this.name = name;
    this.class = className;
    this.status = status;
    this.totalMarks = totalmarks;
}

let student2 = new StudentStructure('Aman' , 'Iv' , 'Pass' , 80)
console.log(student2)

// StudentStructure {
//     name: 'Aman',
//     class: 'Iv',
//     status: 'Pass',
//     totalMarks: 80
// }

console.log(student2.name); //Aman
console.log(student2.class); //IV
console.log(student2.status); //pass
console.log(student2.totalMarks); //80

################################ To Add a new Property or Method to a constructor ##########################


let student1 = {
    name : "nitesh",
    class : "V",
    status : "pass",
    totalMarks : 100,
    20 : 1000,
    displayInfo : function(){
        console.log(this.name);
    }
}

// console.log(student1)

// how to add properties and methods inside the object constructor function.

function StudentStructure(name, className , status , totalMarks){
    this.name = name;
    this.class = className;
    this.status = status;
    this.totalMarks = totalMarks;
    // To add number type of key using the this keyword inside the object constructor function.
    this[20] = 100;
    this.displayInfo = function(){
        console.log(name);
    }
}

let student2 = new StudentStructure('Aman' , 'Iv' , 'Pass' , 80);

console.log(student1)
console.log(student2)

############################# Buit-In Javascript Constructors #########################################

Built-In Javascript Constructor.

new String()
new Number()
new Boolean()
new Object()
new Array()
new RegExp()
new Function()
new Date()


######################### Object Maps #################################




*/


// creattes a new map object
let student3 =  new Map();

// sets the vlaue for a key in a maps
student3.set('name','Nitin');
student3.set('class','VII');
student3.set('status','Fail');

console.log(student3) //Map(3) { 'name' => 'Nitin', 'class' => 'VII', 'status' => 'Fail' }

console.log(student3.size) //returns the no of map elements.

let student_name = student3.get('name') // to get the value of key from the map

console.log(student_name) // Nitin 

student3.delete('status') // to delete the key from the map
console.log("After Deleted The Status from Student3 : " + student3.get('name') +" " + student3.get('class') +" " + student3.get('status'));
// After Deleted The Status from Student3 : Nitin VII undefined

student3.set('status' , 'pass') // add the new key in the map
console.log("After Adding new key  Status in Student3 : " + student3.get('name') +" " + student3.get('class') +" " + student3.get('status'));
// After Adding new key  Status in Student3 : Nitin VII pass

student3.set('status' , 'fail');
console.log("After updating the value of key  Status in Student3 : " + student3.get('name') +" " + student3.get('class') +" " + student3.get('status'));
// After Adding new key  Status in Student3 : Nitin VII fail

// student3.clear()
// console.log("After deleting all elements in the Map  : " + student3.get('name') +" " + student3.get('class') +" " + student3.get('status'));
// After deleting all elements in the Map  : undefined undefined undefined

let student3HasName = student3.has('name')  // returns true if a key exists in a map.
console.log(student3HasName); // true

// Another Methods of Object Map

// forEach() : Invokes a callbacks for each key/value pair in a map

student3.forEach(function(value,key){
    console.log(key + " " + value);
})

// name Nitin
// class VII
// status fail

// values()  : Returns an iterator object of the values in a map.
console.log(student3.values())
// [Map Iterator] { 'name', 'class', 'status' }

// keys() :  Returns an iterator object of the keys in a map
console.log(student3.keys())
// [Map Iterator] { 'Nitin', 'VII', 'fail' }


// entries() :  Returns an iterator object with the [key,value] pairs in a map.
console.log(student3.entries())
// [Map Entries]
//  {
//     [ 'name', 'Nitin' ],
//     [ 'class', 'VII' ],
//     [ 'status', 'fail' ]
//   }





