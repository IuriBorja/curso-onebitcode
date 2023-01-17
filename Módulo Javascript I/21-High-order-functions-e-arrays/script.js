const personagens = [
    {nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"},
    {nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
    {nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
    {nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Xamã"},
    {nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro"}
];


/* USANDO O MÉTODO MAP PARA SEPARAR POR NOMES */
/* SERVE PARA CRIAR UM NOVO ARRAY BASEADO EM OUTRO */


/* EXEMPLO COM LOOP */
const nomes = [];

for (let i = 0; i < personagens.length; i++) {
    nomes.push(personagens[i].nome);
}


/* EXEMPLO COM MAP */

const nomes1 = personagens.map(function(personagem) {
    return personagem.nome;
})



console.log(nomes);
console.log(nomes1);



/* MÉTODO FILTER , SERVE PARA FILTRAR ELEMENTOS DE UMA ARRAY*/
/* TAMBÉM CRIA UM NOVO ARRAY COM ESSES ELEMENTOS */



/* EXEMPLO COM LOOP */


const orcs = [];

for (let i = 0; i < personagens.length; i++) {
    if(personagens[i].raca === "Orc") {
        orcs.push(personagens[i]);
    }
    
}


/* EXEMPLO COM FILTER */

const orcs2 = personagens.filter(function(personagem) {
    return personagem.raca === "Orc";
});



console.log(orcs);
console.log(orcs2);





/* USANDO O MÉTODO REDUCE  */
/* SERVE PARA TRANSFORMAR UMA ARRAY EM UM OUTRO ELEMENTO , EM OUTRO VALOR, SEJA UM ARRAY, UM OBJETO, UMA STRING, QUALQUER COISA*/


const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel;
}, 0);

console.log(nivelTotal);


const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem);
    } else {
        valorAcumulado[personagem.raca] = [personagem];
    }
    return valorAcumulado;
}, {});

console.log(racas);




/* USANDO O MÉTODO SORT */

/*Ela modifica o array original e retorna o array classificado. */


personagens.sort(function(a, b) {
    return a.nivel - b.nivel; // faz com que seja mostrado um novo array com os niveis descrescente
});

console.log(personagens);