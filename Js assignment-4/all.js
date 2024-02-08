function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return "Invalid Number";
    }
    const ticketPrice = 120;
    const watchmanPrice = 500;
    const staffPrice = 50;
    const staffValue = 8;

    const ticketTotalPrice = ticketSale * ticketPrice;
    const staffTotalPrice = staffValue * staffPrice;
    const result = ticketTotalPrice - (watchmanPrice + staffTotalPrice);
    return result;
}

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

function monthlySavings(arr , livingCost){
    if(Array.isArray(arr) === false){
        return "invalid input";
    }
    else if(typeof livingCost !== "number"){
        return "invalid input";
    }
    let sum = 0;   
    for(let element of arr){
        let bankTask = element * (20 / 100) ;
        if(element >= 3000){
            sum = sum + element - bankTask;            
        }
        else{
            sum = sum + element;
        }       
    }
    let moneyLeft = sum - livingCost;
    if( 0 > moneyLeft){
        return "earn more";
    }
    else{
        return moneyLeft;
    }       
}