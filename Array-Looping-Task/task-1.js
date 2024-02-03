// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// 1. simple reverse
// const reversed = colors.reverse();
// console.log(reversed)

// 2. for-of looping
const reverse_colors = [];
for(const color of colors){
    reverse_colors.unshift(color)
}
// console.log(reverse_colors);

// 3. for loop
const reverse_colors2 = [];
for(let i = 0; i < colors.length; i++){
    const color = colors[i];
    reverse_colors2.unshift(color);
}
console.log(reverse_colors2); 

// 4. while loop
const rev_rev_colors = [];
let i = 0;
while( i < colors.length){
    const color = colors[i];
    rev_rev_colors.unshift(color);
    i++;
}
console.log(rev_rev_colors);