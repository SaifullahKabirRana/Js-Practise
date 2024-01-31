const country = "Bangladesh";
const division = "Dhaka";
const district = "Chittagong";
const thana = new String("Chandanish")
 
// console.log(thana)

// array is mutable --> you can change the array elements
const numbers = [54, 98, 78, 21, 65];
console.log(numbers);
// console.log(numbers.length);
// console.log( numbers[1])
numbers[1] =11;
console.log(numbers)

// string is immutable --> not changeable
const capital = "Dhaka"
// console.log(capital.length);
// console.log(capital[2]);
console.log(capital);
capital[1] = "q";
console.log(capital)