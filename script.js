//  Mixed Messages Project
/*  This project is aiming to show understanding of basic JavaScript, as well
as, understanding of Git and GitHub and the ability to work in Command line. 
The program is supposed to give the user, every time user runs it, random 
message output. This version is a astrology generator which gives three outputs, 
user's astrology sign(input by user), and two random predictions */

//Arrays
let prediction1 = ['have good luck.',' have bad luck.','encounter business opportunity.'
,'know a great sorrow.','encounter love.','defeat a rival.','find new hobby.',
'have travel opportunity.','change your style.','find great friend.',
'consider changes at work.','have thoughts about promising innovation.',
'change the world.','change your life.','think about starting a new job.',
'cause a great confusion.'];

let prediction2 = ['trust no one','socialize more','avoid casinos','adventure into the unknown',
'avoid planes','trust your guts','expect big change','expect big surprise','avoid surprises',
'decide for yourself']

//User input
const prompt = require('prompt-sync')({sigint: true});
const astro_sign = prompt('What is your astrology(zodiac) sign? ');


//Prediction 1 output generator
function newPred1(){
    var randomNum1 = Math.floor(Math.random() * prediction1.length);
    return randomNum1
}


//Prediction 2 output generator

function newPred2(){
    var randomNum2 = Math.floor(Math.random() * prediction2.length);
    return randomNum2
}



//Final Outputs
console.log(`Your astrology sign is ${astro_sign}`);
console.log(`This year you will ${prediction1[newPred1()]}`);
console.log(`You should: ${prediction2[newPred2()]}`);