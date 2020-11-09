"use strict";

var vak = "wiskunde";

function huiswerkMaken(vak, callback) {
  setTimeout(function () {
    console.log("Ok, ok, ik ga nu mijn ".concat(vak, "-huiswerk maken."));
    callback();
  }, 2000);
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);

function klaarMetHuiswerk() {
  console.log("Kijk eens, ik ben klaar met mijn huiswerk!");
}