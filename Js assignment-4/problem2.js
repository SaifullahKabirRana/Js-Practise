function checkName(names){
    if(typeof names !== "string"){
        return "invalid";
    }
    const goodWord = ["a", "y", "i" , "e" , "o", "u", "w"];
    const lastItem =names[names.length - 1].toLowerCase();    
       
            if(goodWord.includes(lastItem)){
                return "Good Name";
            }
            else{
                return "Bad Name";
            }              
}
console.log(checkName(["Rashed"]));