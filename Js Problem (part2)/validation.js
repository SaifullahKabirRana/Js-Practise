function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number'
    }
    const multi = num1 * num2;
    return multi;
}
const result = multiply(6, 9);
// console.log(result);

function fullName(first, last) {
    if (typeof first !== 'string') {
        return 'First name should be a string';
    }
    else if (typeof last !== 'string') {
        return 'Last name should be a string';
    }
    const full = first + " " + last;
    return full;
}
// const full = fullName("Saifullah", "Kabir");
// console.log(full);

function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please provide an object';
    }
    const price = product.price;
    return price;
}
const product = getPrice(20)
// const product = getPrice({ name: 'culkani dandi', price: 35, color: 'blue' });
// console.log(product);

function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please provide an array';
    }
    const second = numbers[1];
    return second;
}
const second = getSecond([34,12,34]);
console.log(second);