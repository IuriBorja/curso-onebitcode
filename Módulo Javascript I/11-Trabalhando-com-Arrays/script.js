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



//includes - serve para verificar se um elemento existe no array

let array3 = [1, 2, 3, 4, 5];
console.log(array3.includes(3)); // true
console.log(array3.includes(6)); // false



let array2 = ["Iuri", "Maria", "Joaquina", "Zezin"];

for (let i = 0; i < array2.length; i++) {
    const elemento = array2[i] ; 
    console.log(`${elemento} se encontra na posição ${i}`);
}
