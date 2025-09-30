/*

indexOf() Method : 

    - The indexOf method returns the index within the calling string of the first occurrence of the specified value, starting the search at fromIndex. It returns -1 if the value is not found.


    - str.indexOf() function finds the index of the first occurrence of the argument string in the given string. The value returned is 0-based. The syntax of the function is as follows: 

    str.indexOf(searchValue , index)

    - Arguments: 

    The first argument to the function searchValue is the string that is to be searched in the base string. The second argument to the function index defines the starting index from where the searchValue is to be searched in the base string.

    - Return 
    
    This function returns the index of the string (0-based) where the searchValue is found for the first time. If the searchValue cannot be found in the string then the function returns -1.

    - Example 1: 

    In this example, the function indexOf() finds the index of the string Train. Since the first and the only index where this string is present is 9, therefore this function returns 9 as the answer. 
    
    // JavaScript to illustrate indexOf() function
        function func() {
    
            // Original string
            var str = 'Departed Train';
    
            // Finding index of occurrence of 'Train'
            var index = str.indexOf('Train');
            console.log(index); 
        }
        func();

        // output : 6

    - Example 3: 

    In this example, the function indexOf() finds the index of the string Train. Since the searchValue is not present in the string, therefore this function returns -1 as the answer. 
    
    // JavaScript to illustrate indexOf() function
    function func() {

        // Original string
        var str = 'Departed Train';

        // Finding index of occurrence of 'Train'
        var index = str.indexOf('train');
        console.log(index);  
    }
    func();

    Output
    -1

    
    
    
    
    
    
    
    
    */
   
    //indexOf(character_or_string ,  starting index)
    const displayMessage = "I am a Mentor at Complete Java Classes.";
    
    // const index = displayMessage.indexOf('a',2);
    // const index = displayMessage.indexOf('a',3);
    // const index = displayMessage.indexOf('b');
    const index = displayMessage.indexOf('Men' , 8);
    console.log(index)


    // find character from string using function.

    // function findCharacter(text, char){
    //     const index = text.indexOf(char);
    //     if(index === -1){
    //         return "Character not found.";
    //     }else{
    //         return "Character found in the string";
    //     }
    // }

    // const result = findCharacter("sainath@gmail.com",'j');
    // console.log(result)

    // using arrow function.

    const findCharacter = (text,char)=> text.indexOf(char) === -1 ? "character not found" : "character is found in string";
    const result = findCharacter('sainath@gmail.com','@');
    console.log(result)