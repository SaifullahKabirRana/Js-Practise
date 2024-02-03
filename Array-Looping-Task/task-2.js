// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

let numbers = [12, 98, 5, 41, 23, 78, 46];

let evenNumbers = [];
for (const num of numbers){
    if(num % 2 === 0){
    evenNumbers.push(num);
        
    }
}
console.log(evenNumbers);
