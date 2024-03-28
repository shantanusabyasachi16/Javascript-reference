
// first ever control flow is if statement

// In this approach, we are using an if statement to check a specific condition, the code block gets executed when the given condition is satisfied.



// if

//if(condition){}

if(true){

    //the code will execute
}

if(false){

    //the code will  not excute 
}
//< less than,..> greater than,.. <=greatherthan equal,.. >= lessthan equal,..== double equal,..!=notequal,.. ===triple equal also cheks the types
//!== negative sign

if(2==="2"){
    console.log("executed");
}


if(2 !=3){
    console.log("executed");
}
//if else statement

let num = - 20
if(num<=10){
    console.log("the number is greater");//the number is greater
}
else{
    console.log("the number is smaller");
}

const  score = 200
if (score>100) {
    const power1 ="fly"
    console.log(`user power :${power1}`);//user power :fly
    
}
//console.log(`user power :${power1}`);//power1 is not defined.... it is not in scope
//if we use var then it will execute becuase it  global scope

//shorthand notation
//we do not use scope

 const balance =1000
 if (balance>500) console.log("test");//test it is implicit scope that is  assumes that there is a scope

  //nesting  
  //for multiple  condition


const newbalance= 1000
if (newbalance < 400) {
    console.log("less than 400");
    
} else if(newbalance < 780){
    console.log("less than 780");
}
else if (newbalance > 1200) {
    console.log("less than 1200");

}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {//&& checks both condition both statement is to be true
    console.log("Allow to buy courses");
}
//2===3 false it wiil not execute but 2===2 it will ex3cute

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");

}

//|| is used for multiple condition
// if anyn of the condition  is true then it will execute
    

 
