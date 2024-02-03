// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddOrEven(numbers){
    
    if(numbers % 2===1){
        odd = numbers * 2;
        return odd;
    }
    else{
        even = numbers / 2;
        return even;
    }
}
const result = oddOrEven(22);
console.log(result);