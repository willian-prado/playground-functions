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
function catAndMouse(mouse, cat1, cat2) {
  
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);

  if (distMouseCat1 < distMouseCat2){
    return "cat1";
  }
  else if (distMouseCat2 < distMouseCat1){
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
}

console.log(catAndMouse(1, 4, 3))
console.log(catAndMouse(1, 7, 13))
console.log(catAndMouse(1, 2, 2))

// Desafio 8
function fizzBuzz(myArray) {
  
  let strArray = [];

  for (let index in myArray){

    if ((myArray[index] % 3 === 0) && (myArray[index] % 5 !== 0)) {
      strArray.push("fizz");
    } else if ((myArray[index] % 3 !== 0) && (myArray[index] % 5 === 0)) {
      strArray.push("buzz");
    } else if ((myArray[index] % 3 === 0) && (myArray[index] % 5 === 0)) {
      strArray.push("fizzBuzz");
    } else if ((myArray[index] % 3 !== 0) && (myArray[index] % 5 !== 0)) {
      strArray.push("bug!");
    }
  }

  return strArray;

}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9 
function encode(myString) {
  
  let newString = "";

  for (let char of myString){
    switch (char) {
      case "a": 
        newString += "1";
        break;
      case "e": 
        newString += "2";
        break;
      case "i": 
        newString += "3";
        break;
      case "o": 
        newString += "4";
        break;
      case "u":
        newString += "5";
        break;
      default:
        newString += char;
        break;
    }  
  }

  return newString;
}

console.log(encode("hi there!"))

function decode(myString) {

  let newString = "";

  for (let char of myString){
    switch (char) {
      case "1": 
        newString += "a";
        break;
      case "2": 
        newString += "e";
        break;
      case "3": 
        newString += "i";
        break;
      case "4": 
        newString += "o";
        break;
      case "5":
        newString += "u";
        break;
      default:
        newString += char;
        break;
    }  
  }
  
  return newString;
}

console.log(decode("h3 th2r2!"));

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
