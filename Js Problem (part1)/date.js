const today = new Date();
const date = new Date('2062-10-19');
console.log(date.getMonth()); // index hisab kore ty man 1 kom ase
console.log(date.getDate());
const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString("en-GB"));