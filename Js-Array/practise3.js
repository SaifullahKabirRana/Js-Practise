// 3. Checking Array Membership with ‘includes’
// Instructions:
//  *Create an array of books containing different book.
//  *Use the includes method to check if the array contains a javascript book.
//  *Print a message to the console indicating whether the element is present in  the array or not.

const books = ["bangla", "english", "python", "javascript",];
console.log(books.includes("javascript"));

if(books.includes("python")){
    console.log("python shikbo");
}
else{
    console.log("chill korbo");
}