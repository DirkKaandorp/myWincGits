"use strict";

// document.addEventListener('click', function(showButton){
//   if(showButton.target.className=="big-five-button"){
//      console.log("Button aangeklikt!");
//   }
// })
// selecteer de vijf buttons
var onClick1 = document.getElementsByClassName("big-five-button")[0];
var onClick2 = document.getElementsByClassName("big-five-button")[1];
var onClick3 = document.getElementsByClassName("big-five-button")[2];
var onClick4 = document.getElementsByClassName("big-five-button")[3];
var onClick5 = document.getElementsByClassName("big-five-button")[4]; // maak een eventListener vast aan de vijf buttons:
// button Lion

onClick1.addEventListener("click", function () {
  console.log(onClick1.innerHTML);
  var newLink = document.createElement("li");
  newLink.textContent = onClick1.innerHTML;
  var listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLink);
  newLink.classList.add("spotted-animals-list-item");
}); // button Leopard

onClick2.addEventListener("click", function () {
  console.log(onClick2.innerHTML);
  var newLink = document.createElement("li");
  newLink.textContent = onClick2.innerHTML;
  var listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLink);
  newLink.classList.add("spotted-animals-list-item");
}); // button Elephant

onClick3.addEventListener("click", function () {
  console.log(onClick3.innerHTML);
  var newLink = document.createElement("li");
  newLink.textContent = onClick3.innerHTML;
  var listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLink);
  newLink.classList.add("spotted-animals-list-item");
}); // button Rhino

onClick4.addEventListener("click", function () {
  console.log(onClick4.innerHTML);
  var newLink = document.createElement("li");
  newLink.textContent = onClick4.innerHTML;
  var listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLink);
  newLink.classList.add("spotted-animals-list-item");
}); // button Buffalo

onClick5.addEventListener("click", function () {
  console.log(onClick5.innerHTML);
  var newLink = document.createElement("li");
  newLink.textContent = onClick5.innerHTML;
  var listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLink);
  newLink.classList.add("spotted-animals-list-item");
}); // REMOVE - FIRST - BUTTON
// Maak een eventlistener vast aan de remove-first-item-button

var removeFirst = document.getElementById("remove-first-item-button"); // Maak een functie vast aan de eventlistener

removeFirst.addEventListener("click", function () {
  // selecteer het parent-element (hier de <ul>)
  var parent = document.getElementById("spotted-animals-list"); // selecteer het child-element (nb: het 0e element)

  var child = document.getElementsByClassName("spotted-animals-list-item")[0]; // verwijder het child-element

  parent.removeChild(child);
}); // REMOVE - ALL - SPOTTED - ANIMALS
// Maak een evenListener vast aan de remove-all-spotted-animals-button

var removeAllSpottedAnimals = document.getElementById("remove-all-button"); // Maak een functie vast aan de eventListener

removeAllSpottedAnimals.addEventListener("click", function () {
  // selecteer het parent-element (hier de <ul>)
  var parent = document.getElementById("spotted-animals-list"); // stel het aantal items in de parent vast tbv de for loop hierna

  var aantal = document.getElementById("spotted-animals-list").getElementsByTagName("li").length; // loop door de child-items in de parent en verwijder ze één voor één

  for (i = 1; i <= aantal; i++) {
    var child = document.getElementsByClassName("spotted-animals-list-item")[0];
    parent.removeChild(child);
  } // 

});