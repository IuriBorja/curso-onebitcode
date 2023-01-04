

let menu = prompt(
  "Selecione uma das opções abaixo:\nA) \nB) \nC) \nD) \nE) Encerrar"
);

while ((menu === "A", "B", "C", "D")) {

  switch (menu) {
    case "A":
      alert("Opção A: nada acontece!");
      break;
    case "B":
      alert("Opção B: nada acontece!");
      break;
    case "C":
      alert("Opção C: nada acontece!");
      break;
    case "D":
      alert("Opção D: nada acontece!");
      break;
    default:
      alert("Opção inválida.")
  }

  menu = prompt(
    "Selecione uma das opções abaixo de novo:\nA) \nB) \nC) \nD) \nE) Encerrar"
  );

  if (menu === "E") {
    alert("O sistema está sendo encerrado...");
    break;
  }
}

/* 

if (menu === "A") {
    alert(`Opção A: nada acontece!`);
} else if (menu === "B") {
    alert(`Opção B: nada acontece!`);
} else if (menu === "C") {
    alert(`Opção C: nada acontece!`);
} else if (menu === "D") {
    alert(`Opção D: nada acontece!`);
} */
