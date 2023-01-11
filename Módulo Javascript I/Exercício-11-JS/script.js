let menu = "";
let salvarImoveis = [];



do {

    menu = prompt(`Quantidade de imóveis cadastrados: ${salvarImoveis.length}\n\n
    1) Salvar um imóvel.
    2) Mostrar todos os imóveis salvos.
    3) Sair.`)

    switch(menu) {
        case "1":
            const imovel = {};

            imovel.proprietario = prompt("Nome do proprietário: ");
            imovel.quartos = prompt("Quantos quartos? ");
            imovel.banheiros = prompt("Quantos banheiros? ");
            imovel.garagem = prompt("Possui garagem? (Sim/Não)");

            const confirmacao = confirm(
                `Salvar este imóvel?\n
                \nProprietário: ${imovel.proprietario}
                \nQuartos: ${imovel.quartos}
                \nBanheiros: ${imovel.banheiros}
                \nGaragem: ${imovel.garagem}`
            );

            if (confirmacao) {
                salvarImoveis.push(imovel);
                alert("Imovel salvo com sucesso!");
            } else {
                alert("Voltando ao menu.");
            }

            break;
        case "2":
            
            for (let i = 0; i < salvarImoveis.length; i++) {
                alert(
                    `Imóvel: ${i + 1}
                    \nProprietário: ${salvarImoveis[i].proprietario}
                    \nQuartos: ${salvarImoveis[i].quartos}
                    \nBanheiros: ${salvarImoveis[i].banheiros}
                    \nPossui garagem? ${salvarImoveis[i].garagem}`
                );
            }

            break;
        case "3":
            alert("Encerrando...");
            break;    
        default:
            alert("Opção inválida.")
            break;
    }

} while (menu !== "3")