const listaDeCompras = [];

listaDeCompras[0] = "Arroz";
listaDeCompras[1] = "Feijão";
listaDeCompras[2] = 7;
listaDeCompras[3] = "Batata";
listaDeCompras[4] = true;

console.log(listaDeCompras);


const lista = ["ovo", 7, true, null];


console.log(lista);



let arr = [1, 2, 3, 4, 5];

arr.forEach(function(elemento, indice, array) {
  console.log(elemento, indice, array);
});