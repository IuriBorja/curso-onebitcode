/* let nomes = ["Jonh ", "Chad ", "Maria ", "Anthony ", "Flea "];

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
 */





/* MODO DO PROFESSOR */




let fila = [];
let opcao = "";

do {
    let pacientes = "";
    for(let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "ª - " + fila[i] + "\n"; 
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma opção:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
    )

        switch (opcao) {
            case "1":
                const novoPaciente = prompt("Qual é o nome do paciente?");
                fila.push(novoPaciente);
                break;
            case "2":
                const pacienteConsultado = fila.shift();
                if (pacienteConsultado) {
                alert(pacienteConsultado + " foi removido da fila.");
                } else {
                    alert("Não há mais pacientes na fila!");
                }    
                break;
            case "3":
                alert("Encerrando...");
                break;
            default:
                alert("Opção inválida!");
                break;            
        }


} while (opcao !== "3")