/**
 * object : right a function to give me the sum of all numbers in an array 
 * step-1 : declare a function
 * step-2 : call check whether the function is called properly
 * step-3 : set a parameter(s)
 * step-4 : pas the parameter(s), check whether parameters is passed in a proper format 
 */


function sumOfNumbers(numbers) {
    let sum = 0;
    for( const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;

}
const numbs = [4, 5, 2, 6];
const sum = sumOfNumbers(numbs);
console.log('sum of number is:', sum)