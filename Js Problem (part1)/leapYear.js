/**
 * SIMPLE LOGIC:
 * year will be a leap year if the year is divisible bye 4
 */

function isLeapYear(year){
     if (year % 4 === 0){
        return true;
     }
     else{
        return false;
     }
}
const islipi = isLeapYear(2052);
console.log(islipi);

/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4 : then it will be a leap year.
 * 2. if the year is divisible by 400, then it is a leap year
 * 3.else it is not a leap year
 */

function isLeapYear2(year){
    if( year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if (year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeap = isLeapYear2(2400);
const isLeap2 = isLeapYear2(2023);
const isLeap3 = isLeapYear2(2024);
const isLeap4 = isLeapYear2(2025);
const isLeap5 = isLeapYear2(2026);
const isLeap6 = isLeapYear2(2027);
const isLeap7 = isLeapYear2(2028);
const isLeap8 = isLeapYear2(2029);
console.log(isLeap, isLeap2 , isLeap3, isLeap4, isLeap5, isLeap6, isLeap7, isLeap8);