const products = [
    { name: 'shampoo', price: 300, quantity: 5 },
    { name: 'shirt', price: 500, quantity: 2 },
    { name: 'pant', price: 700, quantity: 3 },
    { name: 'shoes', price: 1200, quantity: 2 }
]
function cardTotal(products) {
    let total = 0;
    for (const product of products) {
        const productCost = product.price * product.quantity;  //compare price
        total = total + productCost;
    }
    return total;
}
const shoppingCost = cardTotal(products);
console.log("total price:", shoppingCost);