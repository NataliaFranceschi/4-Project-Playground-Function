// Desafio 11
function generatePhoneNumber(arrayDeNumeros) {
  let contador = 0;
  let numeroTelefone = arrayDeNumeros.join('').replace(/(\d{2})?(\d{5})/, '($1) $2-');
  if (arrayDeNumeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let numero of arrayDeNumeros) {
    if (numero < 0 || numero > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let number of arrayDeNumeros) {
      if (numero === number) {
        contador += 1;
      }
    }
    if (contador > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    } contador = 0;
  }
  return numeroTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condicao1 = (lineA < (lineB + lineC)
    && lineB < (lineA + lineC)
    && lineC < (lineB + lineA));
  let condicao2 = (lineA > Math.abs(lineB - lineC)
    && lineB > Math.abs(lineA - lineC)
    && lineC > Math.abs(lineB - lineA));
  if (condicao1 === true && condicao2 === true) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(frase) {
  let somaNumeros = 0;
  let arrayComOsNumeros = frase.match(/\d+/g);
  for (let numero of arrayComOsNumeros) {
    somaNumeros += parseInt(numero);
  }
  if (somaNumeros === 1) {
    return (`${somaNumeros} copo de água`);
  }
  return (`${somaNumeros} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
