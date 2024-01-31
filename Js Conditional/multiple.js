const salary = 2500;
const isBCS = true;
const height = 68;
const hasCar = false;

// if(salary > 20000 && height > 66){
//     console.log('su----patro')
// }
// else{
//     console.log('onno patro khuj')
// }
// if(salary > 25000 || height > 78){
//     console.log('esho baba kobul')
// }
// else{ 
//     console.log('vagh tui mokbul')
// }

// more and more condition
// if(salary > 25000 || height > 78 || isBCS == true){
//     console.log('esho baba kobul')
// }
// else{ 
//     console.log('vagh tui mokbul')
// }

if(salary > 25000 && height > 78 && isBCS == true){
    console.log('esho baba kobul')
}
else{ 
    console.log('vagh tui mokbul')
}

// ----------------complex condition-------------------
if((salary > 25000 || hasCar == true) && isBCS == true){
    console.log(' 14 gusti raji')
}
else{
    console.log('1 jon o raji na')
}
if((salary > 25000 && hasCar == true) || isBCS == true){
    console.log(' 14 gusti raji')
}
else{
    console.log('1 jon o raji na')
}