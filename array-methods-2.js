// opdracht A: find Spiderman

const superheroes = [
{name: "Batman", alter_ego: "Bruce Wayne"}, 
{name: "Superman", alter_ego: "Clark Kent"}, 
{name: "Spiderman", alter_ego: "Peter Parker"}]

const findSpiderMan = superheroes.find( (hero) => {
  return hero.name === "Spiderman";
});
console.log(findSpiderMan);

// opdracht B: verdubbel de integers in een array

numbers = [1, 2, 3];
const doubleArrayValues = numbers.map( (number) => {
  return number * 2;
});
console.log(doubleArrayValues);

// opdraacht C: onderzoek of er een waarde groter dan 10 in een array voorkomt

let numbers1 = [1, 4, 3, 6, 9, 7, 11];
let numbers2 = [1,2,1,2,1,2];

const numbers1ContainsNumberBiggerThan10 = numbers1.some( (number) => {
  return number > 10;
})
console.log("Bevat numbers1 een getal groter dan 10?", numbers1ContainsNumberBiggerThan10);

const numbers2ContainsNumberBiggerThan10 = numbers2.some( (number) => {
  return number > 10;
})
console.log("Bevat numbers2 een getal groter dan 10?", numbers2ContainsNumberBiggerThan10);

// opdracht D: onderzoek of "Italy" voorkomt in de array the Great7

let theGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
const isItalyInTheGreat7 = theGreat7.includes( (country) => {
  return country === "Italy";
}) ;
console.log("De bewering dat Italië deel uitmaakt van de 'great 7' is", isItalyInTheGreat7);

// opdracht E: vertienvoudig de waarden in een array
let getallen = [1, 4, 3, 6, 9, 7, 11];
getallen.forEach(tenfold)
function tenfold(item, index, arr) {
  arr[index] = item * 10;
};
console.log(getallen);

// opdracht F: onderzoek of alle waarden in een array kleiner dan 100 zijn
waarden = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];
const isBelow100 = waarden.every( (item) => {
  return item < 100;
})
console.log("Alle waarden kleiner dan 100: ",isBelow100);

// opdracht G: tel de waarden van een array bij elkaar op en retourneer het totaal
let cijfers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const bigSum = cijfers.reduce( (totaal, item) => {
  return item + totaal;
},0);
console.log("Het totaal van deze array is", bigSum);
