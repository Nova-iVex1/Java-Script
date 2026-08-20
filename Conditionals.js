// Syntax :-

/* if(condition){
        // statement
}else{
        // statement
} */



// if (true) {
//     console.log("In true block");
// } else {
//     console.log("In false block");
// }


// const isLoggedIn = false;
// if (isLoggedIn) {
//     console.log("You can like, comment");
// } else {
//     console.log("Please login first");
// }




// if  ------>>

// let temp = 40;
// if(temp >= 30){
//     console.log("please on AC");
// }




// else if  ------>>

// let day = "Friday";
// if(day === "Monday"){
//     console.log("1st day of the week");
// }else if(day === "Tuesday"){
//     console.log("2nd day of the week");
// }else if(day === "Wednesday"){
//     console.log("3rd day of the week");
// }else if(day === "Thursday"){
//     console.log("4th day of the week");
// }else if(day === "Friday"){
//     console.log("5th day of the week");
// }else if(day === "Saturday"){
//    console.log("6th day of the week"); 
// }else if(day === "Sunday"){
//    console.log("7th day of the week"); 
// }else{
//     console.log("Not a Day");
// }




// Nested if else  ------>> 

// const isLoggedIn = true;
// const isSubscribed = false;

// if (isLoggedIn) {
//     if (isSubscribed) {
//         console.log("You can access premium content");
//     } else {
//         console.log("You do not have premium plan to access this content");
//     }
// } else {
//     console.log("please login")
// }




// switch case  ------>>

const day = "fri";

switch(day){
    case "Monday" : 
        console.log("1st day of the week");
        break;
    case "tuesday" : 
        console.log("2nd day of the week");
        break;
    case "Wednesday" : 
        console.log("3rd day of the week");
        break;
    case "Thursday" : 
        console.log("4th day of the week");
        break;
    case "Friday" : 
        console.log("5th day of the week");
        break;
    case "Saturday" : 
        console.log("6th day of the week");
        break;
    case "Sunday" : 
        console.log("7th day of the week");
        break;
    default :
        console.log("Not a day");
}