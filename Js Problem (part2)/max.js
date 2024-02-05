const disha = 5;
const salman = 80;

if (disha > salman) {
    console.log('Disha will get the strawberry');
}
else {
    console.log('salman wil get the strawberry');
}

// inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
const max1 = getMax(80, 96);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max1, max2)
console.log('max of two is:', ultimateMax)