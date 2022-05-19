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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
