// 12 inch = 1 fit;

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const ranaHeight = inchToFeet(70);
console.log(ranaHeight)

// feet & inch 
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " fit " + inchRemaining + " inch.";
    return result;

}
const ranaHeight2 = inchToFeet2(68);
console.log(ranaHeight2);

// miles to kilometers
function milesToKillo(miles) {
    const killo = miles * 1.609344;
    return killo;
}
const result = milesToKillo(10);
console.log(result, "km")

// kilometers to miles
function killoToMiles(killo){
    const miles = killo * 0.621371192;
    return miles;
}
const result2 = killoToMiles(20);
console.log(result2, "miles")