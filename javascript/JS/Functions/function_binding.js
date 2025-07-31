// Example 1:


/*
let animal = {
    name : "lion",
    color : "yellow"
}

let bird = {
    name : "parrot",
    color : "green"
}

function print(){
    console.log("Name = " + this.name + " Color = " + this.color);
}

let print_animal = print.bind(animal);

let print_bird = print.bind(bird);

print_animal();
print_bird();

*/

// Example 2

let animal = {
    name : "lion",
    color : "yellow",
    print : function(){
        console.log("Name = " + this.name + " Color = " + this.color);
    }
}

let bird = {
    name : "parrot",
    color : "green"
}

let print_bird = animal.print.bind(bird);

print_bird();