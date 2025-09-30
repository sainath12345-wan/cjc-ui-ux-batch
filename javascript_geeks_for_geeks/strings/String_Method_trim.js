/**
 * 
 * String.trim();
 */


// leading space --> space before the string.
// traling space ---> space after the string.

const text = "           Holla! I love CJC         ";
const text1 = text.trim();
console.log(text1)
console.log(text1.length);
console.log(text)
console.log(text.length)

//Holla
const text2 = text.trim().substring(0,5);
console.log(text2);


function isPanagram(str) 
{
        // code here
        let flag = false;
        for(let i=65 ; i <= 90 ; i++){
            let char = String.fromCharCode(i);
            console.log(char)
            if(str.toUpperCase().includes(char)){
                flag = true;
            }else{
                flag = false;
                return flag;
            }
        }
        
        return true;
        
    }
    
console.log(isPanagram('Thequickbrownfoxjumpsoverthelazydog'))