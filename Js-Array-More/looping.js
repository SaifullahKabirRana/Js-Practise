/**
 * looping technique
 * 1. for loop
 * 2. while loop
 * 3. do while ---> ignore
 * 4. for of----> array loop korar jnno
 * 5. for in----> object loop korar jnno
 * 
 */

const friends = ['Elon', 'Bill', 'Mark', 'Waren']

for (const friend of friends) {
    // console.log(friend);
}

for (let i = 0; i < friends.length; i++) {

    // console.log(friends[i])
}

let i = 0;
while (i < friends.length) {
    // console.log(friends[i]);
    i++;
}

const number = [122, 22, 23, 4334, 43434, 434343, 4344, 33, 334, 3, 2, 2, 34]

for(let i = 0; i < number.length; i++){
    // console.log(number[i])
}

let n = 0;
while(n < number.length){
    console.log(number[n]);
    n++;
}