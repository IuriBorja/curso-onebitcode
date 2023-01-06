/* // pedir que seja informada uma palavra
let palavra = prompt("Digite uma palavra:");

// verificar se a palavra é um palíndromo
let ehPalindromo = true;
for (let i = 0; i < palavra.length / 2; i++) {
  if (palavra[i] !== palavra[palavra.length - 1 - i]) {
    ehPalindromo = false;
    break;
  }
}

// exibir a mensagem apropriada
if (ehPalindromo) {
  alert("A palavra é um palíndromo.");
} else {
  alert(`A palavra não é um palíndromo.\n${palavra}\n${palavra.split("").reverse().join("")}`);
} 

 */



/* FORMA DO PROFESSOR */



const word = prompt("Digite uma palavra:");

let invertWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    invertWord += word[i];
}

if (word === invertWord) {
    alert(`${word} é um palíndromo!`);
} else {
    alert(`${word} não é um palíndromo!\n\n
    ${word} !== ${invertWord}`);
}









/* 
const palavra2 = prompt("Digite uma palavra:");

let palavraInvertida = "";

for (let i = palavra2.length - 1; i >= 0; i--) {
    palavraInvertida += palavra2[i];
}


if (palavra2 === palavraInvertida) {
    alert(`${palavra2} é um palíndromo!`);
} else {
    alert(`${palavra2} não é um palíndromo \n\n
    ${palavra2} !== ${palavraInvertida}`);
}

 */