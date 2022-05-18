// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentense) {
let divisaoPalavra = sentense.split(" ");
return divisaoPalavra;
}

// Desafio 4
function concatName(arrayNomes) {
return (arrayNomes[arrayNomes.length-1]+", "+arrayNomes[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
return ((wins*3)+(ties*1));
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let repeticaoMaiorNumero = 0;
  for(numero of numeros){
    if (numero > maiorNumero){
      maiorNumero = numero
    }
  }
  for(numero of numeros){
    if (maiorNumero == numero)
    repeticaoMaiorNumero += 1
  }
  return repeticaoMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
  return "cat1"
  } 
  else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
return "cat2"
  } 
  else {
return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let novoArray = []
  for(numero of arrayNumeros){
    if (numero%3 == 0 && numero%5 == 0){
     novoArray.push("fizzBuzz")
    } else if (numero%3 == 0){
      novoArray.push("fizz")
      break 
    } else if (numero%5 == 0){
      novoArray.push("buzz")
    } else novoArray.push("bug!")
  } return novoArray
}

// Desafio 9
function encode(string) {
  let novaString = [];
    for(letra of string){
    if (letra === "a"){
      novaString.push("1") 
    }else if (letra === "e"){
      novaString.push("2") 
    }else if (letra === "i"){
      novaString.push("3") 
    }else if (letra === "o"){
      novaString.push("4") 
    }else if (letra === "u") {
      novaString.push("5") 
    } else {
      novaString.push(letra)
    } 
  }console.log(novaString.join(""))
}

function decode(string) {
  let stringOriginal = [];
  for(letra of string){
  if (letra === "1"){
    stringOriginal.push("a") 
  }else if (letra === "2"){
    stringOriginal.push("e") 
  }else if (letra === "3"){
    stringOriginal.push("i") 
  }else if (letra === "4"){
    stringOriginal.push("o") 
  }else if (letra === "5") {
    stringOriginal.push("u") 
  } else {
    stringOriginal.push(letra)
  } 
}console.log(stringOriginal.join(""))

}

// Desafio 10
function techList(array, nome) {
  if (array.length == 0){
    return "Vazio!"
  }
  let novoObjeto = []
  for (tecnologias of array.sort()){
    novoObjeto.push({
      tech:tecnologias,
      name: nome
    })
  }
  return novoObjeto
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
  techList,
};
