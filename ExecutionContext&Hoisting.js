//                                   ------>> Execution Context <<--------

// An Execution Context is an abstract environment created by the JavaScript engine to evaluate and execute JavaScript code.

// Every execution context consists of two main parts: a Memory Component (or Variable Environment) which stores variables and functions as key-value pairs, and a Code Component (or Thread of Execution) where the code executes line by line.



// Types of Execution Contexts :-

// 1. Global Execution Context (GEC): Created by default when your script first loads. There is only one GEC per file. It generates the global object (window in browsers, global in Node.js) and binds the this keyword to it.

// 2. Function Execution Context (FEC): Created dynamically whenever a function is explicitly called or invoked. Every  single function call gets its own distinct FEC.

// 3. Eval Execution Context: Created when code is executed inside an eval() function (rarely used due to security risks).



// The Two Phases of ExecutionJavaScript does not just read and run code instantly. Every execution context undergoes a mandatory two-phase process:


// 1. Creation Phase (Memory Allocation) - The engine scans your entire script before running any lines of code to map out identifiers.

// Variables (var): Memory is allocated, and they are assigned a default placeholder value of undefined. This is known as hoisting.

// Variables (let & const): Memory is allocated, but they are placed in a Temporal Dead Zone (TDZ) and left uninitialized.

// Function Declarations: The entire function body is copied and safely stored directly into memory.
 

//2. Execution Phase (Code Execution) - The engine processes code line-by-line within the Thread of Execution.

// Variables are updated with their real values as assignments are reached.

// When a function is called, the engine halts the current timeline and spins up a brand new Function Execution Context



// The Call Stack :-

// The JavaScript engine manages these exploding and imploding layers of execution contexts via a standard Call Stack. The stack works on a Last-In, First-Out (LIFO) structure:
 
// The Global Execution Context sits permanently at the absolute bottom of the stack.
 
// When a function executes, its new context is pushed onto the top of the stack.

// When a function resolves, its context is popped off the stack, shifting control back to the context beneath it.

// Once the script finishes completely, the Global Execution Context pops off, emptying the engine memory



// console.log(a);   // undefined
// var a = 5;


// console.log(b);
// let b = 6;        //  Throw ReferenceError: Cannot access 'b' before initialization


// fun1();
// function fun1() {
//     console.log("Hii");   // Hii
// }


// fun2();
// var fun2 = function() {
//     console.log("Function Expression");   // TypeError: fun2 is not a function
// }


// fun3();
// const fun3 = function() {
//     console.log("Function Expression");   // Throw ReferenceError: Cannot access 'fun2' before initialization
// }



// let a = 5;
// let b = 10;
// console.log(a + b);

// function fun() {
//     let num1 = 10;
//     let num2 = 20;
//     return num1 + num2
// }

// const result = fun()
// const result2 = fun()

// console.log(result);



// let a = 5;
// let b = 10;
// console.log(a + b);

// function outer() {
//     let num1 = 10;
//     let num2 = 20;

//     function inner(){
//         let num1 = 50
//         let num2 = 60
//         return num1 + num2
//     }

//     const result = inner() + num1 + num2;
//     return result
// }

// const result = outer()
// console.log(result);



// function recurse(){
//     recurse()         // RangeError: Maximum call stack size exceeded
// }
// recurse()



// let a = 10
// function fun() {
//     console.log(a);   // ReferenceError: Cannot access 'a' before initialization
//     let a = 6; 
// }
// fun()



//                                      ------>>>  Closure  <<<-------

// a closure is a feature where an inner function retains access to the variables of its outer (enclosing) function, even after the outer function has finished executing.



// function makeGreeting(greetingWord) {
  // Outer function scope
//   return function(name) {
    // Inner function scope
//     console.log(`${greetingWord}, ${name}!`);
//   };
// }

// makeGreeting completes execution and returns a new function
// const sayHello = makeGreeting("Hello"); 

// The inner function still remembers "greetingWord"
// sayHello("Alice"); // Output: Hello, Alice!



// function outer() {
//     let count = 0;
//     function counter() {
//         count += 1;
//         console.log(count);
//     }
// }

// const counter = outer();

// counter();                   // TypeError: counter is not a function



// function outer() {
//     let count = 0;
//     function counter() {
//         count += 1;
//         console.log(count);
//     }
//     return counter
// }

// const counter = outer();

// counter();  
// counter();  



// function outer() {
//     let count = 0;
//     function counter() {
//         count += 1;
//         console.log(count);
//     }
//     return counter
// }

// const counter = outer();
// const counter2 = outer();

// counter();  
// counter(); 
// counter2(); 
// counter2(); 
// counter2(); 
// counter2(); 
// counter(); 
// counter(); 