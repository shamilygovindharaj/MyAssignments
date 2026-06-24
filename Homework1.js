/* //Day 1: Homework assignment 1

// Used var type 
const browserName = "Chrome"

function getBrowserName(){
    
    if (browserName === "Chrome") {

        var browser = "Edge"

    }
    console.log(browser)
}
getBrowserName(); 

// Converted var to let and received result as not defined. 

const browserName = "Chrome"

function getBrowserName(){
    
    if (browserName === "Chrome") {

        let browser = "Edge"

    }
    console.log(browser)
}
getBrowserName();  */


// Day 1 Assignment 2

//Positive case

/* var genderType = "female"
function printGender(){
 let color = "brown"
    if (genderType === "female") {

        var age = 30
        let color = "pink"
        console.log("Print the color variable in if block as "+ color) 
        
    }
    console.log("Print the age outside the if block "+ age)
}
printGender();
console.log("Out of the function "+ genderType); */

//Negative case

var genderType = "male"
function printGender(){
 let color = "brown"
    if (genderType === "female") {

        var age = 30
        let color = "pink"
        console.log("Print the color variable in if block as "+ color) 
        
    }else{
        console.log("Gender not matching ")
    }
    console.log("Print the age outside the if block "+ age)
}
printGender();
console.log("Out of the function "+ genderType);

