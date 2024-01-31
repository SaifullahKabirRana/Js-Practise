/**
 * TERNARY ==> three parts
 * 
 *    ?     :
 * condition ? do something when true : do something when false
 */

const age = 20;
// normal if else

// if (age >= 18){
//     console.log('you can vote.');
// }
// else{
//     console.log('jaw bacca ghumaw');
// }

// simple ternary 
// age >=18 ? console.log('vote dio') : console.log('ghumaw')

let price = 6000;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100;

// optional semi advance ternary

if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}
// price > 1000 ? price / 2 : 0

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
console.log(price);