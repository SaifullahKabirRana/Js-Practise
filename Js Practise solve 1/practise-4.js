// Find array elements

const fruits = ['mango', 'banana', 'apple', 'orange', 'lemon'];

const target = "lal lal jambura";
let foundIndex = -1;
for(let i =0; i < fruits.length ; i++){
     const currentFruit = fruits[i];
     if(currentFruit == target){
        foundIndex = i;
     }
}
if(foundIndex > -1){
    console.log(foundIndex, "Founded");
}
else{
    console.log("Not Founded");
}
