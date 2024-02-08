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
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));