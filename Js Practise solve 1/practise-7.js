// Calculating Discount
const purchaseHistory = [100, 300, 500, 150, 125];
const discountedPrice = [];
for(let i = 0; i < purchaseHistory.length; i++){
    const currentElem = purchaseHistory[i];
    if( currentElem > 200){
        const calculatedDiscount = currentElem - currentElem * 10/ 100;
        discountedPrice.push(calculatedDiscount);
    }
    else{
        discountedPrice.push(currentElem);
    }
}
console.log(discountedPrice);
