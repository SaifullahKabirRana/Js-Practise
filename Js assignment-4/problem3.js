function deleteInvalids(array){
    if(Array.isArray(array) === false ){
        return "Invalid Array";
    }

    let number = [];
    for(const arr of array){
        if( typeof arr === "number" && !isNaN(arr)){
            number.push(arr);
        }
    }
     return number;
}
console.log(deleteInvalids([ 1 , 2 , 3 ]));