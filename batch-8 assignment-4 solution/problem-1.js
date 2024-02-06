/**
 * Make cube of a provided number :
 * 1. function will receive a parameter which will be a parameter
 * 2. convert the number to cube.
 * 3. return the result.
 * 4. return error message if we get other data types instead of number.
 */

function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'Please provide a number.'
    }
    const result = Math.pow(number, 3);
    return result;
}
const cube = cubeNumber(2);
console.log(cube);