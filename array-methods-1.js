// opdracht A: voeg "cool" toe aan de array 'characteristics'
let characteristics = ["nice", "awesome", "tof"];
const addTheWordCool = characteristics.push("cool");
console.log(characteristics);

// opdracht B: tel het aantal elementen in array 'fruits'
let fruits = ['appels', 'peren', 'citroenen'];
const amountOfElementsInArray = fruits.length;
console.log(amountOfElementsInArray); 

// opdracht C: toon eerste item van 'beneluxLanden'
let beneluxLanden = ["Belgie", "Nederland", "Luxemburg"];
const selectBelgiumFromBenelux = beneluxLanden[0];
console.log(selectBelgiumFromBenelux); 

// opdracht D: toon het laatste item van 'animals'
let animals = ["Haas", "Cavia", "Kip", "Schildpad"];
const lastElementInArray = animals[animals.length-1];
console.log(lastElementInArray); 

// opdracht E: gooi Trump twee keer uit zijn ambt: 1 x slice, en 1x splice
let presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = presidents.slice(1, presidents.length);
console.log(impeachTrumpSlice);

const impeachTrumpSplice = presidents.splice(0, 1);
console.log(impeachTrumpSplice);

// opdracht F: voeg de losse elementen samen tot een string met spaties ertussen
let sentenceParts = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
const stringsTogether = sentenceParts.join(" ");
console.log(stringsTogether);

// opdracht G: voeg twee arrays samen tot één array;
let array123 = [1,2,3];
let array456 = [4,5,6];
let array123456 = array123.concat(array456);
console.log(array123456);
