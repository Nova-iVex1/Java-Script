// "use strict"
// let student = {
//     name : "Ayaan",
//     printName : function() {
//         console.log(name);     // ReferenceError: name is not defined
//     }
// }

// student.printName()


// let student = {
//     name : "Ayaan",
//     printName : function() {
//         console.log("Hii", this.name);
//     }
// }

// student.printName();   // print :  Hii Ayaan

// let result = student.printName;
// result();   // Hii undefined



// console.log(this);

// function fun1(){
//     console.log(this);
// }

// fun1();



// let product = {
//     name : "iphone",
//     printName : () => {
//         console.log(this.name);
//     }
// }
// product.printName()



// let product = {
//     name : "iphone",
//     printName : function (){
//         const print = () => {
//             console.log(this.name);
//         }
//         print()
//     }
// }
// product.printName()



// let nestedFunction = {
//     name: "Something",
//     fun: function () {
//         let product = {
//             printName: function () {
//                 const print = () => {
//                     console.log(this.name);
//                 }
//                 print()
//             }
//         }
//         product.printName()
//     }
// }

// nestedFunction.fun()



// let nestedFunction = {
//     name: "Something",  
//     fun: function () {
//         let product = {
//             name : "Ayan",
//             printName: () => {
//                     console.log(this.name);
//                 }
//         }
//         product.printName()
//     }
// }

// nestedFunction.fun()


//                                 -------->> Coercion <<--------

// console.log("5" + 4);

// console.log("2" * 5);

// console.log(5 - "10");

// console.log(true + 1);   // true -> 1     |     false -> 0

// console.log(true - true);

// console.log([] + []);

// console.log([] + {});



// console.log("Hii" - 6);

// console.log(NaN == NaN);   // false
// console.log(NaN === NaN);   // false
// console.log({} == {});   // false

// console.log(Number.isNaN("Hii" - 6));



// console.log(Number("5") + 4);  // Explicit

// console.log(Number("5434h"));   // NaN



// falsy value -> false , 0 , undefined , null , " " , NaN
// truthy value -> except falsy everything is truthy


// console.log(!!!!"");  // ""  ->  false    &  ! ->  logical not operator

// console.log(!![]);  // true

// console.log(!!0);   // false

// console.log(!!"0"); // true

// console.log(!NaN);