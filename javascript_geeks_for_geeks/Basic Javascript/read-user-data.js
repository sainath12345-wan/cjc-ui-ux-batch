/**
 * 
 * ReadlineSync Package  (read data from user)
 * 
 * it is used for taking input from user on terminal.
 * 
 * execute this command : npm i readline-sync
 * 
 * there must be nodejs and npm installed.
 */

const readlineSync = require("readline-sync");

let name = readlineSync.question("Enter Your Name : ");
console.log(name)