function password(obj){
    if(typeof obj !== "object" || !obj.name || !obj.birthYear || !obj.siteName ){
        return "invalid";
    }
    else if (typeof obj.birthYear !== "number"){
        return "invalid";
    }
    else if ( obj.birthYear.toString().length !== 4 ){
        return "invalid";
    }
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;
    const result = siteName.charAt(0).toUpperCase() + siteName.slice(1).toLowerCase() + "#" + name + "@" + birthYear;
    return result; 
}
console.log(password({ name: "maisha", birthYear: 2002 }))
// console.log(password())