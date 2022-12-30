/* 
1- pegar o nome do turista

2- se ja visitou alguma cidade

3- se sim, perguntar o nome da cidade e armazenar numa variavel

4- continue nesse loop até que a resposta seja não

5-por ultimo o programa deve exibir o nome do turista , quantas e quais cidades ele
visitou

*/


const nomeTurista = prompt("Diga seu nome:");

const visitouCidade = prompt("Já visitou alguma cidade? (sim/não)");


if(visitouCidade === "não") {
    alert("Ok, já perguntei o suficiente! :)");
    alert(`Nome do turista:  ${nomeTurista} \nQuantas cidades visitadas: 0\nQuais cidades: 0`);
} else {
    alert("nada");
}



let nomeCidade = prompt("Qual o nome da cidade?");

let quantidades = [];
let cidades = [];


if(visitouCidade === "não") {
    alert("Ok, já perguntei o suficiente! :)");
} else {
    alert("nada");
}


/* while (visitouCidade === "sim") {
    visitouCidade = prompt("Já visitou outras? (sim/não)");
    nomeCidade = prompt("Qual o nome da cidade?");
    cidades += nomeCidade;

    if(visitouCidade === "não") {
        alert("Ok, já perguntei o suficiente! :)");
        break;
    }
} */

alert(`Nome do turista:  ${nomeTurista} \nQuantas cidades visitadas: ${cidades}\nQuais cidades: ${nomeCidade}`);