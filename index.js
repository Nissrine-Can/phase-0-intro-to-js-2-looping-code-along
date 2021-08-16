//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me`)
    //}
//const gifts = ["teddy bear", "drone", "doll"];
//function wrapGifts(gifts) {
   /* for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!}`);
    
    }

    return gifts;*/

//wrapGifts(gifts);


const names = ["Lisa", "Kaitlin", "Jan"];
const messages  = [];
function writeCards(names) {

   for (let i = 0; i < names.length; i++) {
  messages[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
   return messages;
}
writeCards(names);



function countDown() {

let number = 10;

while (number >= 0) {
    console.log(number);
    number--;
}
}
countDown(10);