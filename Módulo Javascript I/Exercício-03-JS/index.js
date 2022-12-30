const valorEmMetros = prompt("Digite um valor que será em metros: ");
const opcoes = prompt("Agora escolha a opção a ser convertida: \n\na) milímetros (mm) \nb) centímetro (cm) \nc) decímetro (dm) \nd) decâmetro (dam) \ne) hectômetro (hm) \nf) quilômetro (km)");

let resultado = 0;
let valores = 0;

switch (opcoes) {
    case "a":
        resultado = valorEmMetros * 1000;
        valores = "milímetros";
        break;
    case "b":
        resultado = valorEmMetros * 100;
        valores = "centímetros";
        break;
    case "c":
        resultado = valorEmMetros * 10;
        valores = "decímetros";
        break;
    case "d":
        resultado = valorEmMetros * 0.1;
        valores = "decâmetros";
        break;
    case "e":
        resultado = valorEmMetros * 0.01;
        valores = "hectômetros";
        break;
    case "f":
        resultado = valorEmMetros * 0.001;
        valores = "quilômetros";
        break;
    default:
        console.log("erro");     
}


alert(`${valorEmMetros}m = ${resultado} ${valores}.`);