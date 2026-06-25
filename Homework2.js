let revStrg = "level"

//Write a function to reverse the string.
function reverseString(revStrg){

   // Convert the input into characters
    let ch = revStrg.split('')

    //To declare a variable and initialize as empty
    let strgReverse = ''

    //Loop them in reverse direction
    for (let i = ch.length-1; i >= 0; i--) {

    //Concatenate the string
        strgReverse = strgReverse +ch[i]
        
    }
    //Print the new string
console.log("The reverse string is "+ strgReverse)
    return strgReverse;
}

//Write a function to check the given string is a palindrome,[If the given string and reverse string are the same, it is a palindrome]
function palindrome(revStrg){

    let p = reverseString(revStrg)
    //Check if the reverse string and original string are the same
    if (revStrg === p) {
        console.log("This is a palindrome ")
        
    } else {
        console.log("This is not a palindrome")
    }
    
}
palindrome(revStrg);
