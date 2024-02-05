// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsToFahren(celsius) {
    const fahren = (celsius * 9 / 5) + 32;
    return fahren;

    // const fahren = celsius * 9;
    // const fahren2 = fahren / 5;
    // const fahren3 = fahren2 + 32;
    // return fahren3; 

}
const celsius = celsToFahren(0);
console.log(celsius, "fahrenheit");