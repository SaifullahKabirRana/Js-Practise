/**
 * array has some duplicate elements
 * []
 */

const biriyaniKhor = ['abul', 'babul', 'cabul', 'abul', 'bablu','babul','dabul'];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);