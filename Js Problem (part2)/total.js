const products = [
    { name: 'shampoo', price: 300 },
    { name: 'shirt', price: 500 },
    { name: 'pant', price: 700 },
    { name: 'shoes', price: 1200 },
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price    // compare price
    }
    return total;
    
}
const total = getShoppingTotal(products);
console.log('total price:', total);