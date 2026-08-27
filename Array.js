// an array is a global object used to store ordered collections of data. They are zero-indexed, dynamically resizable, and can hold a mixture of different data types simultaneously

// let Products = ["t-shirt" , "lower" , "cap" , "shoes"];

// console.log(Products);

// console.log(Products[0]);
// console.log(Products[1]);
// console.log(Products[2]);
// console.log(Products[3]);

// console.log(Products[4]);  -> undefined

// console.log(Products.length);

// let str  = "Ayan Sid";
// console.log(str.length);

// let n = Products.length;
// console.log(Products[n-1]);

// console.log(Products[Products.length-1]);

// console.log(Products.at(-1));

// console.log(Products.at(-4));

// for(let i=0; i<n; i++){
//     console.log(Products[i]);
// }



// let products = [["t-shirt", 569], ["lower", 459], ["cap", 199], ["shoes", 1500]];

// for(let i=0; i<products.length; i++){
//     for(let j=0; j<products[0].length; j++){
//         process.stdout.write(products[i][j] + " ");
//     }
//     console.log(" ");
// }

// let Products = ["t-shirt" , "lower" , "cap" , "shoes"];

// Products.push("shirt")

// Products.pop()

// Products.unshift("shirt")

// Products.shift()

// console.log(Products);


//                                 ---------->>>    Splice    <<<----------

// let arr = [1,2,3,4,5,6]

// delete ----->>

// .splice (index, deleteCount)
// arr.splice(2,1)
// console.log(arr);

// arr.splice(1,3)
// console.log(arr);



// add ---->>

// .splice (index, deleteCount, add)
// arr.splice(3, 0, 2)
// console.log(arr);

// arr.splice(0, 0, 5)
// console.log(arr);

// arr.splice(1, 0, "Ayan")
// console.log(arr);



// replace --->>

// arr.splice(0, 1, "hello")
// console.log(arr);

// arr.splice(3, 3, "hello")
// console.log(arr);



//                                 ---------->>>    Slice    <<<----------

// let arr1 = [1,2,3,4,5,6]

// .slice(start , end)

// let trimArr = arr1.slice(0,3)   // I M M U T A B L E 
// console.log(trimArr);

// let trimArr = arr1.slice(0,6)
// console.log(trimArr);

// let trimArr = arr1.slice()
// console.log(trimArr);

// indexOf  ------>

// console.log(arr1.indexOf(5));  // return index if value is present
// console.log(arr1.indexOf(8));  // -1 if value isnt present



// find ------> 

// let res = arr1.find((value) =>{
//     return value === 5
//     // return value === "5"   // -> return undefined if value is not present
// })
// console.log(res);



// findIndex  ------>

// let resIndex = arr1.findIndex((value) =>{
//     return value === 5
//     // return value === "5"   // -> return -1 if not present 
// })
// console.log(resIndex);



// flat  ----> 

// let arr = [ 1, 2, 3, 4, 5, [ 6, 7, 8, [ 9, 10, 11 ] ] ]

// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));



// mutability ---->  changable

// let arrx = [4,5,6,]

// let arrCopy = arrx   // --> Array is pass by refrence
// let arrCopy = [...arrx]

// arrCopy.pop()

// console.log("arrx", arrx);        // -> OP : [ 4, 5 ] 
// console.log("arrCopy", arrCopy);  // -> OP : [ 4, 5 ]

// EG : splice , pop , unshift , shift , push , etc



// immutabilty   ---->  non-changable

// let arr1 = [1,2,3,4,5,6]

// let trimArr = arr1.slice(0,3)
// console.log(trimArr);

// EG : slice , etc