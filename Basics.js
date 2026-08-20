// console.log("Hello, World!");
// console.log(5 + 4);
// console.log(5 * 4);
// console.log("5 + 4");
// console.log("5 * 4 =" , 5 * 4);



//                              ------->>>>  Variables  <<<<--------
// age = 21;
// console.log(age);

// name = "Ayan";
// console.log(name);

// console.log(age,name);



//                          ------>>>>>   var, let, and const   <<<<-------
// var age = 21;
// console.log(age);
// var age = 19; re-declaration is allowed
// age = 26 Updation is allowed
// console.log(age);

// let name = "Ayan";
// console.log(name);
// let name = "Sid";  re-declaration is not allowed
// name = "Sid";  Updation is allowed
// console.log(name);

// const aadharCard = 84394884489;
// console.log(aadharCard);
// const aadharCard = 36437843626; re-declaration is not allowed
// aadharCard = 84394884489; updation is not allowed
// console.log(aadharCard);



//                                 ------->>>>  Data Type  <<<<--------
// let clgName = "xyz university";
// console.log(clgName);
// console.log(typeof clgName);

// let mobileNumber = 3948438327;
// console.log(typeof mobileNumber);

// const doubleQuote = "hyy ayan";
// const singleQuote = 'hiii ayan';
// const templateLiteral = `hello ayan
// sid`;
// console.log(doubleQuote);
// console.log(singleQuote);
// console.log(templateLiteral);

// const userName = "ayan"
// const userName = "sadiq"
// const greetingMessage = `hello, ${userName}`;
// console.log(greetingMessage);

// const userName = "sadiq"
// const greetingMessage = `hello, ${console.log("nested console.log")}`;
// console.log(greetingMessage);

// let user;
// console.log(user);
// console.log(typeof user);

// let products = null;
// console.log(products);
// console.log(typeof products);

// let isAdult = true;
// console.log(isAdult);
// console.log(typeof isAdult);



//                                 ------->>>>  Operators  <<<<--------

// I. ARITHEMATIC OPERATORS ->  + , - , * , / , ** , %

// let num1 = 4;
// let num2 = 2;

// console.log(num1  +  num2);
// console.log(num1  -  num2);
// console.log(num1  *  num2);
// console.log(num1  /  num2);
// console.log(num1  ** num2);
// console.log(num1  %  num2);

// post-increment
// let num = 45;
// num++;
// console.log(num);

// post-decrement
// let num = 45;
// num--;
// console.log(num);

// pre-increment
// let num = 45;
// ++num;
// console.log(num);

// pre-decrement
// let num = 45;
// --num;
// console.log(num);

// let num = 45;
// console.log(++num);  -> 46
// console.log(num++);  -> 46

// let num = 45;
// console.log(num++);  -> 45
// console.log(++num);  -> 47

// let num = 45;
// console.log(--num);  -> 44
// console.log(num--);  -> 44
// console.log(num);    -> 43


// II. ASSIGNMENT OPERATORS  -> = , += ,  -= , *= , /= , %= , **= 

// let num = 2;
// num += 5;          // num = num + 5;
// console.log(num);
// num *= 2;          // num = num * 2;
// console.log(num);
// num -= 5;          // num = num - 2;
// console.log(num);
// num /= 9;          // num = num / 2;
// console.log(num);
// num **= 4;         // num = num ** 2;
// console.log(num);
// num %= 1;          // num = num % 2;
// console.log(num);

// let num = 2;
// num =- 5;            // It is updation not assignment operator
// console.log(num);


// III. COMPARISON OPERATORS -> > , < , >= , <= , == , != , ===

// const num1 = 3;
// const num2 = 5;

// console.log(3 > 6)
// console.log(3 < 6)
// console.log(3 >= 6)
// console.log(6 <= 6)
// console.log(3 == 6)
// console.log(3 != 6)

// loose equality
// console.log("6" == 6)   -> true

// strict equality
// console.log("6" === 6)  -> false


// IV. LOGICAL OPERATORS    --->    &&  ,  ||  ,  !

// console.log(true && true)
// console.log(true && false)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)
// console.log(!true)
// console.log(!false)

// const age = 20;
// const hasID = true;
// const canEnterClub = (age >= 18 && hasID === true);
// console.log(canEnterClub);

// console.log(!56);

// console.log(!0);

// console.log(!"")

// falsy -> by default false
// 0 , "" , null , undefined , NaN , false

// console.log("Ayan" / 30);
// console.log(typeof NaN);