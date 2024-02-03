// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let concatenate_numbers = '';
for(const num of numbers){
    concatenate_numbers = concatenate_numbers + num;
}
console.log(concatenate_numbers);



