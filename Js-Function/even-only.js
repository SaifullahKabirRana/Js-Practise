// return the sum  of even numbers

function evenNumbersOnly(numbers) {
    const even = [];
    for ( const number of numbers){
        if(number % 2 === 0){
            even.push(number)
        }
    }
    return even;
}

const numbers = [40, 4, 5, 20, 13, 67];
// const even =  evenNumbersOnly(numbers);
// console.log( "even number are:",even);


function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumOfEvenNumbers(numbers);
console.log(sum);



