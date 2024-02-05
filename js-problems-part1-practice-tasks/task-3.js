// Task-3:
// Write a function to count the number of vowels in a string.

function countVowels(numbers, vowels) {
    let count = 0 ;
    for (const number of numbers) {
        if (vowels.includes(number) ) {
            count++;
        }
    }
    return count;
}
const numbers = ['a', 'b', 'c', 'd', 'e', 'i', 'v', 'z', 'o', 'w', 'g']
const vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(countVowels(numbers, vowels));