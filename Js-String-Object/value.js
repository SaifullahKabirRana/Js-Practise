const person = {
    name : "sodor uddin",
    age : 25,
    profession: "developer",
    salary : 25,
    married : true,
    'fav place': ['bandarbon', 'rangamati','sajeek'],
}
// dot notation diye update
person.salary = 30000;


// bracket notation diye update
person["age"] = 26;
person["fav place"] = ['maldives', 'bali', 'kashmir']


const propName = "profession";
person[propName] ="engineer";
console.log(person);
