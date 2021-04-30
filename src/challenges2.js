// Desafio 10
function techList(myArray, name) {

  if (myArray == false){
    return "Vazio!";
  }
  
  let newArray = [];

  for (let index in myArray){
    let objeto = {
      tech: myArray[index],
      name: name
    }
    newArray.push(objeto);
  }

  newArray.sort(function(a, b){
    if (a.tech < b.tech){
        return -1;
    } else if (a.tech > b.tech){
        return 1;
    } else if (a.tech === b.tech){
        return 0
    }
  })

  return newArray;

}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
console.log(techList([], "Lucas"))

// Desafio 11
function generatePhoneNumber(myArray) {

  if (myArray.length !== 11){
    return "Array com tamanho incorreto.";
  }

  let flagNotPrint = false;
  let contador = {};
  let formatNumber = ""

  myArray.forEach(key => contador[key] = 0);

  for (let index = 0; index < myArray.length; index += 1) {
    if ((myArray[index] < 0) || (myArray[index] > 9)){
      return "não é possível gerar um número de telefone com esses valores";
    }

    if (index == 0) {
      formatNumber += `(${myArray[index]}`;
    } else if (index == 1) {
      formatNumber += `${myArray[index]}) `;
    } else if ((index > 1) && (index < 6)){
      formatNumber += `${myArray[index]}`
    } else if (index == 6) {
      formatNumber += `${myArray[index]}-`;
    } else if (index > 6) {
      formatNumber += `${myArray[index]}`;
    }

    contador[myArray[index]] += 1;

  }

  for (let key in contador){
    if (contador[key] > 2){
      flagNotPrint = true;
    }
  }

  if (flagNotPrint === true){
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    return formatNumber;
  }

}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 10]));  //Numero do array diferente de 11
console.log(generatePhoneNumber([1, -2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));   //Numero menor que 0
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 12, 0, 1]));   //Numero maior que 9
console.log(generatePhoneNumber([2, 2, 2, 1, 5, 6, 7, 8, 9, 0, 1]));   //Numero repetido mais de 3 vezes
console.log(generatePhoneNumber([2, 2, 2, 2, 5, 6, 7, 8, 9, 0, 1]));   //Numero repetido mais de 3 vezes
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));  //Array correto


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  let difAB = Math.abs(lineA - lineB);
  let difAC = Math.abs(lineA - lineC);
  let difBC = Math.abs(lineB - lineC);

  let flag = false;

  if ((lineA < sumBC) && (lineA > difBC)){
    flag = true;
  } else if ((lineB < sumAC) && (lineB > difAC)) {
    flag = true;
  } else if ((lineC < sumAB) && (lineC > difAB)) {
    flag = true;
  }

  return flag;

}

console.log(triangleCheck(5, 7, 8))
console.log(triangleCheck(15, 7, 8))


// Desafio 13
function hydrate(myString) {

  let regex = /\d+/g;

  let matches = myString.match(regex);
  let waterCups = 0;

  let flag = true;

  for (let index of matches){
    let number = Number(index);

    if ((number > 0) && (number < 10)){
      waterCups += Number(index);
    } else {
      flag = false;
    }
  }

  if (flag){
    return `${waterCups} copos de água`;
  } 
}

console.log(hydrate("1 cerveja"));
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));
console.log(hydrate("1 cachaça, 15 cervejas e 1 copo de vinho"));


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
