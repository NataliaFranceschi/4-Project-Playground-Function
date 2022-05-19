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
  let divisaoPalavra = sentense.split(' ');
  return divisaoPalavra;
}

// Desafio 4
function concatName(arrayNomes) {
  return (arrayNomes[arrayNomes.length - 1] + ', ' + arrayNomes[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let repeticaoMaiorNumero = 0;
  for (let numero of numeros) {
    if (numero > maiorNumero) {
      maiorNumero = numero;
    }
  }
  for (let numero of numeros) {
    if (maiorNumero === numero) {
      repeticaoMaiorNumero += 1;
    }
  }
  return repeticaoMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let novoArray = [];
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
      novoArray.push('fizzBuzz');
    } else if (arrayNumeros[i] % 3 === 0) {
      novoArray.push('fizz');
    } else if (arrayNumeros[i] % 5 === 0) {
      novoArray.push('buzz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
}

// Desafio 9
function encode(string) {
  let novaString = string.replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
  return novaString;
}
function decode(novaString) {
  let stringOriginal = novaString.replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
  return stringOriginal;
}

// Desafio 10
function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let novoObjeto = [];
  for (let tecnologias of array.sort()) {
    novoObjeto.push({
      tech: tecnologias,
      name: nome,
    });
  }
  return novoObjeto;
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
