/* const nomeVe1 = prompt("Insira o nome do primeiro veículo:");
const velVe1 = prompt("Insira a velocidade do primeiro veículo:");

const nomeVe2 = prompt("Insira o nome do segundo veículo:");
const velVe2 = prompt("Insira a velocidade do segundo veículo:");

if (velVe1 < velVe2) {
    alert(`${nomeVe2} é mais rapido do que ${nomeVe1}`);
} else if (velVe1 === velVe2) {
    alert(`Ambos os carros tem a mesma velocidade!`);
} else {
    alert(`${nomeVe1} é mais rapido do que ${nomeVe2}`);
}
 */




const nomeAtq = prompt("Insira o nome do personagem atacante:");
const poderAtq = parseInt(prompt("Insira o poder de ataque do personagem:"));

const nomeDef = prompt("Insira o nome do personagem defensivo:");
const vida = parseInt(prompt("Insira a quantidade de vida do personagem defensivo:"));
const poderDef = parseInt(prompt("Insira o poder de defesa do personagem defensivo:"));
const escudo = prompt("O personagem defensivo possui escudo?");


if (escudo !== "sim" && escudo !== "não") {
    escudo = prompt("Responda sim ou não").toLowerCase();
} else {

}




let valorEscudo = Boolean(escudo);

let atqXDef = poderAtq - poderDef;

let defXAtq = (poderAtq - poderDef) / 2;


let danoVida =  vida - atqXDef;

let danoVidaEscudo = vida - defXAtq;

if (poderAtq > poderDef && escudo === "não") {
    alert(`O poder de ataque de ${nomeAtq} foi de ${poderAtq} sendo maior que a defesa de ${poderDef} e o defensor ${nomeDef} estava sem escudo causando um dano de ${atqXDef} a ${nomeDef} e ficando com ${danoVida} pontos de vida!`);
} else if (poderAtq > poderDef && escudo === "sim") {
    alert(`O poder de ataque de ${nomeAtq} foi de ${poderAtq} sendo maior que a defesa ${poderDef} do defensor ${nomeDef}, porem ele usava escudo e com isso o dano caiu pela metade ficando ${defXAtq} e com ${danoVidaEscudo} pontos de vida.`);
} else {
    alert(`O seu poder de ataque foi menor ou igual ao poder de defesa e portando o dano será 0.`);
}

alert(`${nomeAtq} \nPoder de ataque: ${poderAtq} \n\n ${nomeDef} \nPontos de vida: ${vida} \nPoder de defesa: ${poderDef} \nPossui escudo: ${escudo}`);






/* ------MODELO DO PROFESSOR---------- */



const atacante = prompt("Insira o nome do personagem atacante:");
const poderDeAtaque = prompt("Insira o poder de ataque do personagem:");


const defensor = prompt("Insira o nome do personagem defensivo:");
let pontosDeVida = prompt("Quantos pontos de vida ele possui?");
const poderDeDefesa = prompt("Qual é o seu poder de defesa?");
const possuiEscudo = prompt("Ele possui escudo? (sim/não)");


let danoCausado = 0;


if (poderDeAtaque > poderDeDefesa && possuiEscudo === "não") {
    danoCausado = poderDeAtaque - poderDeDefesa ;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;


alert(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}`);

alert(`${atacante} \nPoder de ataque: ${poderDeAtaque} \n\n ${defensor} \nPontos de vida: ${pontosDeVida} \nPoder de defesa: ${poderDeDefesa} \nPossui escudo: ${possuiEscudo}`);









/* 
1 nome do personagem

2 poder de ataque

3 nome (?)

4 quantidade de pontos de vida

5 poder de defesa de outro personagem

6 e se possui um escudo

calcular a quantidade de dano causado




*/


