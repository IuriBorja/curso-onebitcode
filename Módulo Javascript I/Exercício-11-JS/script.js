let menu = "";
let numeroImoveis = 0;
let salvarImoveis = [];
let informacoesImoveis = {
    nome: "",
    quartos: 0,
    banheiros: 0,
    garagem: ""
};


do {

    menu = prompt(`Quantidade de imóveis cadastrados: ${salvarImoveis.length}\n\n
    1) Salvar um imóvel.
    2) Mostrar todos os imóveis salvos.
    3) Sair.`)

    switch(menu) {
        case "1":
            const 
            break;
        case "2":
            let imoveis = prompt(`Nome: ${nome}\n
            Quartos: ${quartos}\n
            Banheiros: ${banheiros}\n
            Garagem: ${garagem}`);
            break;
        case "3":
            alert("Encerrando...");
            break;    
        default:
            alert("Opção inválida.")
            break;
    }

} while (menu !== "3")