const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr);

// push - adiciona um elemento ao final do array
// e devolve também

let tamanho = arr.push("Boromir");
arr.push("Boromir");
arr.push("Boromir");

console.log(arr);
console.log(tamanho);

// unshift - adiciona um elemento no começo do array
// e devolve também

tamanho = arr.unshift("Teste");
arr.unshift("Teste");
console.log(arr);
console.log(tamanho);


// pop - serve para remover um elemento que está no final da array 
// e devolve também, exemplo:

const ultimoElemento = arr.pop(); // Boromir removido
console.log(arr);
console.log(ultimoElemento); // Boromir ficou guardado na var


// shift - remove um elemento do começo da array

ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

