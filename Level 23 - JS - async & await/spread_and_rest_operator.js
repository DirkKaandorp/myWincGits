const telBijElkaarOp = (...args) => {
  return args.reduce((totaal, volgende) => {
    return totaal + volgende;
  })
}

console.log(telBijElkaarOp(2, 4, 5, 8, 13, 444)); // = 476


const berekenSom = (array) => {
  return array.reduce((totaal, volgende) => {
    return totaal + volgende;
  })
}

let reeks = [2, 4, 5, 8, 13, 444, 1000];
console.log(berekenSom(reeks)); // = 1476