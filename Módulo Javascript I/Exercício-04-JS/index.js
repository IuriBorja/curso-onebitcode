/* 
1- pegar o nome do turista

2- se ja visitou alguma cidade

3- se sim, perguntar o nome da cidade e armazenar numa variavel

4- continue nesse loop até que a resposta seja não

5-por ultimo o programa deve exibir o nome do turista , quantas e quais cidades ele
visitou

*/


const nomeTurista = prompt("Diga seu nome:");

let visitouCidade = prompt("Já visitou alguma cidade? (sim/não)");


let visitouCidade2 = 0;
let cidades = "";

while (visitouCidade === "sim") {
    let cidade = prompt("Qual a cidade?");
    cidades += " - " + cidade + "\n"
    visitouCidade2++;
    visitouCidade = prompt("Já visitou outras?");

    if (visitouCidade === "não") {
        alert("Ok, já não tenho mais perguntas!");
        break;
    }
}


alert(`Nome do turista: ${nomeTurista} \nQuantas cidades visitadas: ${visitouCidade2} \nQuais cidades ele visitou: \n ${cidades}`);