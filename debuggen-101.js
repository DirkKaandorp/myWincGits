const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
  // opdracht 1: alle gegevens p/p:
  // console.log("Dit is de gehele persoon:", person);
  // opdracht 2: log alle namen met als introductie "Dit is "
  //console.log("Dit is", person.name);
  // Log het geboortejaar (dus niet de leeftijd) voor ieder persoon
  //console.log(person.name + " is geboren in " + (2020 - person.age) + ".");
  // Log alle namen + beroep 
  // console.log(person.name + " is een " + person.profession + ".");
  // Plaats een if statement in de loop die checkt of een persoon ouder is dan 50 jaar. 
  // Zet vervolgens weer een console.log in deze if-statement. Werkt je if statement?
  if (person.age > 50) {
    console.log(person.name + " is ouder dan 50.");
  };
};
