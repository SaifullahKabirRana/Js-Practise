// filter an array

const purchaseHistory = [100, 300, 500, 150, 125];
// using loop
// const filterPurchaseHistory = [ ];
// for(let i = 0 ; i < purchaseHistory.length ; i++){
//     const currentElem = purchaseHistory[i];
//     if(currentElem <= 200){
//         filterPurchaseHistory.push(currentElem);
//     }           
// }
// console.log(filterPurchaseHistory);

// Using .filter()
const filterPurchaseHistory = purchaseHistory.filter(function (currentElem) {
    return currentElem <= 200;
} )
console.log(filterPurchaseHistory);