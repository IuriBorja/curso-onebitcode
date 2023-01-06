/* As cartas de baralho tradicional são numeradas 
de 2 a 10. O restante é figurado em ás ~
(A, que equivale a um), valete (J, correspondente ao número  11)
, dama (Q, vale 12), rei (K, vale 13) e o coringa, 
ou joker, que garante benefícios a quem fica com ela.

As cartas de baralho (2 a 10, valete, dama, rei e coringa)
são divididas em quatro naipes: espadas (♠), paus (♣), 
copas (♥) e ouros (♦).

*/


const baralho = ["2 de Espadas ", "2 de Paus ", "2 de Copas ", "2 de Ouros ", "Dama ",
"Valete ", "Rei ", "Às ", "Coringa "];

let cartas = [];

do {
    cartas = prompt(`Cartas do baralho.
    ${baralho}\n
    1 - Adicionar uma carta ao baralho.
    2 - Puxar uma carta:
    3 - Sair.`);


    if(cartas === "1") {
        let nomeCarta = prompt("Qual o nome da carta?");
        cartas = baralho.push(nomeCarta + " ");
    } else if (cartas === "2") {
        if (baralho.length > 0) {
        let puxeCarta = baralho.shift();
        alert(`A carta ${puxeCarta} foi retirada do topo do baralho.`);
        } else {
            alert("Já não há mais cartas no baralho.")
        }
    } else {
        alert("Finalizando...");
    }

} while (cartas !== "3") 
