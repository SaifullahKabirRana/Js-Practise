// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

// 1.
function repeatNumbers(numbers, find) {
    let count = 0;
    for (const number of numbers) {
        if (number === find) {
            count++;
        }
    }
    return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const find = 5;
console.log(repeatNumbers(numbers, find));

// 2.
function repeatNumbers2(numbers2, find2) {
    let count = 0;
    for (const number of numbers2) {
        if (number === find2) {
            count++;
           
        }
    }
    return count;
}
const numbers2 = [5, 6, 11, 12, 98, 5]
const find2 = 25;
console.log(repeatNumbers2(numbers2, find2))