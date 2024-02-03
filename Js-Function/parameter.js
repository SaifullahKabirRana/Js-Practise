// 3-----> 3*3 = 9;
// 6-----> 6*6 = 36;
// 5-----> 5*5 = 25;

function square(number) {
    console.log("value of the number parameter ", number);
    const borgo = number * number;
    console.log("square of the given number is:", borgo);
}
square(12);
console.log("-------------------------");
square(33);
square(10);


function add(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}
add(10, 20);
add(30, 70);

function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(total);
}
addAll(20, 2, 3, 4, 5)
addAll(30, 3, 3, 3, 5)