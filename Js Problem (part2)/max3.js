const jim = 67;
const kim = 92;
const tim = 98;

if (jim > kim && jim > tim) {
    console.log('jim is the boss');
}
else if (kim > jim && kim > tim) {
    console.log('kim is the boss');
}
else {
    console.log('tim is the boss');
}

const max = Math.max(12, 45, 67, 89, 27, 92, 99, 47, 98);
console.log('max isUsing Math.max', max);

// function 
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const maxNumber = maxOfThree(33, 78, 92);
console.log("the max number is", maxNumber)