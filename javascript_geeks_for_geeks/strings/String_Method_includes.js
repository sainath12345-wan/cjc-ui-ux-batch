/**
 * string.includes()
 */


// const displayMessage = "I love to code in light mode";
// console.log(displayMessage.includes('dakr')); // false.
// console.log(displayMessage.includes('light')); // true.

// if(displayMessage.includes('dark')){
    //     console.log("Person loves to code in dark mode.");
    // }else{
        //     console.log("Person loves to code in light mode.")
        // }
        
        
        
// display character is a vowel or consonent.

const displayMessage = "I love to code in light mode";
const vowels = "aeiouAEIOU";
const consonents = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

for(let char of displayMessage){
    if(vowels.includes(char)){
        console.log(`${char} is a vowel.`);
    }else if (consonents.includes(char)){
        console.log(`${char} is a consonent.`);
    }else{
        console.log(`${char} is a not vowel nor consonent.`)
    }
}

// WAP to check string has vowel or not (without using touppercase() and tolowercase()).

// const checkVowelInString = (text)=>{
//     let vowels = 'aeiouAEIOU';
//     let flag = false;

//     for(let char of text){
//         if(vowels.includes(char)){
//             flag = true;
//             break;
//         }else{
//             flag = false;
//         }
//     }

//     if(flag === true){
//         console.log("string has vowels");
//     }else{
//         console.log("string doesn't have vowels");
//     }

// }

// checkVowelInString('sainath');


//



const checkVowelInString = (text)=>{
    let vowels = 'aeiou';
    let flag = false;

    for(let char of text){
        if(vowels.includes(char.toLowerCase())){
            flag = true;
            break;
        }else{
            flag = false;
        }
    }

    if(flag === true){
        console.log("string has vowels");
    }else{
        console.log("string doesn't have vowels");
    }

}

checkVowelInString('sainath');