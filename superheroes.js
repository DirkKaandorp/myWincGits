let superheroes = [
  {
  "name": "Batman",
  "publisher": "DC Comics",
  "alter_ego": "Bruce Wayne",
  "first_appearance": "Detective Comics #27",
  "weight": "210"
  },
  {
  "name": "Superman",
  "publisher": "DC Comics",
  "alter_ego": "Kal-El",
  "first_appearance": "Action Comics #1",
  "weight": "220"
  },
  {
  "name": "Flash",
  "publisher": "DC Comics",
  "alter_ego": "Jay Garrick",
  "first_appearance": "Flash Comics #1",
  "weight": "195"
  },
  {
  "name": "Green Lantern",
  "publisher": "DC Comics",
  "alter_ego": "Alan Scott",
  "first_appearance": "All-American Comics #16",
  "weight": "186"
  },
  {
  "name": "Green Arrow",
  "publisher": "DC Comics",
  "alter_ego": "Oliver Queen",
  "first_appearance": "All-American Comics #16",
  "weight": "195"
  },
  {
  "name": "Wonder Woman",
  "publisher": "DC Comics",
  "alter_ego": "Princess Diana",
  "first_appearance": "The Incredible Hulk #180",
  "weight": "165"
  },
  {
  "name": "Blue Beetle",
  "publisher": "DC Comics",
  "alter_ego": "Dan Garret",
  "first_appearance": "Mystery Men Comics #1",
  "weight": "145"
  },
  {
  "name": "Spider Man",
  "publisher": "Marvel Comics",
  "alter_ego": "Peter Parker",
  "first_appearance": "Amazing Fantasy #15",
  "weight": "167"
  },
  {
  "name": "Captain America",
  "publisher": "Marvel Comics",
  "alter_ego": "Steve Rogers",
  "first_appearance": "Captain America Comics #1",
  "weight": "220"
  },
  {
  "name": "Iron Man",
  "publisher": "Marvel Comics",
  "alter_ego": "Tony Stark",
  "first_appearance": "Tales of Suspense #39",
  "weight": "250"
  },
  {
  "name": "Thor",
  "publisher": "Marvel Comics",
  "alter_ego": "Thor Odinson",
  "first_appearance": "Journey into Myster #83",
  "weight": "200"
  },
  {
  "name": "Hulk",
  "publisher": "Marvel Comics",
  "alter_ego": "Bruce Banner",
  "first_appearance": "The Incredible Hulk #1",
  "weight": "1400"
  },
  {
  "name": "Wolverine",
  "publisher": "Marvel Comics",
  "alter_ego": "James Howlett",
  "first_appearance": "The Incredible Hulk #180",
  "weight": "200"
  },
  {
  "name": "Daredevil",
  "publisher": "Marvel Comics",
  "alter_ego": "Matthew Michael Murdock",
  "first_appearance": "Daredevil #1",
  "weight": "200"
  },
  {
  "name": "Silver Surfer",
  "publisher": "Marvel Comics",
  "alter_ego": "Norrin Radd",
  "first_appearance": "The Fantastic Four #48",
  "weight": "unknown"
  }
];

// Opdracht 1: Maak een array van alle superhelden namen

const showNames = superheroes.map ( (hero) => {
  return hero.name;
});
console.log(showNames);

// Opdracht 2: Maak een array van alle "lichte" superhelden (< 190 pounds)

const showLeightWeights = superheroes.filter ( (hero) => {
  if (parseInt(hero.weight) < 190) {
  return hero;
  }
});
console.log(showLeightWeights);

// Opdracht 3: Maak een array met alleen de namen van de superhelden die 200 pounds wegen
// Gebruik chaining (d.w.z. verbind methods aan elkaar)

const showNamesOfTwoHundredPounders = superheroes.filter( (hero) => {
  if (parseInt(hero.weight) === 200) {
    return hero;
  }
}).map( (hero) => {
  return hero.name;
});
console.log(showNamesOfTwoHundredPounders);

// Opdracht 4: Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const showFirstAppearanceComics = superheroes.map ( (hero) => {
  return hero.first_appearance;
});
console.log(showFirstAppearanceComics);

// Opdracht 5a: Maak een array met alle superhelden van DC Comics. 
const showHeroesOfDCComics = superheroes.filter ( (hero) => {
  return hero.publisher === "DC Comics";
});
console.log(showHeroesOfDCComics);

// Opdracht 5b: Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
const showHeroesOfMarvelComics = superheroes.filter ( (hero) => {
  return hero.publisher === "Marvel Comics";
});
console.log(showHeroesOfMarvelComics);

// Opdracht 6: Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 

const totalWeightDCComics = superheroes.filter ( (hero) => {
  return hero.weight != "unknown" && hero.publisher === "DC Comics";
}).reduce( (total, hero) => {
    // console.log("total staat nu op:", total);  // = controleregel
    // console.log(hero.name, parseInt(hero.weight)); // = controleregel
  return parseInt(hero.weight) + total;
},0);
console.log("Alle DC Comics-helden wegen samen:", totalWeightDCComics);

// Opdracht 7: Tel het gewicht van alle superhelden van Marvel Comics bij elkaar op. 
const totalWeightMarvel = superheroes.filter ( (hero) => {
  return hero.weight != "unknown" && hero.publisher === "Marvel Comics";
}).reduce( (total, hero) => {
    // console.log("total staat nu op:", total);  // = controleregel
    // console.log(hero.name, parseInt(hero.weight)); // = controleregel
  return parseInt(hero.weight) + total;
},0);
console.log("Alle Marvel-helden wegen samen:", totalWeightMarvel);

// Opdracht 8 (bonus): vind de zwaarste superheld

// Met een eenvoudige array lukt het zonder problemen
data = [4, 2, 6, 1, 3, 7, 5, 3];
console.log(Math.max.apply(Math, data));

// maar met een array met objecten kom ik er niet uit
console.log(Math.max.apply(Math, superheroes.weight));
