/* 
Exercise 1:

Write a function testNum that takes a number as an argument and returns
a Promise that tests if the value is less than or greater than the
value 10. Log the result to the console.
*/

const testNum = (n) => new Promise((resolve, reject) => {
  console.log("n =", n);
  if (n > 10) {
    resolve("n is groter dan 10");
  } else {
    reject("n is kleiner dan 10");
  }
});

testNum(33)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

// De zelfde functie, maar nu compacter mbv ternary operator:
const testNum2 = (m) => new Promise((resolve, reject) => {
  console.log("m =", m);
  m > 10 ? resolve(m + " is groter dan 10") : reject(m + " is kleiner dan 10");
});

testNum2(8)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });


/*
Exercise 2:
Write two functions that use Promises that you can chain! The first 
function, makeAllCaps(), will take in an array of words and capitalize 
them, and then the second function, sortWords(), will sort the words 
in alphabetical order. If the array contains anything but strings, it 
should throw an error. 
Then call these functions by *chaining* the promises
*/

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

// call both functions, chain them together and log the result to the console


const makeAllCaps = (items) => new Promise((resolve, reject) => {
  // check of alle elementen van de array strings zijn:
  if (items.every(item => typeof item === 'string')) {
    // zo ja:
    resolve(items.map(item => item.toUpperCase()));
  } else {
    // zo nee:
    reject("Oeps! De arrray bevat niet uitsluitend strings.");
  }
});

// sorteer de gekapitaliseerde woorden
const sortWords = (items) => {
  return items.sort((a, b) => {
    if (a > b) {
      return 1
    } else {
      return -1
    }
  })
};

// roep de functie aan met een array
makeAllCaps(complicatedArray)
  // chain hier de sorteerfunctie
  .then(items => sortWords(items))
  // toon het resultaat
  .then(sortedArray => console.log(sortedArray))
  // in geval van niet-string-items
  .catch(error => console.log(error))