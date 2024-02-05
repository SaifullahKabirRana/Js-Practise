/**
 * chair ---> 3 cft
 * table ---> 10 cft
 * bed ---> 50 cft
 */
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const wood = woodQuantity(0, 0, 4);
console.log('wood needed', wood);


/**
 * shirt price --> 500
 * pant price --> 300
 * shoes price --> 900
 */
function shoppingPrice( shirtQuantity, pantQuantity, shoesQuantity){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoesPrice = 900;

    const totalShirtPrice = shirtQuantity * shirtPrice;
    const totalPantPrice = pantQuantity * pantPrice;
    const totalShoesPrice = shoesQuantity * shoesPrice;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;
    return totalPrice;
}
const quantity = shoppingPrice(5,5,3);
console.log( "shopping price",quantity);