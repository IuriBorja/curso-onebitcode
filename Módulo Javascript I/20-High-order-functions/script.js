function calcular(a, b, operacao) {
    console.log("Realizando uma operação qualquer.");
    const resultado = operacao(a, b);
    return resultado;
}


function somar(x, y) {
    console.log("Realizando uma soma.");
    return x + y;
}
/* 
console.log(calcular(3, 5, somar));


console.log(calcular(8, 4, function(x, y) {
    console.log("Realizando uma subtração.");
    return x - y;
}));

 */


/* 
function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    });
} */

const lista = ["Maça", "Banana", "Laranja", "Limão"];

/* for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista);
} */

/* lista.forEach(exibirElemento); */



/* lista.forEach(function(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    });
})

 */












function contas (a, b, expressao) {
    console.log("Fazendo uma conta...");
    const resultado = expressao(a, b);
    return resultado;
}

function soma (a, b, contas) {
    console.log("De soma");
    return a + b;
}

function sub (a, b, contas) {
    console.log("De subtração");
    return a - b;
}


/* console.log(contas(5, 5, function (a, b) {
    console.log("De multiplicação");
    return a * b;
}));
 */
function div (a, b, contas) {
    console.log("De divisão");
    return a / b;
}


/* console.log(contas(3, 3, soma));
console.log(contas(3, 3, sub));
console.log(contas(3, 3, div));

 */









function frase (frasePrncipal) {
   /*  console.log("Eu gosto de"); */
    const fraseInicial = frasePrncipal();
    return fraseInicial;
}


function chocolate (frase) {
    const gostoChocolate = "chocolate!";
    return gostoChocolate;
}

function morango (frase) {
    const gostoMorango = "morango!";
    return gostoMorango;
}



/* console.log(frase(morango)); */



function multis(a, b, multi){
    const result = multi(a, b);
    return result;
}

/* console.log(multis(5, 5, function(a, b) {
    return a * b;
}));
 */

function multiplyBy(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

const multiplyByTwo = multiplyBy(2);

console.log(multiplyByTwo(5));
console.log(multiplyBy(5)(10));