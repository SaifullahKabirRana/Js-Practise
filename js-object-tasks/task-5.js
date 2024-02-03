// ask-5 (Hard)
// Loop through an object and print the key-value pairs with their types

let myObject = {

      name: 'John Doe',
      age: 25,
      city: 'Example City',
      isStudent: true,

}

for (let key in myObject){
     let value = myObject[key];
     let type = typeof value;
     console.log("key:", key, "|", "type:", type);
}


