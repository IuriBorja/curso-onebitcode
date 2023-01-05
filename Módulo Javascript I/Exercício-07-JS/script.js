const num = prompt("Diga um número:");

let resultado = "";

for(let i = 1; i <= 20; i++) {
    resultado += `${num} x ${i} = ${num * i}\n`;
}

alert(resultado); 