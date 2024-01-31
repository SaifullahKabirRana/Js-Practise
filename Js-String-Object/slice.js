const address = "Andorkilla"
const part = address.slice(2, 5);
// console.log(part);


const sentence = "I am a good and hardworking person.";
// console.log(sentence.split(" "));
// console.log(sentence.split("a"));

const friendsStr = "rahim,fahim,sahim,tahim,lahim,dahim"
const friends = friendsStr.split(",");
console.log(friends);

const realFriend = [ 'rahim', 'fahim', 'sahim', 'tahim', 'lahim', 'dahim' ];
console.log(realFriend);
console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));