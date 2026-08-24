// an object is a standalone entity that stores data as a collection of key-value pairs, where the key is a string (property name) and the value can be any data type. If a value inside an object is a function, it is called a method.

// let Product = ["t-shirt" , "lower" , "cap" , "shoes"];

// let product = {

//     'product-name' : "i-phone",
//     price : 59999,
//     avgRating : 4.5,
//     totalReview : 75,
//     discount : 10,
//     // method
//     printProductName : function(){
//         console.log("Iphone - 16 pro max");
//     },
//     printDiscount(){
//         console.log(this.discount);
//     }

// }

// console.log(product);

// console.log(product["product-name"]);

// console.log(product.price);

// console.log(product.avgRating);

// console.log(product.totalReview);

// console.log(product.discount);

// console.log(typeof product);

// product.printProductName();

// product.printDiscount();

// console.log(Object.keys(product));

// console.log(Object.values(product));

// console.log(Object.entries(product));


// for array ---->

// for of loop ---->
// for( value of Product ){
//     console.log(value);
// }

// for each method ---->  
// Product.forEach ( function ( value , index ){
//     console.log(value , index);
// })


// for object -->

// for in loop ---->  
// for ( value in product ){
//     console.log(value);
// }


// In array it will return index
// for ( value in Product ){
//     console.log(value);
// }

// for ( value in Product ){
//     console.log(Product[value]);
// }


// for ( value in product ){
//     console.log(product[value]);
// }


// destructuring of object & array ----->

// let Product1 = [59999, "iphone", 75, 10, 4.5]

// const [a,b,c,d,e,f] = [59999, "iphone", 75, 10, 4.5]

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);


// let product2 = {

//     'product-name' : "i-phone",
//     price : 59999,
//     avgRating : 4.5,
//     totalReview : 75,
//     discount : 10,
//     // method
//     printProductName : function(){
//         console.log("Iphone - 16 pro max");
//     },
//     printDiscount(){
//         console.log(this.discount);
//     }

// }

// let {printDiscount, avgRating, price} = product2;

// console.log(price);
// console.log(printDiscount());     there will be 2 undefined bcoz of this keyword & it doesnt return anything
// console.log(avgRating);


// for ( value of Object.keys(product2)){
//     console.log(value);
// }


// for ( value of Object.values(product2)){
//     console.log(value);
// }


// for ( [key,value] of Object.entries(product2)){
//     console.log(key , value);
// }

// rest operator & spread operator   ------>

// let Product1 = [59999, "iphone", 75, 10, 4.5]

// const [a,b,c,d,e,f] = [59999, "iphone", 75, 10, 4.5]

// let arr = [3433,23,34,324,34323,324]

// console.log(Math.min([3433,23,34,324,34323,324]));  ---> NaN
// console.log(Math.max([3433,23,34,324,34323,324]));  ---> NaN


// spread operatot --->  ... will unpack array

// console.log(arr);    
// console.log(...arr);  now it is unpack

// console.log(Math.min(...[3433,23,34,324,34323,324]));
// console.log(Math.max(...arr));

// let a = [1,2]
// let b = [3,4]

// let c = a + b
// let c = [...a , ...b]  // array merging by spread operator

// console.log(c);

// console.log(...c);



// rest operator --->

// it will pack rest element in array

// let Product1 = [59999, "iphone", 75, 10, 4.5]

// const [a,b,...c] = [59999, "iphone", 75, 10, 4.5]

// console.log(c);

// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(add(4,2));

// if there will be 1000 of numbers so u will do num1 + num2 + ... like that so it is not good

// function add(...numbers){
//     let total = 0;
//     for(value of numbers){
//         total += value;
//     }
//     return total;
// }

// console.log(add(4,2,23,3434,343));

// let product2 = {

//     'product-name' : "i-phone",
//     price : 59999,
//     avgRating : 4.5,
//     totalReview : 75,
//     discount : 10,
//     // method
//     printProductName : function(){
//         console.log("Iphone - 16 pro max");
//     },
//     printDiscount(){
//         console.log(this.discount);
//     }

// }

// let { price , avgRating , ...remaining } = product2

// console.log(remaining);