const person = {
    name : "sodor uddin",
    age : 25,
    profession: "developer",
    salary : 25,
    married : true,
    'fav place': ['bandarbon', 'rangamati','sajeek'],
}
// console.log(person);

// dot notation
// console.log(person.profession);
const income = person.salary;
// console.log(income);

// bracket notation
// third bracket diye access kora
console.log(person['age']);
const boyos = person['age'];
console.log(boyos);

// error (jdi value er name e quotation otobaa onno kisu diye hoi tahole [] ei third bracket diye output korte hbe )
// console.log(person.'fav place ')

console.log(person['fav place'])
