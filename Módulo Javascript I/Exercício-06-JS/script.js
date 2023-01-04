
let saldo = parseFloat(prompt("Digite seu saldo:"));
/* let opcao = ""; */



do {
    let = opcao = prompt(`
    Saldo atual: ${saldo}
    \n1. Adicionar valor.
    \n2. Remover valor.
    \n3. Sair`);

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Quanto quer adicionar?"));
            break;
        case "2":
            saldo -= prompt("Quanto quer remover?");
            break;
        case "3":
            alert("Saindo...");
            break;
        default:
            alert("Comando inválido.");            
    }

} while (opcao !== "3")