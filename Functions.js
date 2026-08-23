// a reusable block of code designed to perform a specific task.

// function definition  ---->
// function function_name(){
    // code;
// }

// function call --->
// function_name();


// EG ->
// function greet(){
//     console.log("hello");
// }

// greet();
// greet();
// greet();




// Argumnets & Parameters  --->

// a parameter is the variable listed in the function's definition, 
// while an argument is the actual value passed to the function when it is called.

// EG ->

// function totalMarks(studentName, math, science, hindi, engish){
    // console.log(`${ studentName } totalMarks : `, math + science + hindi + engish);
    // console.log(studentName,`totalMarks : `, math + science + hindi + engish);
// }

// totalMarks("Alok", 95, 57, 81, 60);
// totalMarks("Nishant", 73, 66, 98, 49);
// totalMarks("Karan", 83, 57, 80, 56);
// totalMarks("Anu", 50, 89, 63, 48);



// function greet(greetings, name){
//     console.log(greetings, name);
// }

// greet("hello", "Priyanshu")
// greet("hey", "Ayan")
// greet("Hii", "Satyam")
// greet("Kemcho", "Anshika")




// Dafault Parameter ---->

// function greet(name = "Guest", greetings = "Hii"){
//     console.log(`${greetings}, ${name}`);
// }

// greet("Priyanshu","hello")
// greet()
// greet("Ayan","kemcho")
// greet("Anshika")




// return keyword ---->

// function totalMarks(math, science, hindi, engish){
//     return math + science + hindi + engish;
// }

// function calPercentage(studentName, math, science, hindi, engish){
//     let total_marks = totalMarks(math , science , hindi , engish);
//     let Percentage = (total_marks / 400) * 100;
//     console.log(` ${studentName} Percentage = `, Percentage);
// }

// calPercentage("Alok", 95, 57, 81, 60);
// calPercentage("Nishant", 73, 66, 98, 49);
// calPercentage("Karan", 83, 57, 80, 56);
// calPercentage("Anu", 50, 89, 63, 48);



// function log(name){
    // console.log(name);
    // return name;
// }

// log("ayan");
// console.log(log("ayan"));




// function expression ---->
// let add = function(num1 , num2){
//     return num1 + num2;
// }

// console.log(add(5,2))




// function declaration ---->
// console.log(fun1())

// function fun1(){
//     console.log("function declaration")
// }




// arrow function  ----->

// Syntax_1
// let add = num1 => num1 + 4;

// Syntax_2
// let add = (num1 , num2) => num1 + num2;

// Syntax_3
//  let add = (num1 , num2) => {
        // statement-1
        // statement-2
//     return num1 + num2;
//  };

// console.log(add(5,2))




// function convertToPositiveNumber(num){
//     return -num;
// }

// let positiveNumber = convertToPositiveNumber(-5);

// console.log(positiveNumber);


// let positiveNumber = Math.abs(-10);
// console.log(positiveNumber);

// console.log(Math.abs(-8));


// console.log(Math.max(10,20,30,40)) 

// console.log(Math.min(10,20,30,40))

// console.log(Math.sqrt(9));

// console.log(Math.tan(45));

// console.log(Math.PI);

// console.log(Math.pow(2, 4));

// console.log(Math.floor(4.5));

// console.log(Math.log(10));

// console.log(Math.cbrt(8));

// console.log(Math.ceil(4.1));

// console.log(Math.round(4.5));
// console.log(Math.round(6.3));

// console.log( Math.random() );

// console.log(Math.random() + 1);

// let min = 1000;
// let max = 9999;
// let result = Math.floor(Math.random() * (max - min + 1)) + min

// console.log(result)

//                             -------->>>  Number  <<<---------

// console.log(Number.isFinite(35));
// console.log(Number.isFinite(Infinity));

// console.log(Number.parseInt("56"));
// console.log("56");

// console.log(423.4254.toFixed(2));

// console.log(423.4254.toPrecision(5));

// console.log(423.4.toExponential(4));

//                               -------->>>  String  <<<---------

// console.log("ayan khan".toUpperCase());

// let str = "Hello frnds"
// console.log(str.includes("frnds"));
// console.log(str.includes("ell"));

// let email = "example@email.com"
// console.log(email.includes("@") && email.includes("."));

// let fileName = "Image.sdfge"
// console.log(fileName.endsWith(".png") || fileName.endsWith(".jpg"));

// let greet = "hellooo friends , hellooo ayan  "
// console.log(greet.replace("hellooo" , "Hyy"));
// console.log(greet.replaceAll("hellooo" , "Hyy"));

//                               -------->>>  Date  <<<---------

// console.log(Date.now());
// unix timestamp
// seconds since jan 01 1970

// let date = new Date();

// console.log(date.getDay());

// console.log(date.getMonth());

// console.log(date.getDate());

// console.log(date.getFullYear());

// console.log(date.toLocaleDateString());

// console.log(date.toLocaleTimeString());

// console.log(date.toLocaleString());