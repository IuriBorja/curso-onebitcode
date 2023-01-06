let nomes = ["Jonh ", "Chad ", "Maria ", "Anthony ", "Flea "];

let lista = [];

do {
    lista = prompt(`Lista dos pacientes:\n
    - ${nomes}\n
    a) Adicionar novo paciente.
    b) Consultar paciente
    c) Sair`);


    if (lista === "a") {
        let nomePaciente = prompt("Diga o nome do novo paciente: ");
        lista = nomes.push(nomePaciente + " ");
    } else if (lista === "b") {
        if (nomes.length > 0) {
        lista = nomes.shift() ;
        alert(`${lista} foi consultado!`);
        } else {
            alert("Não há pacientes na fila!");
        }
    } else {
        alert("Desligando...");    
    }

} while (lista !== "c")

