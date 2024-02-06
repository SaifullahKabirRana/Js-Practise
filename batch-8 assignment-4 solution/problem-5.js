/**
 * make a function named as "canPay()", this will take two input parameters
 * make sum of all the elements of the array.
 * if the sum is greater than equal second input parameters , return true
 * else return false
 * 
 * if first input is an empty array, return error message
 */

function canPay(changeArray, totalDue){
    if(changeArray.length === 0){
        return "Your array is empty";
    }
    let sum = 0;
    for(const array of changeArray){
        sum += array;
    }
    if(sum >= totalDue){
        return true;
    }
    else{
        return false;
    }
}
console.log(canPay( [1,5,5],10));