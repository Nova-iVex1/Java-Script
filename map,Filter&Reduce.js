// they are Immutable & array methods

// let originalPrices = [463, 2346, 654]

// let discountPrices = []

// for( value of originalPrices ){
//     discountPrices.push ( value * 0.9 )    // ( 100% -> 1 )  &  ( 10% -> 0.1 )  ---->  ( 1 - 0.1 )  =  0.9
// }

// console.log(originalPrices);
// console.log(discountPrices);




// Map  ----> 

// const discountPrices2 = originalPrices.map ((value) => value * 0.9)

// console.log(discountPrices2);




// Array of objects : 

// let student = [
//     {
//         name : "ayaan",
//         marks : 56
//     },
//     {
//         name : "Mansi",
//         marks : 46
//     },
//     {
//         name : "sid",
//         marks : 33
//     },
//     {
//         name : "Shivam",
//         marks : 38
//     } 
// ]

// let studentNames = []

// student.forEach(( value ) => {
//     studentNames.push(value.name)
// })

// console.log(studentNames);


// const studentNames = student.map((value) => value.name)
// const studentMarks = student.map((value) => value.marks)

// console.log(studentNames);
// console.log(studentMarks);


// const upgradedMarks = student.map((value) => value.marks + 10)
// console.log( upgradedMarks );

// const upgradedMarks = student.map ( student => ({ ...student , marks : student.marks + 10 }) )
// console.log(upgradedMarks);




// filter  ----->

// let student = [
//     {
//         name : "ayaan",
//         marks : 56
//     },
//     {
//         name : "Mansi",
//         marks : 46
//     },
//     {
//         name : "sid",
//         marks : 33
//     },
//     {
//         name : "Shivam",
//         marks : 38
//     },
//     {
//         name : "Sachin",
//         marks : 28
//     } 
// ]

// let failedStudent = []

// student.forEach((value) => {
//     if ( value.marks < 35 ){
//         failedStudent.push(value)
//     }
// })

// console.log(failedStudent);



// const failedStudent = student.filter((student) => student.marks < 35)
// const failedStudent2 = student.map((student) => student.marks < 35)   // [ false, false, true, false, true ]

// console.log(failedStudent);
// console.log(failedStudent2);

// const failedStudent = student.filter( (student) => student.marks < 35 ).map( (student) => student.name )
// console.log(failedStudent);




// reduce  ------>  return single value (num , boolean , object , array ,...)

// let marks = [56, 24, 62, 73, 78]


// let totalMarks = 0
// marks.forEach( (mark) => totalMarks += mark )
// console.log(totalMarks);


// const totalMarks = marks.reduce( ( accumulator, currentValue ) => {
//     accumulator = accumulator + currentValue
//     return accumulator
// }, 0 )

// const totalMarks = marks.reduce( ( accumulator, currentValue ) => accumulator + currentValue , 0 )

// console.log(totalMarks);

// const totalMarks = student.reduce( ( totalMarks, student ) => totalMarks + student.marks , 0 )



// const attendence = [ "present" , "present" , "absent" , "present", "absent" ]

// let obj = {}

// attendence.forEach(( value ) => {

//     if (obj[value]) 
//         obj[value] += 1
//     else 
//         obj[value] = 1

// })

// console.log(obj);



// const obj = attendence.reduce((acc , value) => {

    // if (acc[value]) acc[value] += 1
    // else acc[value] = 1
    // return acc

//     acc[value] = (acc[value] || 0) + 1 ;
//     return acc

// }, {})

// console.log(obj);


// map() -> Transforms each Element, The new value for the element, New array, Same as original
// filter() -> Selects specific elements, true (keep) or false (discard), New array, Less than or equal to original
// reduce() -> Combines elements into one value, Updated accumulator value, Single value (any type), Exactly 1 value