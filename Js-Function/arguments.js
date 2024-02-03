function doubleIT(number){
    const doubled = number * 2;
    console.log( number , doubled);
}
console.log('I will call the function')
doubleIT(14);
console.log("----------------");
doubleIT(20);
console.log('----------------');
doubleIT(30);
const number = 55;
doubleIT(number);
const money = 200;
doubleIT(money);


function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1 , num2, 'difference is', diff);
}
const fatherAge = 40;
const myAge = 10;
difference(fatherAge, myAge);