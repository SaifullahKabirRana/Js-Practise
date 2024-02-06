// 1. make a function name as sortMaker(), which will take an array as input.
// 2. access the elements of the input array.
// 3. if any elements is negative return 'Invalid Input'.
// 4. if elements are equal, then return equal
// 5. if elements are not equal, then return in descending order.

function sortMaker(arr) {
    const [a, b] = arr;
    if (a < 0 || b < 0) {
        return 'Invalid Input';
    }
    if (a === b) {
        return "equal"
    }
    if (a > b) {
        return [a, b];
    }
    else {
        return [b, a];
    }
}
console.log(sortMaker([4,5]));
console.log(sortMaker([6,5]));
console.log(sortMaker([0,5]));
console.log(sortMaker([-3,5]));
console.log(sortMaker([5,5]));
