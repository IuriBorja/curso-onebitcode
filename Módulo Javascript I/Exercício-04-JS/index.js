/* 
1- pegar o nome do turista

2- se ja visitou alguma cidade

3- se sim, perguntar o nome da cidade e armazenar numa variavel

4- continue nesse loop até que a resposta seja não

5-por ultimo o programa deve exibir o nome do turista , quantas e quais cidades ele
visitou

*/




const turista = prompt("Diga seu nome:");

let pergunta = prompt("Voce já visitou alguma cidade? (sim/não)");

let cidades = "";
let contagem = 0;


while (pergunta === "sim") {
    let cidade = prompt("Qual cidade visitou?");
    cidades += " - " + cidade + "\n";
    contagem++;
    pergunta = prompt("Já visitou outras? (sim/não)");

    if (pergunta === "não") {
        alert("Ok, já não tenho mais perguntas!");
        break;
    }
}


alert(
    `Nome do turista: ${turista} \n
    Quantidade de cidades visitadas: ${contagem} \n
    Quais cidades visitadas: \n${cidades}`
);




/* const nomeTurista = prompt("Diga seu nome:");

let visitouCidade = prompt("Já visitou alguma cidade? (sim/não)");


let contagem = 0;
let cidades = "";

while (visitouCidade === "sim") {
    let cidade = prompt("Qual a cidade?");
    cidades += " - " + cidade + "\n";
    contagem++;
    visitouCidade = prompt("Já visitou outras?");

    if (visitouCidade === "não") {
        alert("Ok, já não tenho mais perguntas!");
        break;
    }
}



alert(`Nome do turista: ${nomeTurista}
\nQuantas cidades visitadas: ${contagem} 
\nQuais cidades ele visitou: \n ${cidades}`); */