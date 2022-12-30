/* const resultado = prompt("Escolha uma alternativa : \n (a \n (b \n (c");


switch (resultado) {
    case "a":
        alert("O resultado é 'a'");
        break;
    case "b":
        alert("O resultado é 'b'");
        break;
    case "c":
        alert("O resultado é 'c'");
        break;
    default:
        alert("Finalizando...");    
}
 */



/* ------------------------- */




const random = Math.floor(Math.random() * 6);

/* console.log(random); */


let notaJoao = 0;
let notas = 0;

switch (random) {
    case 0:
        notaJoao += random;
        notas = "reprovado";
    break;
    case 1:
        notaJoao += random;
        notas = "reprovado";
    break;
    case 2:
        notaJoao += random;  
        notas = "reprovado";
    break;
    case 3:
        notaJoao += random;
        notas = "regular";  
    break;
    case 4:
        notaJoao += random;  
        notas = "bom";
    break;
    case 5:
        notaJoao += random;  
        notas = "aprovado";
    break;
    default:
        console.log("erro");

}


console.log(`A nota de João foi ${notaJoao}, ${notas}!`);
