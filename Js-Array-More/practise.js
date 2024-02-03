// while loop
// let i = 1;
// let sum = 1;
// while (i <= 5) {
//     sum *= i; //sum = sum * i
//     i++;
// }
// console.log(sum)

//for loop
// const nums = [32, 45, 555, 45, 670, 880, 32, 345]

// let sumOfOdd = 0;
// let sumOfEven = 0;
// for (let i = 0; i < nums.length; i++) {
//     const x = nums[i];  // array[indexNumber]

//     if (x % 2 === 0) {
//         sumOfEven += x;
//     }
//     else {
//         sumOfOdd += x;
//     }
// }
// console.log(sumOfEven , sumOfOdd)

// const nums = [32, 55, 45, 60, 80, 320, 450],

// for(let i of nums){
//     console.log(i);
//     if( i === 320){
//         break;
//     }
// }

const nums = [32, 55, 45, 60, 80, 320, 450];

for(let item of nums){
    if(item % 2 === 1){
        continue;
    }
    console.log(item);
}
