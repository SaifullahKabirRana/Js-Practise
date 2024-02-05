// max number
const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const max = getMax(heights);
console.log('max value is', max);


// min number
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const numbers = [98, 23, 45, 33, 2, 55, 43, 56, 23];
const minNumber = getMin(numbers);
console.log('min value is', minNumber);