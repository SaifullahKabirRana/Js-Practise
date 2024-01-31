// sum of array elements

let nums = [10 , 20, 30, 40, 50];
let sum = 0;
for(let i = 0 ; i < nums.length; i++){
    const currentNumber = nums[i];
    
    sum = sum + currentNumber;
    console.log(sum);
}
console.log('total number is :', sum);


