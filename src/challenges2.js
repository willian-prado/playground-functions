// Desafio 10
function techList(myArray, name) {

  if (myArray == false){
    return "Vazio!";
  }
  
  let newArray = [];

  for (let index in myArray){
    objeto = {
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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
