//                                -------->>>    Scope    <<<--------

// scope determines the accessibility and visibility of variables, functions, and objects in different parts of your code. JavaScript features four primary types of scope: 
// 1. Global Scope, 
// 2. Block Scope,
// 3. Function Scope,
// 4. Module Scope



// 1. Global Scope -->

// let userName = "Ayan"

// function sayHello() {
//     console.log(globalGreeting); // Accessible here
// }



// 2. Block Scope -->

// {
//     let blockVariable = "I am hidden";
//     var functionVariable = "I leak out"; 
// }

// console.log(functionVariable); // Works (prints "I leak out")
// console.log(blockVariable);    // ReferenceError: blockVariable is not defined



// 3. Function Scope  -->

// function greet() {
//     var secret = "shhh";
//     console.log(secret); // Works
// }

// console.log(secret); // ReferenceError: secret is not defined



// var    -->    Function Scope
// let    -->    Block Scope
// const  -->    Block Scope
// var will give error in function if u try to access var variable outside the function but in block it doesnt



// 4. Module Scope  --->

// When working with JavaScript Modules (type="module"), variables declared at the top of a file are private to that specific file. They cannot be accessed by other files unless they are explicitly shared using the export keyword



// function counter(){
//     let count = 0
//     count += 1
//     console.log(count);
// }

// counter()   //  OUTPUT - 1
// counter()   //  OUTPUT - 1
// counter()   //  OUTPUT - 1



// let count = 0

// function counter(){
//     count += 1
//     console.log(count);
// }

// counter()   //  OUTPUT - 1
// counter()   //  OUTPUT - 2
// counter()   //  OUTPUT - 3



// let count = 2

// function counter(){
//     let count = 0
//     count += 2
//     console.log(count);
// }

// counter()   //  OUTPUT - 2
// counter()   //  OUTPUT - 2
// counter()   //  OUTPUT - 2



//                                -------->>>    Hoisting    <<<--------

// Hoisting is a JavaScript mechanism where variable, function, class, and import declarations are conceptualized as being moved to the top of their containing scope during the compilation phase, before the code actually executes


// console.log(a);
// let a = 6;  // Throws ReferenceError: Cannot access 'a' before initialization
// var a = 6;         // undefined
// const a = 6;  // Throws ReferenceError: Cannot access 'a' before initialization



// addNum()

// function addNum() {
//     console.log("Hello");
// }



// addTwoNum()    // Throw ReferenceError: Cannot access 'addTwoNum' before initialization

// let addTwoNum = function() {
//     console.log("Function Expression");
// }

// addTwoNum()   // Works - print Function Expression



// addTwoNum()    // Throw TypeError: addTwoNum is not a function

// console.log(addTwoNum);

// var addTwoNum = function() {
//     console.log("Function Expression");
// }



// let x = 6;
// function random() {
//     console.log(x);
//     let x = 3;
// }
// random()  // Throw ReferenceError: Cannot access 'x' before initialization



// let x = 6;
// function random() {
//     console.log(x);
//     var x = 3;
// }
// random()  // undefined



// let x = 6;
// function random() {
//     console.log(x);
// }
// random()  // 6



//                                -------->>>    Lexical Scoping    <<<--------

// Lexical scoping means that a function's ability to access variables is determined by its physical location within the source code. In JavaScript, inner functions have access to variables declared in their outer (parent) scopes, but the parent scopes cannot look downward to access variables inside child functions. This lookup behavior is static and fixed at compile time



// let city = "Delhi"

// function printCity() {
//     console.log(city);
// }

// function random(fn) {
//     let city = "Varanshi"
//     fn()
// }

// random(printCity)



// let city = "Delhi"

// function random(fn) {
//     let city = "Varanshi"
//     function printCity() {
//         console.log(city);
//     }
//     return printCity
// }

// console.log(random());
// let City = random();
// City();



//                                -------->>>    Lexical Environment    <<<--------

// A lexical environment in JavaScript is an internal engine structure that pairs local memory (storing variables and functions) with a reference to the outer parent environment. The term "lexical" means that this structure is determined entirely by where your code is physically written in the file, not where it is executed


// [ Global Lexical Environment ]
//   ├── Environment Record: { globalVar: "I am Global", outerFunction: f }
//   └── Outer Reference: null  <-- Top of the chain
//         ▲
//         │ (Points to Global)
// [ OuterFunction Lexical Environment ]
//   ├── Environment Record: { outerVar: "I am Outer", innerFunction: f }
//   └── Outer Reference: [ Global Lexical Environment ]
//         ▲
//         │ (Points to Outer)
// [ InnerFunction Lexical Environment ]  <-- CURRENTLY RUNNING
//   ├── Environment Record: { innerVar: "I am Inner" }
//   └── Outer Reference: [ OuterFunction Lexical Environment ]



// const globalVar = "I am Global";

// function outerFunction() {
//   const outerVar = "I am Outer";

//   function innerFunction() {
//     const innerVar = "I am Inner";

//     // Accessing variables across different environments
//     console.log(innerVar);  // "I am Inner"  (Found locally)
//     console.log(outerVar);  // "I am Outer"  (Found via parent reference)
//     console.log(globalVar); // "I am Global" (Found via global reference)
//   }

//   innerFunction();
// }

// outerFunction();