/*

Js String Method - charAt & charCodeAt

String methods are built-in functions that perform various operations on strings. They can help you find the position of a character, determine the length of a string, convert cases, and much more.

Basic String Methods : 

    1.	Finding the Length of a String
        
        The length property returns the length of a string.

        Example : 

        let message = "I am a mentor at CJC";
        document.writeln(`String = ${message}<br>`)
        document.writeln(`Length of String = ${message.length}`);
        
    2.	Finding a Character at a Specific Index
        
        The charAt method returns the character at a specified index. 

        Example :

        let message = "I am a mentor at CJC";
        let inputIndex = parseInt(prompt('Enter Index : '))
        document.writeln(`Index = ${inputIndex}<br>`);
        document.writeln(`String = ${message} <br>`);
        let charAtInputIndex = message.charAt(inputIndex);
        document.writeln(`Character At ${inputIndex} is ${charAtInputIndex}.<br><br> `)
        
        3.	Finding the ASCII Code of a Character
        
        The charCodeAt method returns the ASCII code of the character at a specified index. 
        
        Example :
        
        let message = "I am a mentor at CJC";
        let inputIndex = parseInt(prompt('Enter Index To Calculate ASCII code of a Character : '))
        document.writeln(`Index = ${inputIndex}<br>`);
        document.writeln(`String = ${message} <br>`);
        let charAtInputIndex = message.charCodeAt(inputIndex);
        document.writeln(`ASCII Code of a Character At ${inputIndex} is ${charAtInputIndex}.<br><br> `)
    
        str.charAt() Returns character at given index of string.
        character = str.charAt(index)

        Arguments: The only argument to this function is the index in the string from where the single character is to be extracted. The range of this index is between 0 and length - 1, including the limits. If no index is specified then the first character of the string is returned as 0 is the default index used for this function. Return value This function returns a single character located at the index specified as the argument to the function. If the index is out of range, then this function returns an empty string. 

        Example : 
        
        function extractCharacter(index){
            //original string
            var str = "Complete Java Classes";

            //Finding the character at given index
            var value = str.charAt(index);
            document.writeln(`<br>The value Of Character = ${value} <br><br> `)
            
        }   

        extractCharacter(3);
        
        Example 2: 

        In this example the function charAt() finds the character at index 50. Since the index is out of bounds for the given string therefore the function returns "" an empty string.  
        
        
        function extractCharacter(index){
            //original string
            var str = "Complete Java Classes";
 
            //Finding the character at given index
            var value = str.charAt(index);
            document.writeln(`<br>The value Of Character = ${value} <br><br> `)
            
        }   
 
        extractCharacter(50);  // it returns empty string.



        Working with String Methods

        Let's use these methods to perform various tasks.

        Example: Using charAt and charCodeAt

        let message = "I am a mentor at World";
        let index = 2;

        // Using charAt
        let char = message.charAt(index);
        console.log(`Character at index ${index}: ${char}`); // Output: a

        // Using charCodeAt
        let asciiCode = message.charCodeAt(index);
        console.log(`ASCII code of character at index ${index}: ${asciiCode}`); // Output: 97


        str.charCodeAt()

        str.charCodeAt() method returns a Unicode character set code unit of the character present at the index in the string specified as the argument. The syntax of the method is as follows:

        str.charCodeAt(index)

        Arguments The only argument to this method is the index of the character in the string whose Unicode is to be used. The range of the index is from 0 to length - 1. Return value This method returns the Unicode (ranging between 0 and 65535) of the character whose index is provided to the method as the argument. If the index provided is out of range this method returns NaN.


        Example 1:

        In this example the method charCodeAt() extracts the character from the string at index 4. Since this character is m, therefore this method returns the Unicode sequence as 109.  

        // JavaScript to illustrate charCodeAt() method

        function func() {
            var str = 'ephemeral';
 
            // Finding the code of the character at
            // given index 
            var value = str.charCodeAt(4);
            document.writeln(`${value}`)  
        }
 
        func();
        
        Output
        109
        
        Example 2:

        In this example the method charCodeAt() extracts the character from the string at index 20. Since the index is out of bounds for the string, therefore this method returns the answer as NaN.  

        // JavaScript to illustrate charCodeAt() method
        
        function func() {
            var str = 'ephemeral';

            // Finding the code of the character 
            // at given index 
            var value = str.charCodeAt(20);

            console.log(value);    
        }

        func();

        Output
        NaN

        
        
        */



/**
 * String Methods 
 * charAt() | charCodeAt()
 */


// const displayMessage = "I am a Mentor at GeeksforGeeks";
// const index = 19;
// const char = displayMessage.charAt(index);

// console.log(char);

//ASCII --> American Standard Code for Information Interchange .

// const asciiCode = displayMessage.charCodeAt(index);
// console.log(`The ascii code of ${char} is ${asciiCode}`)

/**
 * homework 
 * 
 * encode 
 * 
 * geeks ---> iffmu
 */
       
let input = 'geeks';
let encodedString = '';

for(let i=0 ; i<input.length; i++){
    let asciiCode = input.charCodeAt(i);
    // console.log(asciiCode)
    let s = String.fromCharCode(++asciiCode);
    // console.log(s)
    encodedString = encodedString + s;
}


console.log(encodedString)
       
       
       
       
       
       
       
       
       
       
       
       