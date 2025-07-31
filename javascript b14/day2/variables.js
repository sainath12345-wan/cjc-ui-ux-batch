console.log('Hello.... I am Console Data')
console.warn('Please enter correct syntax')
console.error('Sorry Syntax Error')

console.log('---------*** var keywor ***---------')

var playername = 'Virat Kohli'
// My Fav Player is Viral Kohli
var age = 36
// Virat Kohli age is 36
var country = 'india'
// He is playing for india

console.log(playername)
console.log(age)
console.log(country)

// first way to use variable and message at a time
console.log('My Fav Player is ' , playername)
console.log('Virat Kohli age is ' , age)
console.log('He is playing for ' , country)

console.log('My Fav Player is ' , playername , '. Virat Kohli age is ' , age ,'. He is Playing for ' , country)

// String concatination method
//  + - concatination operator
console.log('My Fav Player is ' + playername)
console.log('Virat Kohli age is ' + age)
console.log('He is playing for ' + country)

console.log('My Fav Player is ' + playername + '. Virat Kohli age is ' + age + '. He is playing for india')

var a = 100;
var b = 200;
var c = 300;
var result = a + b + c
console.log('The value of a = '+ a)
console.log('The value of b = '+ b)
console.log('The value of c = '+ c)
console.log('The value of a,b and c = '+ result)

// String method
console.log('The addition of ' + a + '+' + b + '+' + c + '=' + result + '- string concatination method')

// template literal method - ES6
// Single quotes - backtick
// ${variable_name}
console.log(`The addition of ${a} + ${b} + ${c} = ${result} template literal method`)

