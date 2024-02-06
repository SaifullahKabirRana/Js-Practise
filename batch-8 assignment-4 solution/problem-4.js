/**
 * 1. define a function name as 'findAddress()' which will take an object an input
 * 2. access the elements of the object.
 * 3. formation the string as give sample - "10,15A,Earth Perfect"
 * 4. replace the missing property with __ 
 */

function findAddress(obj){
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__"; 

    const str = street + "," + house + "," + society;
    return str;
}
console.log(findAddress({street: 10,  society: "Earth Perfect"}));