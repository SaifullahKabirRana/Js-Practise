const sentence = "I am learning web dev."
//const result = ".ved bew gninrael ma I"

// web
// bew
// donal
// d
// od
// nod
// anod
// lanod

let reverse = "" ;
for(const letter of sentence){
    // console.log(letter);\
    reverse = letter + reverse;
      
}
// console.log(reverse);

// for loop
let reverse2 = "";
for(let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    reverse2 = letter + reverse2;    
}
// console.log(reverse2);

// short cut
const reversed = sentence.split("").reverse().join("")
console.log(reversed)