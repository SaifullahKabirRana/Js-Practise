const school = "RAJ UK Uttara Model School"

console.log(school.toUpperCase());
console.log(school.toLowerCase());

// Uppercase: ABCD EFG
// lowercase: abcd efg 
const subject = "Chemistry";  // 2 ta ke eksate compare korte hole toLowercase use kora valo
const book = "chemistry";

if(subject.toLowerCase() === book.toLowerCase() ){
    console.log("I am reading book eibar porikkay patay felbo");
}
else{
    console.log("huday huday prista ultai vat er opekkai")
} 

const drink = " water";
const liquid = "water ";   // white space er jnno trim use kora hoi

if(drink.trim() === liquid.trim()){
    console.log("pani er opor name jibon");
}
else{
    console.log("pani er opor name moron")
}
