// find the max/min number

const nums = [45, 3, 33, 200, 30, 50];

let maxNum = nums[0];
let minNum = nums[0];

for( let i = 0;  i < nums.length ; i++){
    const currentNumber =nums[i];

    if(maxNum < currentNumber ){
        maxNum = currentNumber;
    }
    if( minNum > currentNumber){
        minNum = currentNumber;
    }
}
 console.log("Maximum Number is:", maxNum);
 console.log("Minimum NUmber is:", minNum);