// zet de functie om naar een arrow functie
const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");
ikRockArrowFunctions()

// functie omwerken naar één regel
const fivePlusSeven = () => 5 + 7;
fivePlusSeven();

/* Schrijf een arrow function, 
   op 1 regel (dus met een impliciete return statement), 
   die de params a en b bij-elkaar optelt. 
   Noem de functie myFunction.
*/

const myFunction = (a,b) => a + b;
myFunction(123,567);

/* 
 Schrijf een arrow function op 1 regel, die de parameter a behoudt, 
 en altijd a plus 5 returned. 
 Noem de functie addFive.
*/

const addFive = a => a + 5;
addFive(33.67);


/* 
Schrijf een arrow function met de naam createObject met een implicit 
return statement (dus op 1 regel) die een simpel object returned: 
{greeting: "hoi"}
*/ 

const createObject = () => ({greeting: "hoi"});
createObject();
