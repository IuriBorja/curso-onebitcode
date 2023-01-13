



function somar(a, b) {
    return a + b;
}


let operacao = somar;


console.log(operacao(4, 4));



const subtrair = function(a, b) {
    return a - b;
}

console.log(subtrair(10, 5));



/* A FORMA DE INICIALIZAR AS FUNCOES ANONIMAS SÃO DIFERENTES */


/* EXEMPLO 1 */

/* NESSE EXEMPLO A FUNÇAO É CHAMDA ANTES DELA E MESMO ASSIM ELA É ACESSADA E ATIVADA */
olaMundo();


function olaMundo() {
    console.log("Olá, mundo!");
}


/* EXEMPLO 2 */

oiMundo(); // MODO ERRADO

/* NESSE EXEMPLO TERÁ UM ERRO, POIS NÃO É POSSIVEL CHAMAR UMA FUNCAO ANONIMA SEM ANTES SER DECLARADA, OU SEJA, DEVE SE CHAMAR SO ABAIXO DELA */


const oiMundo = function() {
    console.log("Oi, mundo!");
}

oiMundo(); // funcao anonima deve ser chamada sempre apos