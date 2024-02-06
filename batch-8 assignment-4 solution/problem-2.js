/**
 * we will write a function name as "matchFinder()" which will take two input
 * will try to find match between the two string
 * return true/false based on the match
 * return error message if the parameters are not string
 */

function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "Please specify string as input parameter"
    }
    const result = string1.includes(string2);
    return result;
}
console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "code"));
console.log(matchFinder("Peter Parker", "pen"));
console.log(matchFinder("Peter Parker", "pet"));
console.log(matchFinder(2,3));


