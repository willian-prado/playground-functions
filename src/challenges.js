// Desafio 1
function compareTrue(boolean1, boolean2) {

  return (boolean1 && boolean2);

}

console.log(compareTrue(true, true))
console.log(compareTrue(false, true))
console.log(compareTrue(false, false))

// Desafio 2
function calcArea(base, height) {

  let area = (base * height) / 2;
  return area;

}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(myString) {

  let array = myString.split(" ");
  return array;

}

console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));

// Desafio 4
function concatName(myArray) {

  let first = myArray[0];
  let last = myArray[myArray.length -1];
  let concat = last + ", " + first;
  return concat;

}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  
  let score = (wins * 3) + (ties * 1);
  return score;

}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(myArray) {
  
  let maior = 0;
  let count = 0;

  for (let index in myArray){
    if (maior < myArray[index]){
      maior = myArray[index];
    }
  }

  for (let index of myArray){
    if (index === maior){
      count += 1;
    }
  }

  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
