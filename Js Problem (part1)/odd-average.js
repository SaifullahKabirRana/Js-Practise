/**
 * function takes an array as parameter
 * give me the average of the odd number in the array
 */


function oddAverage(numbers) {
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;

}
const numbers = [70, 33, 32, 54, 37, 21, 19, 7];
const result = oddAverage(numbers);
console.log( "average of the odd number is:",result);