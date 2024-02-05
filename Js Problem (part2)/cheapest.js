const phones = [
    { name: 'Samsung', price: 20000, camera: '16mp', color: 'black' },
    { name: 'Xiaomi', price: 14999, camera: '50mp', color: 'black' },
    { name: 'Oppo', price: 27000, camera: '32mp', color: 'pink' },
    { name: 'Iphone', price: 120000, camera: '13mp', color: 'black' },
    { name: 'Walton', price: 22000, camera: '12mp', color: 'black' },
    { name: 'Vivo', price: 32000, camera: '48mp', color: 'blue' },
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if( phone.price < min.price){    // compare price 
            min = phone
        }
    }
    return min;
}
const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is:', cheap)