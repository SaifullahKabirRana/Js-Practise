
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
console.log(calculateMoney(-130));