function calcularMedia (a, b) {
    const media = (a + b) / 2;
    return media;
}

const resultado = calcularMedia(5, 18);


console.log(resultado);



/* ----------------------- */


function criarProduto(nome, preco) {
    return produto = {  // O RETURN PODE SER USADO DIRETO , OU SEJA, PARA DEVOLVER SEJA UMA EXPRESSAO OU UM OBJETO, NÃO PRECISA CRIAR UMA VARIAVEL
        nome,
        preco,
        estoque: 1
    };

}

const notebook = criarProduto("Asius", 1300);
const geladeira = criarProduto("Brastemp", 2000);

console.log(notebook);
console.log(geladeira);



/* --------------- */



function areaRetangular(base, altura) {
    return base * altura; // OUTRO EXEMPLO, NÃO PRECISOU CRIAR UMA VARIAVEL, JA RETORNA A EXPRESSAO DIRETO
}


function areaQuadrada(lado) {
    return areaRetangular(lado, lado); // PODEMOS USAR UMA FUNÇÃO DENTRO DA OUTRA
}

console.log(areaRetangular(3, 5));

console.log(areaQuadrada(6));


/* ---------------- */

/* AS FUNÇÕES SO PODEM RETORNAR UMA VEZ */


function ola() {
    let texto = "...";
    texto = "Olá, mundo!";
    return texto;
    console.log(texto); // CÓDIGO INACESSIVEL (UNREACHABLE CODE), POIS ESTA ABAIXO DO RETURN, ONDE TERMINA A FUNÇÃO POIS JA FOI DECLARADO SUA SAIDA
}

console.log(ola()); // Olá, mundo!


/* CADA RAMIFICAÇÃO DE UMA FUNÇÃO PODE TER RETURNS DIFERENTES */

function maioridade(idade) {
    if(idade >= 18) {
        return "Maior de idade"; // SE FOR ESSE IF VERDADEIRO, SERÁ ESSA SAIDA
    } else {
        return "Menor de idade"; // SE FOR ESSE, SERA ESSA SAIDA
    }
}

console.log(maioridade(19)); // Maior de idade
console.log(maioridade(15)); // Menor de idade












/* CODIGOS ABAIXO APENAS PARA OUTROS TESTES */

/* const random = Math.floor(Math.random() * 6);

if (random === 1) {
    console.log("Resultado 1");
} else if (random === 2) {
    console.log("Resultado 2");
} else if (random === 3) {
    console.log("Resultado 2");
} else if (random === 4) {
    console.log("Resultado 2");
} else {
    console.log("NUMERO 5!!")
}


for(let i = 1; i <= random; i++) {
    const teste = `O valor de random é ${random}`;
    console.log(teste);
}




let lista = ["fulano@email.coim:1234567","siclana@email.com:654321","beltrano@email.com:332245"];


for(let i = 0; i < lista.length; i++) {
     let dados = lista[i].split(":");
     let email = dados[0];
     let senha = dados[1];
     console.log(`Email ${email} e senha ${senha}`);
}; */