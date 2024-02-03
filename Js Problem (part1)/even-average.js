function evenAverage(numbers) {
    const even = [];
    for(const number of numbers){
        if(number % 2 === 0){
            even.push(number)
        }
    }
    // console.log(even);
    let sum = 0;
    for(const number of even){
         sum = sum + number;
    }
    const count = even.length;
    console.log(sum, count);
    const avg = sum / count ;
    return avg;

}

const numbers = [20, 33, 40, 53, 58, 9, 8];
const result = evenAverage(numbers);
console.log("average of the even number is:", result);