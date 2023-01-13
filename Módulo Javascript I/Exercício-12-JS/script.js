let menu = "";

do {
  menu = prompt(`Escolha uma opção de cálculo:
    \n1) Calcule a área do triângulo:
    \n2) Calcule a área do retângulo:
    \n3) Calcule a área do quadrado:
    \n4) Calcule a área do trapézio:
    \n5) Calcule a área do círculo:
    \n\n 6) Sair`);

  switch (menu) {
    case "1":
      let base = prompt("Digite o valor da base:");
      let altura = prompt("Digite o valor da altura:");
      function triangulo(base, altura) {
        let calculo = (base * altura) / 2;
        return calculo;
      }
      let resultado = triangulo(base, altura);
      alert(`O resultado é ${resultado}`);
      break;
    case "2":
      let base2 = prompt("Digite o valor da base:");
      let altura2 = prompt("Digite o valor da altura:");
      function retangulo(base2, altura2) {
        let calculo2 = base2 * altura2;
        return calculo2;
      }
      let resultado2 = retangulo(base2, altura2);
      alert(`O resultado é ${resultado2}`);
      break;
    case "3":
      let lado = prompt("Digite o valor do lado:");
      function quadrado(lado) {
        let calculo3 = lado * lado;
        return calculo3;
      }
      let resultado3 = quadrado(lado);
      alert(`O resultado é ${resultado3}`);
      break;
    case "4":
      let baseMaior = parseFloat(prompt("Digite a base maior:"));
      let baseMenor = parseFloat(prompt("Digite a base menor:"));
      let altura3 = prompt("Digite a altura:");
      function trapezio(baseMaior, baseMenor, altura3) {
        let calculo4 = ((baseMaior + baseMenor) * altura3) / 2;
        return calculo4;
      }
      let resultado4 = trapezio(baseMaior, baseMenor, altura3);
      alert(`O resultado é ${resultado4}`);
      break;
    case "5":
      let raio = prompt("Digite o raio:");
      function circulo(raio) {
        let calculo5 = 3.14 * (raio * raio);
        return calculo5;
      }
      let resultado5 = circulo(raio);
      alert(`O resultado é ${resultado5}`);
      break;
    case "6":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (menu !== "6");







/* ************************************************ */
/* MODO FEITO PELO PROFESSOR */



function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo:");
    const altura = prompt("Informe a altura do triângulo:");
    return base * altura  / 2;
}

function calcularAreaRetangulo() {
    const base = prompt("Informe a base do retângulo:");
    const altura = prompt("Informe a altura do retângulo:");
    return base * altura;
}

function calcularAreaQuadrado() {
    const lado = prompt("Informe a base do quadrado:");
    return lado * lado;
}

function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
    const altura = prompt("Informe a altura do trapézio");
    return (baseMaior + baseMenor) * altura / 2;
}

function calcularAreaCirculo() {
    const raio = prompt("Informe o raio do círculo:");
    return 3.14 * (raio * raio);
}

function exibirMenu() {
    return prompt(`Escolha uma opção de cálculo:
    \n1) Calcule a área do triângulo:
    \n2) Calcule a área do retângulo:
    \n3) Calcule a área do quadrado:
    \n4) Calcule a área do trapézio:
    \n5) Calcule a área do círculo:
    \n\n 6) Sair`);
}


function executar() {
    let opcao = "";

    do {
        opcao = exibirMenu();
        let  resultado;

        switch(opcao) {
            case "1":
                resultado = calcularAreaTriangulo();
                break;
            case "2":
                resultado = calcularAreaRetangulo();
                break;
            case "3":
                resultado = calcularAreaQuadrado();
                break;
            case "4":
                resultado = calcularAreaTrapezio();
                break;
            case "5": 
                resultado = calcularAreaCirculo();
                break;   
            case "6":
                alert("Encerrando...");
                break;
            default:
                alert("Opção inválida.");
                break;
        }

        if(resultado) {
            alert(`Resultado: ${resultado}`);
        }


    } while (opcao !== "6")
}


/* executar(); */